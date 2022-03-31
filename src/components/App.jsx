import { GlobalStyle } from './GlobalStyle';
import { AppBar } from './AppBar/AppBar';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <AppBar
        user={{
          username: 'Дядя Ваня',
          isOnline: true,
          points: {
            total: 700,
            required: 200,
          },
        }}
      />
    </div>
  );
};
