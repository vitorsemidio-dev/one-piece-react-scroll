/** @format */

import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

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
            <FaPlayCircle size={100} color={corPrincipalPersonagem} />
            <InformacaoEpisodioConteudo>
              <NumeroEpisodio>Episódio {numeroEpisodio}</NumeroEpisodio>
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
