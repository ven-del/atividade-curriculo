import type { Language } from '@/contexts/LanguageContext'

interface Translations {
  pageTitle: string
  profile: string
  experience: string
  education: string
  languages: string
  skills: string
  projects: string
  current: string
  secretSection: string
  print: string
  close: string
  andThisIsMe: string
  curiosities: string
  quote: string
  quoteAuthor: string
  projectsText: {
    checkOut: string
    portfolio: string
    or: string
    directlyOn: string
  }
}

const translations: Record<Language, Translations> = {
  'pt-br': {
    pageTitle: 'Wendell Pereira - Currículo',
    profile: 'Resumo Profissional',
    experience: 'Experiência Profissional',
    education: 'Educação',
    languages: 'Idiomas',
    skills: 'Habilidades',
    projects: 'Projetos',
    current: 'Atual',
    secretSection: 'Seção Secreta',
    print: 'PDF / Imprimir',
    close: 'Fechar',
    andThisIsMe: 'E este sou eu:',
    curiosities: 'Curiosidades',
    quote: 'Se você escrever um problema de forma clara e específica, já terá resolvido metade dele',
    quoteAuthor: 'John Dewey',
    projectsText: {
      checkOut: 'Confira alguns dos meus projetos no meu',
      portfolio: 'portfólio',
      or: 'ou diretamente no',
      directlyOn: ''
    }
  },
  'en': {
    pageTitle: 'Wendell Pereira - Resume',
    profile: 'Professional Summary',
    experience: 'Work Experience',
    education: 'Education',
    languages: 'Languages',
    skills: 'Skills',
    projects: 'Projects',
    current: 'Present',
    secretSection: 'Secret Section',
    print: 'PDF / Print',
    close: 'Close',
    andThisIsMe: 'And this is me:',
    curiosities: 'Curiosities',
    quote: 'A problem well stated is a problem half solved',
    quoteAuthor: 'John Dewey',
    projectsText: {
      checkOut: 'Check out some of my projects on my',
      portfolio: 'portfolio',
      or: 'or directly on',
      directlyOn: ''
    }
  },
  'es': {
    pageTitle: 'Wendell Pereira - Currículum',
    profile: 'Resumen Profesional',
    experience: 'Experiencia Profesional',
    education: 'Educación',
    languages: 'Idiomas',
    skills: 'Habilidades',
    projects: 'Proyectos',
    current: 'Actual',
    secretSection: 'Sección Secreta',
    print: 'PDF / Imprimir',
    close: 'Cerrar',
    andThisIsMe: 'Y este soy yo:',
    curiosities: 'Curiosidades',
    quote: 'Un problema bien planteado es un problema medio resuelto',
    quoteAuthor: 'John Dewey',
    projectsText: {
      checkOut: 'Echa un vistazo a algunos de mis proyectos en mi',
      portfolio: 'portafolio',
      or: 'o directamente en',
      directlyOn: ''
    }
  }
}

export function getTranslations(language: Language): Translations {
  return translations[language]
}
