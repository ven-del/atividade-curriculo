import type { Language } from '@/contexts/LanguageContext'

interface Translations {
  education: string
  languages: string
  skills: string
  projects: string
  projectsText: {
    checkOut: string
    portfolio: string
    or: string
    directlyOn: string
  }
}

const translations: Record<Language, Translations> = {
  'pt-br': {
    education: 'Educação',
    languages: 'Idiomas',
    skills: 'Habilidades',
    projects: 'Projetos',
    projectsText: {
      checkOut: 'Confira alguns dos meus projetos no meu',
      portfolio: 'portfólio',
      or: 'ou diretamente no',
      directlyOn: ''
    }
  },
  'en': {
    education: 'Education',
    languages: 'Languages',
    skills: 'Skills',
    projects: 'Projects',
    projectsText: {
      checkOut: 'Check out some of my projects on my',
      portfolio: 'portfolio',
      or: 'or directly on',
      directlyOn: ''
    }
  },
  'es': {
    education: 'Educación',
    languages: 'Idiomas',
    skills: 'Habilidades',
    projects: 'Proyectos',
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
