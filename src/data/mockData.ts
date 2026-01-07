import type { Curriculo, Educacao, Habilidade, Idioma, Contato, SecaoSecreta } from '@/types/curriculo'

// Dados mockados para informações que ainda não existem no backend
// Apenas experiências vêm do backend por enquanto

export const mockContato: Contato = {
  email: 'rwendell.regis@gmail.com',
  telefone: '+55 (85) 997-017-021',
  linkedin: 'linkedin.com/in/ven-del',
  github: 'github.com/ven-del',
  localizacao: 'Fortaleza, CE'
}

export const mockEducacao: Educacao[] = [
  {
    id: 1,
    instituicao: 'IEL - Geração Tech 2.0',
    curso: 'Desenvolvimento Full Stack',
    dataInicio: 'Mar. 2025',
    dataFim: 'Jun. 2025'
  },
  {
    id: 2,
    instituicao: 'Alura',
    curso: 'Formação Python Web Development',
    dataInicio: 'Mar. 2022',
    dataFim: 'Ago. 2022'
  },
  {
    id: 3,
    instituicao: 'UNIFOR',
    curso: 'Análise e Desenvolvimento de Sistemas',
    dataInicio: 'Ago. 2017',
    dataFim: 'Jun. 2021'
  }
]

export const mockHabilidades: Habilidade[] = [
  // Hardskills
  { id: 1, nome: 'Desenvolvimento Web', categoria: 'hard' },
  { id: 2, nome: 'HTML, CSS, Javascript', categoria: 'hard' },
  { id: 3, nome: 'React.js / Node.js / Express', categoria: 'hard' },
  { id: 4, nome: 'Python / Django', categoria: 'hard' },
  { id: 5, nome: 'Git / GitHub', categoria: 'hard' },
  { id: 6, nome: 'SQL / MySQL / PostgreSQL', categoria: 'hard' },
  { id: 7, nome: 'Linux Bash', categoria: 'hard' },
  // Softskills
  { id: 8, nome: 'Desenvolvimento Ágil', categoria: 'soft' },
  { id: 9, nome: 'Scrum / Kanban', categoria: 'soft' },
  { id: 10, nome: 'Resolução de Problemas', categoria: 'soft' },
  { id: 11, nome: 'Resiliência', categoria: 'soft' },
  { id: 12, nome: 'Trabalho em Equipe', categoria: 'soft' },
  { id: 13, nome: 'Foco em Resultados', categoria: 'soft' }
]

export const mockIdiomas: Idioma[] = [
  { id: 1, nome: 'Português', nivel: 'Nativo', porcentagem: 100 },
  { id: 2, nome: 'Inglês', nivel: 'Fluente (C2)', porcentagem: 100 },
  { id: 3, nome: 'Espanhol', nivel: 'Avançado (C1)', porcentagem: 85 }
]

export const mockSecaoSecreta: SecaoSecreta = {
  titulo: 'Aôba! Bão?',
  curiosidades: [
    'Sou canhoto',
    'Tenho uma guitarra própria para canhotos',
    'Já ganhei uma competição de karate quando era criança, mas perdi a medalha',
    'Já fui Top 3 em dano causado e Top 8 em velocidade de conclusão dos tanks do servidor Norte-Americano (Primal) no Final Fantasy XIV, na expansão Endwalker',
    'Também já fui Top 25 de Ryan em PvP no saudoso Grand Chase',
    'Amo jogos de luta, inclusive tenho um controle arcade pra jogar Street Fighter 6 e Tekken 8',
    'Meu sonho é ser desenvolvedor de jogos e pretendo fazer um jogo por conta própria e upar na Steam. Já tenho lançado meu primeiro jogo oficial, é o Cosmic Wings',
    'Tenho um Canal na Twitch, mas como o Pc não aguenta mais fazer lives, tá em hiato por um tempo'
  ],
  fotoUrl: '/assets/profile-picture.jpg',
  citacao: '"A tecnologia move o mundo."'
}

export const mockPerfil = `Olá! Me chamo Wendell e sou apaixonado por tecnologia, jogos e programação. Nasci e cresci em Fortaleza, já trabalhei diretamente com o público antes de entrar na área da tecnologia, sendo líder de uma pequena equipe. Já como parte da TI, possuo 5 anos de experiência profissional como analista de sistemas, sendo os últimos dois diretamente como suporte. Também tive meu período de estágio no início de minha jornada na TI, onde atuei como help desk e fiz parte de um time de infraestrutura durante o ano de experiência. Amo aprender mais sobre programação e atualmente sou um aluno orgulhoso do Geração Tech 2.0.`

export const mockDadosBase = {
  nome: 'Wendell Pereira',
  titulo: 'Full Stack Developer',
  fotoUrl: 'https://avatars.githubusercontent.com/u/45856720?v=4'
}

// Função para montar o currículo completo mesclando dados da API com mock
export function montarCurriculo(experienciasApi: any[]): Curriculo {
  return {
    ...mockDadosBase,
    perfil: mockPerfil,
    contato: mockContato,
    experiencias: experienciasApi.map((exp, index) => ({
      id: exp.id || index + 1,
      cargo: exp.cargo,
      empresa: exp.empresa,
      dataInicio: exp.dataInicio,
      dataFim: exp.dataFim,
      descricao: exp.descricao
    })),
    educacao: mockEducacao,
    habilidades: mockHabilidades,
    idiomas: mockIdiomas,
    secaoSecreta: mockSecaoSecreta
  }
}
