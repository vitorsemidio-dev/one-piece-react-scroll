/** @format */

import React, { useMemo } from 'react';

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
  const personagens = useMemo(() => {
    return [
      {
        nome: 'Luffy',
        id: 'luffy',
      },
      {
        nome: 'Robin',
        id: 'robin',
      },
      {
        nome: 'Sanji',
        id: 'sanji',
      },
      {
        nome: 'Nami',
        id: 'nami',
      },
      {
        nome: 'Zoro',
        id: 'zoro',
      },
    ];
  }, []);

  return (
    <Container corPrincipalPersonagem={corPrincipalPersonagem}>
      <Content>
        <img src={logoImg} alt='Logo One Piece' />
        <NavContainer>
          <ListaLinks>
            {personagens.map((personagem) => (
              <ItemLink key={personagem.nome}>
                <Link
                  to={personagem.id}
                  smooth={true}
                  duration={500}
                  spy={true}>
                  {personagem.nome}
                </Link>
              </ItemLink>
            ))}
          </ListaLinks>
        </NavContainer>
      </Content>
    </Container>
  );
};

export default Menu;
