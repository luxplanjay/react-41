import { useModal } from 'hooks';

const EditMaterialModal = ({ onClose, onEdit }) => {
  return (
    <div>
      <h2>Модалка редактирования материала</h2>
      <button
        type="button"
        onClick={() => {
          onEdit();
          onClose();
        }}
      >
        Вот теперь точно редактировать
      </button>
      <button type="button" onClick={onClose}>
        Закрыть
      </button>
    </div>
  );
};

export const Material = ({ item, onUpdate, onDelete }) => {
  const { isModalOpen, closeModal, openModal } = useModal();
  // Кастомный хук useModal закрывает в себе такую логику
  // Ее можно было писать тут вручную вот так
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <p>
        <b>Название:</b> {item.title}
      </p>
      <p>
        <b>Ссылка:</b> {item.link}
      </p>
      <button type="button" onClick={() => onDelete(item.id)}>
        Удалить
      </button>
      <button type="button" onClick={openModal}>
        Редактировать
      </button>
      {isModalOpen && (
        <EditMaterialModal
          onClose={closeModal}
          onEdit={() => onUpdate({ id: item.id, title: Date.now() })}
        />
      )}
    </div>
  );
};
