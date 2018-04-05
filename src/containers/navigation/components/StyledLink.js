import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 38px;
  list-style-type: none;
  text-decoration: none;

  &:focus {
    outline: none;
  }
`;