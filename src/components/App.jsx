import { Routes, Route, Navigate } from 'react-router-dom';
import { CreateMaterialPage } from 'pages/CreateMaterial';
import { ListPage } from 'pages/ListPage';
import { Layout } from './Layout';
import { NotFoundPage } from 'pages/NotFoundPage';
import { EditMaterialModal } from 'components/EditMaterialModal/EditMaterialModal';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/list" />} />
          <Route path="create" element={<CreateMaterialPage />} />
          <Route path="list/*" element={<ListPage />}>
            <Route path="edit/:materialId" element={<EditMaterialModal />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
