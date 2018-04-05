import styled, { css } from 'styled-components';

export const Layout = styled.main`
  height: 100%;
  display: grid;
  grid-row-gap: 0;
  grid-column-gap: 0;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
  "header"
  "menu"
  "content";
`;

export const Header = styled.header`
  background-color: #EEE;
  color: #333;
  display: flex;
  font-size: 42px;
  font-weight: 600;
  grid-area: header;
  justify-content: center;
  padding: 1em;
`;

export const Content = styled.section`
  background-color: #EEE;
  grid-area: content;
  position: relative;
`;

export const Footer = styled.footer`
  background-color: rgba(0,0,0,0.6);
  bottom: 0;
  grid-area: footer;
  width: 100%;
`;
