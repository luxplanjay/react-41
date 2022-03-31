import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import {
  MenuContainer,
  Avatar,
  Username,
  PointsPopover,
  PointsLabel,
  Points,
} from './UserMenu.styled';

export const UserMenu = ({ user }) => {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  return (
    <MenuContainer
      onMouseEnter={() => setIsPopoverVisible(true)}
      onMouseLeave={() => setIsPopoverVisible(false)}
    >
      <Avatar isOnline={user.isOnline}>
        <FaUserCircle size="40" />
      </Avatar>
      <Username>{user.username}</Username>
      {isPopoverVisible && (
        <PointsPopover>
          <PointsLabel>Текущее кол-во очков:</PointsLabel>
          <Points variant="total">{user.points.total}</Points>
          <PointsLabel>Нужно для след. уровня:</PointsLabel>
          <Points variant="required">{user.points.required}</Points>
        </PointsPopover>
      )}
    </MenuContainer>
  );
};
