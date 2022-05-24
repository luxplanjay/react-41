import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <p>
      Извините, страница не найдена! Перейдите на{' '}
      <Link to="/list">список материалов</Link>
    </p>
  );
};
