import { useNavigate, useParams } from 'react-router-dom';
import { MaterialEditorForm } from '../MaterialEditorForm/MaterialEditorForm';
import { Overlay, Modal } from './EditMaterialModal.styled';
import {
  useGetMaterialByIdQuery,
  useUpdateMaterialMutation,
} from 'redux/materialsSlice';

export const EditMaterialModal = () => {
  const { materialId } = useParams();
  const { data: material } = useGetMaterialByIdQuery(materialId);
  const [updateMaterial] = useUpdateMaterialMutation();
  const navigate = useNavigate();
  const closeModal = () => navigate('/list');

  const handleUpdateMaterial = async fields => {
    try {
      await updateMaterial({ id: materialId, ...fields });
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Overlay>
      <Modal>
        {material && (
          <MaterialEditorForm
            initialValues={{ title: material.title, link: material.link }}
            btnText="Сохранить изменения"
            onSubmit={handleUpdateMaterial}
          />
        )}

        <button type="button" onClick={closeModal}>
          Закрыть
        </button>
      </Modal>
    </Overlay>
  );
};
