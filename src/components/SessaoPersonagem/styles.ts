/** @format */

import styled, { css } from 'styled-components';

interface BackgroundContainerProps {
  imagemFundoPersonagem: string;
  corFundo: string;
}

export const BackgroundContainer = styled.section<BackgroundContainerProps>`
  padding-top: 100px;
  height: 100vh;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: ${({ corFundo }) => corFundo};
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background: url('${({ imagemFundoPersonagem }) => imagemFundoPersonagem}')
      no-repeat center;
    background-size: cover;
    z-index: -1;
    opacity: 0.2;
  }
`;

interface ITrocaPosicao {
  trocaPosicao: boolean;
}

export const ConteudoContainer = styled.div<ITrocaPosicao>`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  height: 100%;

  display: flex;
  justify-content: space-between;

  ${({ trocaPosicao }) =>
    trocaPosicao &&
    css`
      flex-direction: row-reverse;
    `}
`;

export const InformacaoContainer = styled.div<ITrocaPosicao>`
  display: flex;
  flex-direction: column;

  ${({ trocaPosicao }) =>
    trocaPosicao &&
    css`
      align-items: flex-end;
    `}
`;

export const NomePersonagem = styled.h2<ITrocaPosicao>`
  text-align: ${({ trocaPosicao }) => (trocaPosicao ? 'right' : 'left')};
  font-size: 72px;
  width: 350px;
  text-transform: uppercase;
  margin-bottom: 32px;
`;

export const DescricaoPersonagem = styled.p<ITrocaPosicao>`
  text-align: ${({ trocaPosicao }) => (trocaPosicao ? 'right' : 'left')};
  margin-bottom: 96px;
`;

export const InformacaoEpisodioContainer = styled.div`
  display: flex;
`;

export const IconePlayVideo = styled.img``;

export const InformacaoEpisodioConteudo = styled.div`
  margin-left: 16px;
`;

export const NumeroEpisodio = styled.h3`
  margin-bottom: 8px;
`;

export const TituloEpisodio = styled.h4`
  font-weight: 500;
  color: #66675f;
`;

interface ImagemPersonagemContainerProps {
  corFundo: string;
}

export const ImagemPersonagemContainer = styled.div<ImagemPersonagemContainerProps>`
  width: 540px;
  height: 540px;
  background-color: ${({ corFundo }) => corFundo};
  border-radius: 50%;
`;
export const ImagemPersonagem = styled.img`
  width: 540px;
`;
