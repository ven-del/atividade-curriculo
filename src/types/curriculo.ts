// Interfaces para os dados da API
export interface Experiencia {
  id: number
  cargo: string
  empresa: string
  dataInicio: string
  dataFim: string | null
  descricao: string
}

export interface Educacao {
  id: number
  instituicao: string
  curso: string
  dataInicio: string
  dataFim: string | null
}

export interface Habilidade {
  id: number
  nome: string
  categoria: 'hard' | 'soft'
}

export interface Idioma {
  id: number
  nome: string
  nivel: string
  porcentagem: number
}

export interface Contato {
  email: string
  telefone: string
  linkedin: string
  github: string
  localizacao: string
}

export interface SecaoSecreta {
  titulo: string
  curiosidades: string[]
  fotoUrl: string
  citacao: string
}

export interface Curriculo {
  nome: string
  titulo: string
  fotoUrl: string
  perfil: string
  contato: Contato
  experiencias: Experiencia[]
  educacao: Educacao[]
  habilidades: Habilidade[]
  idiomas: Idioma[]
  secaoSecreta: SecaoSecreta
}
