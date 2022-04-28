import { Routes, Route } from 'react-router-dom';
import { CreateMaterialPage } from 'pages/CreateMaterial';
import { ListPage } from 'pages/ListPage';
import { Layout } from './Layout';
import { NotFoundPage } from 'pages/NotFoundPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="create" element={<CreateMaterialPage />} />
          <Route path="list" element={<ListPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
