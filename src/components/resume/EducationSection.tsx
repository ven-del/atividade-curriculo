import type { Educacao } from '@/types/curriculo'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/lib/translations'

interface EducationSectionProps {
  educacao: Educacao[]
}

export function EducationSection({ educacao }: EducationSectionProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)

  return (
    <section>
      <h3 className="text-lg font-bold uppercase tracking-wider border-b border-gray-300 dark:border-gray-600 print:border-gray-300 mb-3 pb-1 print:text-gray-800">
        {t.education}
      </h3>
      {educacao.map((edu) => (
        <div key={edu.id} className="mb-3">
          <h4 className="font-bold text-sm print:text-gray-800">{edu.curso}</h4>
          <p className="text-xs text-gray-600 dark:text-gray-400 print:text-gray-600">
            {edu.instituicao}
          </p>
          <p className="text-xs text-gray-500 print:text-gray-500">
            {edu.dataInicio} - {edu.dataFim || 'Atual'}
          </p>
        </div>
      ))}
    </section>
  )
}
