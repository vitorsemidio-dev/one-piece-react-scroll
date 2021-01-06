/** @format */

import imagemPrincipalLuffy from './assets/Luffy Primary.png';
import imagemFundoLuffy from './assets/Luffy BG.png';
import imagemPrincipalNami from './assets/Nami Primary.png';
import imagemFundoNami from './assets/Nami BG.png';
import imagemPrincipalRobin from './assets/Robin Primary.png';
import imagemFundoRobin from './assets/Robin BG.png';
import imagemPrincipalSanji from './assets/Sanji Primary.png';
import imagemFundoSanji from './assets/Sanji BG.png';
import imagemPrincipalZoro from './assets/Zoro Primary.png';
import imagemFundoZoro from './assets/Zoro BG.png';

import colors from './styles/colors';

const { luffy, sanji, robin, nami, zoro } = colors;

const personagens = [
  {
    id: 'luffy',
    nomePersonagem: 'Monkey D. Luffy',
    descricaoPersonagem:
      'Luffy é o protagonista principal de One Piece. Ele é o capitão Piratas do Chapéu de Palha. \nSeu sonho de vida é se tornar o Rei dos Piratas, encontrando o lendário tesouro deixado pelo falecido Rei dos Piratas, Gol D. Roger.',
    numeroEpisodio: 1,
    tituloEpisodio: 'Eu vou me tornar o Rei dos Piratas',
    imagemPrincipalPersonagem: imagemPrincipalLuffy,
    imagemFundoPersonagem: imagemFundoLuffy,
    corPrincipalPersonagem: luffy.primary,
    corSecondariaPersonagem: luffy.secondary,
  },
  {
    id: 'sanji',
    nomePersonagem: 'Vinsmoke Sanji',
    descricaoPersonagem:
      '"Perna Negra" Sanji, nascido como Vinsmoke Sanji, é o cozinheiro dos Piratas do Chapéu de Palha, assim como um antigo chefe de cozinha do Baratie. \nEle também é o terceiro filho e a quarta criança da Família Vinsmoke, tornando-o um príncipe do Reino Germa, até que ele oficialmente os renunciou duas vezes, uma vez quando criança e depois já adulto.',
    numeroEpisodio: 803,
    tituloEpisodio: 'Abandonando o passado',
    subTituloEpisodio: 'Vinsmoke Sanji',
    imagemPrincipalPersonagem: imagemPrincipalSanji,
    imagemFundoPersonagem: imagemFundoSanji,
    corPrincipalPersonagem: sanji.primary,
    corSecondariaPersonagem: sanji.secondary,
  },

  {
    id: 'robin',
    nomePersonagem: 'Nico Robin',
    descricaoPersonagem:
      'Nico Robin, também conhecida como "Criança Demônio" e "Luz da Revolução", é a arqueóloga dos Piratas do Chapéu de Palha. \nEla é a única sobrevivente da ilha destruída de Ohara, localizada no West Blue. Como resultado, ela é atualmente a única pessoa no mundo com a capacidade de ler e decifrar Poneglyphs, uma habilidade que é considerada proibida e que ameaça o Governo Mundial.',
    numeroEpisodio: 770,
    tituloEpisodio: 'O Segredo do País de Wano',
    subTituloEpisodio: 'O Clã Kozuki e os Poneglyphs!',
    imagemPrincipalPersonagem: imagemPrincipalRobin,
    imagemFundoPersonagem: imagemFundoRobin,
    corPrincipalPersonagem: robin.primary,
    corSecondariaPersonagem: robin.secondary,
  },
  {
    id: 'nami',
    nomePersonagem: 'Nami',
    descricaoPersonagem:
      'A "Gata Ladra" Nami é a navegadora dos Piratas do Chapéu de Palha. Ela foi o terceiro membro da tripulação e a segunda a entrar, fazendo-o durante o Arco Orange Town.  Ela é a irmã adotiva de Nojiko, desde que as duas ficaram órfãs e foram levadas por Bell-mère.',
    numeroEpisodio: 932,
    tituloEpisodio: 'Vida ou Morte',
    subTituloEpisodio: 'O Inferno Sumô de Queen',
    imagemPrincipalPersonagem: imagemPrincipalNami,
    imagemFundoPersonagem: imagemFundoNami,
    corPrincipalPersonagem: nami.primary,
    corSecondariaPersonagem: nami.secondary,
  },
  {
    id: 'zoro',
    nomePersonagem: 'Roronoa Zoro',
    descricaoPersonagem:
      'Roronoa Zoro, também conhecido como "Caçador de Piratas", é o combatente dos Piratas do Chapéu de Palha e um ex-caçador de recompensas.',
    numeroEpisodio: 940,
    tituloEpisodio: 'Zoro em Fúria!',
    subTituloEpisodio: 'A Verdade Sobre as Smile',
    imagemPrincipalPersonagem: imagemPrincipalZoro,
    imagemFundoPersonagem: imagemFundoZoro,
    corPrincipalPersonagem: zoro.primary,
    corSecondariaPersonagem: zoro.secondary,
  },
];

export default personagens;
