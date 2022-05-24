import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;

  > a {
    text-decoration: none;
    color: black;
  }
`;

export const BackLink = ({ href, label }) => {
  return (
    <Wrapper>
      <HiArrowNarrowLeft size="24" />
      <Link to={href}>{label}</Link>
    </Wrapper>
  );
};
