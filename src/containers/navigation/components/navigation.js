import styled, { css } from 'styled-components';

export const Nav = styled.div`
  grid-area: menu;
  display: flex;
  background-color: #FFFDF7;
  width: 100%;
  height: 100%;
  border-top: 1px solid rgba(255,184,5,0.2);
  border-bottom: 1px solid rgba(255,184,5,0.1);
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: auto;
  padding: 0 50px;
  text-decoration: none;
  transition: ease-in-out, color .35s ease-in-out;
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
