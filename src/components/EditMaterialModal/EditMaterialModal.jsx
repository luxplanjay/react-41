import { useNavigate, useParams } from 'react-router-dom';
import { MaterialEditorForm } from '../MaterialEditorForm/MaterialEditorForm';
import { Overlay, Modal } from './EditMaterialModal.styled';
import * as API from 'services/api';
import { useState, useEffect } from 'react';

export const EditMaterialModal = () => {
  const { materialId } = useParams();
  const [material, setMaterial] = useState(null);
  const navigate = useNavigate();
  const closeModal = () => navigate('/list');

  const updateMaterial = async fields => {
    try {
      await API.updateMaterial({ id: materialId, ...fields });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function getMaterial() {
      const material = await API.getMaterialById(materialId);
      setMaterial(material);
    }
    getMaterial();
  }, [materialId]);

  return (
    <Overlay>
      <Modal>
        {material && (
          <MaterialEditorForm
            initialValues={{ title: material.title, link: material.link }}
            btnText="Сохранить изменения"
            onSubmit={updateMaterial}
          />
        )}

        <button type="button" onClick={closeModal}>
          Закрыть
        </button>
      </Modal>
    </Overlay>
  );
};
