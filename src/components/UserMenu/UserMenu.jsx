import { Component } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import {
  MenuContainer,
  Avatar,
  Username,
  PointsPopover,
  PointsLabel,
  Points,
} from './UserMenu.styled';

export class UserMenu extends Component {
  state = {
    isPopoverVisible: false,
  };

  openPopover = () => this.setState({ isPopoverVisible: true });
  closePopover = () => this.setState({ isPopoverVisible: false });

  render() {
    const { isPopoverVisible } = this.state;
    const { user } = this.props;
    return (
      <MenuContainer
        onMouseEnter={this.openPopover}
        onMouseLeave={this.closePopover}
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
  }
}
