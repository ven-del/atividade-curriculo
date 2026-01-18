import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { 
  ControlBar,
  ResumeHeader,
  ProfileSection,
  ExperienceSection,
  SkillsSection,
  EducationSection,
  LanguagesSection,
  ProjectsSection
} from '@/components/resume'
import { montarCurriculo, type DadosApi } from '@/data/mockData'
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext'
import type { 
  Curriculo, 
  ExperienciaApi, 
  InformacaoPessoalApi, 
  HardskillApi, 
  SoftskillApi, 
  CuriosidadeApi,
  EducacaoApi 
} from '@/types/curriculo'

const API_BASE_URL = 'http://localhost:8080/api'

function ResumeContent() {
  const [curriculo, setCurriculo] = useState<Curriculo | null>(null)
  const [dadosApi, setDadosApi] = useState<DadosApi | null>(null)
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState<string | null>(null)
  const [isDark, setIsDark] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    carregarDadosApi()
  }, [])

  // Remonta o currículo quando o idioma muda
  useEffect(() => {
    if (dadosApi) {
      const curriculoCompleto = montarCurriculo(dadosApi, language)
      setCurriculo(curriculoCompleto)
    }
  }, [language, dadosApi])

  async function carregarDadosApi() {
    setLoading(true)
    setErro(null)

    try {
      // Busca todos os dados em paralelo de múltiplos endpoints
      const [
        experienciasRes,
        informacoesRes,
        hardskillsRes,
        softskillsRes,
        curiosidadesRes,
        educacoesRes
      ] = await Promise.all([
        fetch(`${API_BASE_URL}/Experiencias`),
        fetch(`${API_BASE_URL}/InformacoesPessoais`),
        fetch(`${API_BASE_URL}/Hardskills`),
        fetch(`${API_BASE_URL}/Softskills`),
        fetch(`${API_BASE_URL}/Curiosidades`),
        fetch(`${API_BASE_URL}/Educacoes`)
      ])

      // Verifica se as respostas principais foram bem-sucedidas
      if (!experienciasRes.ok) {
        throw new Error(`Erro ao buscar experiências: ${experienciasRes.status}`)
      }

      // Processa as respostas (algumas podem falhar sem quebrar tudo)
      const experiencias: ExperienciaApi[] = await experienciasRes.json()
      const informacoesPessoais: InformacaoPessoalApi | null = informacoesRes.ok 
        ? await informacoesRes.json() 
        : null
      const hardskills: HardskillApi[] = hardskillsRes.ok 
        ? await hardskillsRes.json() 
        : []
      const softskills: SoftskillApi[] = softskillsRes.ok 
        ? await softskillsRes.json() 
        : []
      const curiosidades: CuriosidadeApi[] = curiosidadesRes.ok 
        ? await curiosidadesRes.json() 
        : []
      const educacoes: EducacaoApi[] = educacoesRes.ok 
        ? await educacoesRes.json() 
        : []

      // Agrupa todos os dados da API
      const dados: DadosApi = {
        experiencias,
        informacoesPessoais,
        hardskills,
        softskills,
        curiosidades,
        educacoes
      }
      
      // Salva os dados da API e monta o currículo
      setDadosApi(dados)
      const curriculoCompleto = montarCurriculo(dados, language)
      setCurriculo(curriculoCompleto)
    } catch (error: any) {
      console.error(error)
      setErro(`Erro ao conectar: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  function toggleTheme() {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  function handlePrint() {
    window.print()
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-200 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Carregando currículo...</p>
        </div>
      </div>
    )
  }

  if (erro) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-200 dark:bg-gray-900">
        <Card className="max-w-md">
          <CardContent className="pt-6">
            <p className="text-red-500 text-center mb-4">{erro}</p>
            <Button onClick={carregarDadosApi} className="w-full">
              Tentar Novamente
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!curriculo) return null

  return (
    <div className=" bg-gray-200 dark:bg-gray-900 transition-colors duration-300 flex flex-col items-center py-10 print:py-0 print:bg-white font-sans">
      
      {/* Control Bar - No Print */}
      <ControlBar 
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onPrint={handlePrint}
        secaoSecreta={curriculo.secaoSecreta}
      />

      <div className="h-16 w-full no-print"></div>

      {/* Resume Paper */}
      <div className="resume-paper relative w-full max-w-[210mm]  bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-100 p-[15mm] md:p-[20mm] shadow-2xl mx-auto transition-colors duration-300 print:shadow-none print:w-full print:max-w-none print:bg-white print:text-gray-800">
        
        {/* Resume Header */}
        <ResumeHeader 
          nome={curriculo.nome}
          titulo={curriculo.titulo}
          fotoUrl={curriculo.fotoUrl}
          contato={curriculo.contato}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-8 print:gap-6 items-start">
          
          {/* Left Column */}
          <div className="md:col-span-2 print:col-span-2 space-y-6 print:space-y-3">
            <ProfileSection perfil={curriculo.perfil} />
            <ExperienceSection experiencias={curriculo.experiencias} />
          </div>

          {/* Right Column */}
          <div className="md:col-span-1 print:col-span-1 space-y-6 print:space-y-3">
            <EducationSection educacao={curriculo.educacao} />
            <Separator className="print:bg-gray-300" />
            <LanguagesSection idiomas={curriculo.idiomas} />
            <Separator className="print:bg-gray-300" />
            <SkillsSection habilidades={curriculo.habilidades} />
            <Separator className="print:bg-gray-300" />
            <ProjectsSection />
          </div>
        </div>
      </div>

      {/* Footer - No Print */}
      <footer className="no-print mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>Criado por Wendell Pereira @ LABORATÓRIO.CE. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <ResumeContent />
    </LanguageProvider>
  )
}

export default App
