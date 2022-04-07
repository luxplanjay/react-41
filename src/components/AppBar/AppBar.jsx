import { UserMenu } from '../UserMenu/UserMenu';
import { SidebarContainer } from './AppBar.styled';

export const AppBar = ({ user, onClose }) => {
  return (
    <SidebarContainer>
      <UserMenu user={user} />
      <button type="button" onClick={onClose}>
        Закрыть
      </button>
    </SidebarContainer>
  );
};
