import { Outlet, useNavigate } from 'react-router-dom';
import { MaterialList } from 'components/MaterialList/MaterialList';
import { useGetMaterialsQuery } from 'redux/materialsSlice';
import { Filter } from 'components/Filter/Filter';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

const useMaterials = () => {
  const filter = useSelector(state => state.filter.value);

  const selectFilteredMaterials = useMemo(() => {
    return createSelector(
      [response => response.data, (_, filter) => filter],
      (materials, filter) => {
        return (
          materials?.filter(m =>
            m.title.toLowerCase().includes(filter.toLowerCase())
          ) ?? []
        );
      }
    );
  }, []);

  return useGetMaterialsQuery(undefined, {
    selectFromResult(result) {
      return {
        ...result,
        filteredMaterials: selectFilteredMaterials(result, filter),
      };
    },
  });
};

export const ListPage = () => {
  const navigate = useNavigate();
  const { filteredMaterials, isLoading, error } = useMaterials();

  return (
    <div>
      <button type="button" onClick={() => navigate('/create')}>
        Добавить материал
      </button>
      <hr />
      <Filter />
      {error && (
        <p>
          Ой! Что-то пошло не так :( Перезагрузите страницу и попробуйте еще
          раз.
        </p>
      )}
      {isLoading ? (
        <b>Загружаем материалы</b>
      ) : (
        <MaterialList items={filteredMaterials} />
      )}
      <Outlet />
    </div>
  );
};
