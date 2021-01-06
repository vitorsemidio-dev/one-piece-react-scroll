/** @format */

import React from 'react';

import {
  BackgroundContainer,
  ConteudoContainer,
  InformacaoContainer,
  NomePersonagem,
  DescricaoPersonagem,
  InformacaoEpisodioContainer,
  InformacaoEpisodioConteudo,
  NumeroEpisodio,
  TituloEpisodio,
  ImagemPersonagem,
  ImagemPersonagemContainer,
} from './styles';

import playVideoIcon from '../../assets/play-video.svg';

interface SessaoPersonagemProps {
  id: string;
  nomePersonagem: string;
  descricaoPersonagem: string;
  numeroEpisodio: number;
  tituloEpisodio: string;
  subTituloEpisodio?: string;
  imagemFundoPersonagem: string;
  imagemPrincipalPersonagem: string;
  corPrincipalPersonagem: string;
  corSecondariaPersonagem: string;
  trocaPosicao: boolean;
}

const SessaoPersonagem: React.FC<SessaoPersonagemProps> = ({
  id,
  nomePersonagem,
  descricaoPersonagem,
  numeroEpisodio,
  tituloEpisodio,
  subTituloEpisodio,
  imagemFundoPersonagem,
  imagemPrincipalPersonagem,
  corPrincipalPersonagem,
  corSecondariaPersonagem,
  trocaPosicao,
}) => {
  return (
    <BackgroundContainer
      id={id}
      imagemFundoPersonagem={imagemFundoPersonagem}
      corFundo={corSecondariaPersonagem}>
      <ConteudoContainer trocaPosicao={trocaPosicao}>
        <InformacaoContainer trocaPosicao={trocaPosicao}>
          <NomePersonagem trocaPosicao={trocaPosicao}>
            {nomePersonagem}
          </NomePersonagem>
          <DescricaoPersonagem trocaPosicao={trocaPosicao}>
            {descricaoPersonagem}
          </DescricaoPersonagem>
          <InformacaoEpisodioContainer>
            <img src={playVideoIcon} alt='Botão play' />
            <InformacaoEpisodioConteudo>
              <NumeroEpisodio>Episodio {numeroEpisodio}</NumeroEpisodio>
              <TituloEpisodio>
                {tituloEpisodio} <br /> {subTituloEpisodio}
              </TituloEpisodio>
            </InformacaoEpisodioConteudo>
          </InformacaoEpisodioContainer>
        </InformacaoContainer>
        <ImagemPersonagemContainer corFundo={corPrincipalPersonagem}>
          <ImagemPersonagem src={imagemPrincipalPersonagem} />
        </ImagemPersonagemContainer>
      </ConteudoContainer>
    </BackgroundContainer>
  );
};

export default SessaoPersonagem;
