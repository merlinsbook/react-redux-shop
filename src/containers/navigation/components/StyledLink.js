import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 50px;
  width: auto;
  padding: 0 50px;
  text-decoration: none;
  transition: ease-in-out, color .35s ease-in-out,  background-color .35s ease-in-out;
  cursor: default;

  & * {    
    color: #2CA58D;
  transition: ease-in-out, color .15s ease-in-out;
  }

  &:hover {
    background-color: #2CA58D;
    color: rgba(255,255,255,0.9);

    & * {    
    color: #fff;
  }
  }

  ${props => props.active && css`
    background-color: #2CA58D;
    color: rgba(255,255,255,0.9);
    font-weight: 600;

    & * {    
      color: rgba(255,255,255,0.9);
    }

    &:hover {
      color: rgba(255,255,255,0.9);
    }
  `}
`;