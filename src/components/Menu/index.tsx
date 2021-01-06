/** @format */

import React from 'react';

import {
  Container,
  Content,
  NavContainer,
  ListaLinks,
  ItemLink,
} from './styles';

import logoImg from '../../assets/Logo One Piece.png';

import { Link } from 'react-scroll';

const corPrincipalPersonagem = '#e65a29';

const Menu: React.FC = () => {
  return (
    <Container corPrincipalPersonagem={corPrincipalPersonagem}>
      <Content>
        <img src={logoImg} alt='Logo One Piece' />
        <NavContainer>
          <ListaLinks>
            <ItemLink>
              <Link
                to='luffy'
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}>
                Luffy
              </Link>
            </ItemLink>
            <ItemLink>
              <Link
                to='sanji'
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}>
                Sanji
              </Link>
            </ItemLink>
            <ItemLink>
              <Link
                to='robin'
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}>
                Robin
              </Link>
            </ItemLink>
            <ItemLink>
              <Link
                to='nami'
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}>
                Nami
              </Link>
            </ItemLink>
            <ItemLink>
              <Link
                to='zoro'
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}>
                Zoro
              </Link>
            </ItemLink>
          </ListaLinks>
        </NavContainer>
      </Content>
    </Container>
  );
};

export default Menu;
