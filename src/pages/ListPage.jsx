import { Outlet, useNavigate } from 'react-router-dom';
import { MaterialList } from 'components/MaterialList/MaterialList';
import { useGetMaterialsQuery } from 'redux/materialsSlice';

export const ListPage = () => {
  const navigate = useNavigate();
  const { data: materials, error, isLoading } = useGetMaterialsQuery();

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
        <MaterialList items={materials} />
      )}
      <Outlet />
    </div>
  );
};
