import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';

export const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Toaster />
      <Outlet />
    </>
  );
};
