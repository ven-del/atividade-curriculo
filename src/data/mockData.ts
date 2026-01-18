import type { 
  Curriculo, 
  Educacao, 
  Habilidade, 
  Idioma, 
  Contato, 
  SecaoSecreta,
  ExperienciaApi,
  InformacaoPessoalApi,
  HardskillApi,
  SoftskillApi,
  CuriosidadeApi,
  EducacaoApi
} from '@/types/curriculo'
import type { Language } from '@/contexts/LanguageContext'

// Dados mockados para informações que ainda não existem no backend
// Idiomas continua mockado

interface IdiomaRaw {
  id: number
  nome: string
  nomeEn: string
  nomeEs: string
  nivel: string
  nivelEn: string
  nivelEs: string
  porcentagem: number
}

const idiomasRaw: IdiomaRaw[] = [
  { 
    id: 1, 
    nome: 'Português', 
    nomeEn: 'Portuguese', 
    nomeEs: 'Portugués',
    nivel: 'Nativo', 
    nivelEn: 'Native',
    nivelEs: 'Nativo',
    porcentagem: 100 
  },
  { 
    id: 2, 
    nome: 'Inglês', 
    nomeEn: 'English', 
    nomeEs: 'Inglés',
    nivel: 'Fluente (C2)', 
    nivelEn: 'Fluent (C2)',
    nivelEs: 'Fluido (C2)',
    porcentagem: 100 
  },
  { 
    id: 3, 
    nome: 'Espanhol', 
    nomeEn: 'Spanish', 
    nomeEs: 'Español',
    nivel: 'Avançado (C1)', 
    nivelEn: 'Advanced (C1)',
    nivelEs: 'Avanzado (C1)',
    porcentagem: 85 
  }
]

// Função para converter idiomas mockados baseado no idioma selecionado
function converterIdiomas(language: Language): Idioma[] {
  return idiomasRaw.map(i => ({
    id: i.id,
    nome: language === 'en' ? i.nomeEn : language === 'es' ? i.nomeEs : i.nome,
    nivel: language === 'en' ? i.nivelEn : language === 'es' ? i.nivelEs : i.nivel,
    porcentagem: i.porcentagem
  }))
}

export const mockPerfil = `Olá! Me chamo Wendell e sou apaixonado por tecnologia, jogos e programação. Nasci e cresci em Fortaleza, já trabalhei diretamente com o público antes de entrar na área da tecnologia, sendo líder de uma pequena equipe. Já como parte da TI, possuo 5 anos de experiência profissional como analista de sistemas, sendo os últimos dois diretamente como suporte. Também tive meu período de estágio no início de minha jornada na TI, onde atuei como help desk e fiz parte de um time de infraestrutura durante o ano de experiência. Amo aprender mais sobre programação e atualmente sou um aluno orgulhoso do Geração Tech 2.0.`

// Dados base de fallback caso a API não retorne informações pessoais
export const mockDadosBase = {
  nome: 'Wendell Pereira',
  titulo: 'Full Stack Developer',
  fotoUrl: 'https://avatars.githubusercontent.com/u/45856720?v=4'
}

// Dados de fallback para seção secreta
export const mockSecaoSecretaBase = {
  titulo: 'Aôba! Bão?',
  fotoUrl: '/assets/profile-picture.jpg',
  citacao: '"A tecnologia move o mundo."'
}

// Interface para os dados da API
export interface DadosApi {
  experiencias: ExperienciaApi[]
  informacoesPessoais: InformacaoPessoalApi | null
  hardskills: HardskillApi[]
  softskills: SoftskillApi[]
  curiosidades: CuriosidadeApi[]
  educacoes: EducacaoApi[]
}

// Função para converter hardskills da API para o formato interno
function converterHardskills(hardskills: HardskillApi[]): Habilidade[] {
  return hardskills.map(h => ({
    id: h.id,
    nome: h.nomeHardskill,
    categoria: 'hard' as const
  }))
}

// Função para converter softskills da API para o formato interno
function converterSoftskills(softskills: SoftskillApi[], language: Language): Habilidade[] {
  return softskills.map(s => ({
    id: s.id + 1000, // Offset para evitar conflito de IDs
    nome: language === 'en' ? s.nomeSoftskillEn : language === 'es' ? s.nomeSoftskillEs : s.nomeSoftskill,
    categoria: 'soft' as const
  }))
}

// Função para converter educações da API para o formato interno
function converterEducacoes(educacoes: EducacaoApi[], language: Language): Educacao[] {
  return educacoes.map(e => ({
    id: e.id,
    instituicao: e.instituicao,
    curso: language === 'en' ? e.cursoEn : language === 'es' ? e.cursoEs : e.curso,
    dataInicio: e.dataInicio,
    dataFim: e.dataFim
  }))
}

// Função para montar contato a partir das informações pessoais
function montarContato(info: InformacaoPessoalApi | null): Contato {
  if (!info) {
    return {
      email: 'rwendell.regis@gmail.com',
      telefone: '+55 (85) 997-017-021',
      linkedin: 'https://linkedin.com/in/ven-del',
      github: 'https://github.com/ven-del',
      localizacao: 'Fortaleza, CE'
    }
  }
  return {
    email: info.email,
    telefone: info.telefone,
    linkedin: info.linkLinkedin,
    github: info.linkGitHub,
    localizacao: info.localizacao
  }
}

// Função para montar a seção secreta com curiosidades da API
function montarSecaoSecreta(curiosidades: CuriosidadeApi[], language: Language): SecaoSecreta {
  return {
    ...mockSecaoSecretaBase,
    curiosidades: curiosidades.length > 0 
      ? curiosidades.map(c => 
          language === 'en' ? c.descricaoEn : language === 'es' ? c.descricaoEs : c.descricao
        ) 
      : [
          'Sou canhoto',
          'Tenho uma guitarra própria para canhotos',
          'Já ganhei uma competição de karate quando era criança, mas perdi a medalha'
        ]
  }
}

// Função para obter a profissão traduzida
function obterProfissaoTraduzida(info: InformacaoPessoalApi | null, language: Language): string {
  if (!info) return mockDadosBase.titulo
  
  switch (language) {
    case 'en':
      return info.profissaoEn || info.profissao
    case 'es':
      return info.profissaoEs || info.profissao
    default:
      return info.profissao
  }
}

// Função para obter a descrição/perfil traduzido
function obterDescricaoTraduzida(info: InformacaoPessoalApi | null, language: Language): string {
  if (!info) return mockPerfil
  
  switch (language) {
    case 'en':
      return info.descricaoEn || info.descricao || mockPerfil
    case 'es':
      return info.descricaoEs || info.descricao || mockPerfil
    default:
      return info.descricao || mockPerfil
  }
}

// Função para montar o currículo completo mesclando dados da API com mock
export function montarCurriculo(dados: DadosApi, language: Language = 'pt-br'): Curriculo {
  const { experiencias, informacoesPessoais, hardskills, softskills, curiosidades, educacoes } = dados
  
  // Mescla hardskills e softskills
  const habilidadesConvertidas: Habilidade[] = [
    ...converterHardskills(hardskills),
    ...converterSoftskills(softskills, language)
  ]

  return {
    nome: informacoesPessoais?.nomeCompleto ?? mockDadosBase.nome,
    titulo: obterProfissaoTraduzida(informacoesPessoais, language),
    fotoUrl: mockDadosBase.fotoUrl,
    perfil: obterDescricaoTraduzida(informacoesPessoais, language),
    contato: montarContato(informacoesPessoais),
    experiencias: experiencias.map((exp) => ({
      id: exp.id,
      cargo: language === 'en' ? exp.cargoEn : language === 'es' ? exp.cargoEs : exp.cargo,
      empresa: exp.empresa,
      dataInicio: exp.dataInicio,
      dataFim: exp.dataFim,
      descricao: language === 'en' ? exp.descricaoEn : language === 'es' ? exp.descricaoEs : exp.descricao
    })),
    educacao: converterEducacoes(educacoes, language),
    habilidades: habilidadesConvertidas,
    idiomas: converterIdiomas(language),
    secaoSecreta: montarSecaoSecreta(curiosidades, language)
  }
}
