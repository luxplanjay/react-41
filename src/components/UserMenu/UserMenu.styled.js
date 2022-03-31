import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;

  :hover {
    background-color: lightgray;
  }
`;

export const Avatar = styled.div`
  display: inline-flex;
  border: 4px solid ${p => (p.isOnline ? 'green' : 'red')};
  border-radius: 50%;
  color: #2a2a2a;
`;

export const Username = styled.p`
  color: #212121;
`;

export const PointsPopover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(100%);
  height: 100%;
  padding: 4px;
  background-color: gray;
`;

export const PointsLabel = styled.p`
  font-size: 12px;
  color: #010101;
  line-height: 1.5;
`;

export const Points = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.5;
  color: ${p => (p.variant === 'total' ? 'orange' : 'orangered')};
`;
