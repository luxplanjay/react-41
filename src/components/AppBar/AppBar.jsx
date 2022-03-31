import { UserMenu } from '../UserMenu/UserMenu';
import { SidebarContainer } from './AppBar.styled';

export const AppBar = ({ user }) => {
  return (
    <SidebarContainer>
      <UserMenu user={user} />
    </SidebarContainer>
  );
};
