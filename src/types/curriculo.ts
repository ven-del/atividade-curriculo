// Interfaces para os dados da API

// === Tipos que vêm diretamente da API ===
export interface ExperienciaApi {
  id: number
  empresa: string
  cargo: string
  dataInicio: string
  dataFim: string | null
  descricao: string
  cargoEn: string
  descricaoEn: string
  cargoEs: string
  descricaoEs: string
}

export interface InformacaoPessoalApi {
  id: number
  nomeCompleto: string
  profissao: string
  profissaoEn: string
  profissaoEs: string
  email: string
  linkLinkedin: string
  linkGitHub: string
  telefone: string
  localizacao: string
  descricao: string
  descricaoEn: string
  descricaoEs: string
}

export interface HardskillApi {
  id: number
  nomeHardskill: string
  nivel: number
}

export interface SoftskillApi {
  id: number
  nomeSoftskill: string
  nomeSoftskillEn: string
  nomeSoftskillEs: string
  nivel: number
}

export interface CuriosidadeApi {
  id: number
  descricao: string
  descricaoEn: string
  descricaoEs: string
}

export interface EducacaoApi {
  id: number
  curso: string
  cursoEn: string
  cursoEs: string
  instituicao: string
  dataInicio: string
  dataFim: string | null
}

// === Tipos usados internamente no front ===
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
