import { useNavigate } from 'react-router-dom';

export const Material = ({ item, onUpdate, onDelete }) => {
  const navigate = useNavigate();

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
      <button type="button" onClick={() => navigate(`/list/edit/${item.id}`)}>
        Редактировать
      </button>
    </div>
  );
};
