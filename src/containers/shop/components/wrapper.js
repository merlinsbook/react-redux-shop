import styled, { css } from 'styled-components';

export const Container = styled.main`
  padding: 2em;
`;

export const Content = styled.section`
  display: flex;
  margin: 20px 0;

  ${props => props.cart && css`
  flex-wrap: wrap;
  `}

  ${props => props.cart && css`
    flex-direction: column;
  `}
`;

export const Header = styled.header`

`;

export const Footer = styled.footer`
  margin: 20px 0;
`;

export const Row = styled.div`
  display: flex;
  margin-top: 8px;
  justify-content: space-between;
  align-items: center;
`;