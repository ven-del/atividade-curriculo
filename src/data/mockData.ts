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
  CuriosidadeApi
} from '@/types/curriculo'
import type { Language } from '@/contexts/LanguageContext'

// Dados mockados para informações que ainda não existem no backend
// Educação e idiomas continuam mockados

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

export const mockIdiomas: Idioma[] = [
  { id: 1, nome: 'Português', nivel: 'Nativo', porcentagem: 100 },
  { id: 2, nome: 'Inglês', nivel: 'Fluente (C2)', porcentagem: 100 },
  { id: 3, nome: 'Espanhol', nivel: 'Avançado (C1)', porcentagem: 85 }
]

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

// Função para montar contato a partir das informações pessoais
function montarContato(info: InformacaoPessoalApi | null): Contato {
  if (!info) {
    return {
      email: 'rwendell.regis@gmail.com',
      telefone: '+55 (85) 997-017-021',
      linkedin: 'linkedin.com/in/ven-del',
      github: 'github.com/ven-del',
      localizacao: 'Fortaleza, CE'
    }
  }
  return {
    email: info.email,
    telefone: info.telefone,
    linkedin: info.linkLinkedin.replace('https://', ''),
    github: info.linkGitHub.replace('https://', ''),
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
  const { experiencias, informacoesPessoais, hardskills, softskills, curiosidades } = dados
  
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
    educacao: mockEducacao,
    habilidades: habilidadesConvertidas,
    idiomas: mockIdiomas,
    secaoSecreta: montarSecaoSecreta(curiosidades, language)
  }
}
