/** @format */

import styled, { css } from 'styled-components';

interface ContainerProps {
  corPrincipalPersonagem: string;
}

export const Container = styled.header<ContainerProps>`
  width: 100%;
  height: 100px;
  position: fixed;
  z-index: 10;

  /* ${({ corPrincipalPersonagem }) => css`
    background-image: linear-gradient(${corPrincipalPersonagem}, transparent);
  `} */
  background-image: linear-gradient(#fff, transparent);

  padding: 0 15px;
  display: flex;
  justify-content: center;
`;
export const Content = styled.div`
  width: 100%;
  height: 100px;
  max-width: 1200px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavContainer = styled.nav``;

export const ListaLinks = styled.ul`
  display: flex;
`;

export const ItemLink = styled.li`
  padding: 15px;
  cursor: pointer;

  & + & {
    margin-left: 15px;
  }
`;
