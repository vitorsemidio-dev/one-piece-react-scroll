/** @format */

import React, { useMemo, useState } from 'react';
import { Link } from 'react-scroll';

import {
  Container,
  Content,
  NavContainer,
  ListaLinks,
  ItemLink,
} from './styles';

import logoImg from '../../assets/Logo One Piece.png';

import dadosPersonagens from '../../dados';

const Menu: React.FC = () => {
  const personagens = useMemo(() => {
    const nomes = dadosPersonagens.map((personagem) => {
      const nomesSeparados = personagem.nomePersonagem.split(' ');

      return {
        ...personagem,
        nomePersonagem: nomesSeparados[nomesSeparados.length - 1],
      };
    });
    return nomes;
  }, []);

  const [corPrincipalAtivada, setCorPrincipalAtivada] = useState('#fff');

  const handleSessaoAtiva = (to: string) => {
    const personagemAtivado = personagens.find(
      (personagem) => personagem.id === to,
    );

    if (personagemAtivado) {
      setCorPrincipalAtivada(personagemAtivado.corPrincipalPersonagem);
    } else {
      setCorPrincipalAtivada('#fff');
    }
  };

  return (
    <Container corPrincipalPersonagem={corPrincipalAtivada}>
      <Content>
        <img src={logoImg} alt='Logo One Piece' />
        <NavContainer>
          <ListaLinks>
            {personagens.map((personagem) => (
              <ItemLink key={personagem.nomePersonagem}>
                <Link
                  to={personagem.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  onSetActive={(to) => handleSessaoAtiva(to)}
                  style={{
                    padding: 15,
                    cursor: 'pointer',
                  }}>
                  {personagem.nomePersonagem}
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
