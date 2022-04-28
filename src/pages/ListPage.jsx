import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MaterialList } from 'components/MaterialList/MaterialList';
import * as API from 'services/api';

export const ListPage = () => {
  const navigate = useNavigate();
  const [materials, setMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const deleteMaterial = async id => {
    try {
      await API.deleteMaterial(id);
      setMaterials(materials => materials.filter(m => m.id !== id));
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    async function fetchMaterials() {
      try {
        setIsLoading(true);
        const materials = await API.getMaterials();
        setMaterials(materials);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
        console.log(error);
      }
    }
    fetchMaterials();
  }, []);

  return (
    <div>
      <button type="button" onClick={() => navigate('/create')}>
        Добавить материал
      </button>
      {error && (
        <p>
          Ой! Что-то пошло не так :( Перезагрузите страницу и попробуйте еще
          раз.
        </p>
      )}
      {isLoading ? (
        <b>Загружаем материалы</b>
      ) : (
        <MaterialList
          items={materials}
          onDelete={deleteMaterial}
          onUpdate={() => null}
        />
      )}
    </div>
  );
};
