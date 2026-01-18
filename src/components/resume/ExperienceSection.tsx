import { Badge } from "@/components/ui/badge"
import type { Experiencia } from '@/types/curriculo'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/lib/translations'

interface ExperienceSectionProps {
  experiencias: Experiencia[]
}

export function ExperienceSection({ experiencias }: ExperienceSectionProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)

  return (
    <section>
      <h3 className="text-lg font-bold uppercase tracking-wider border-b border-gray-300 dark:border-gray-600 print:border-gray-300 mb-4 pb-1 print:text-gray-800">
        {t.experience}
      </h3>
      
      {experiencias.map((exp) => (
        <div key={exp.id} className="mb-4 print:mb-3">
          {/* Web version with original layout */}
          <div className="print:hidden">
            <div className="flex justify-between items-baseline mb-1 flex-wrap gap-2">
              <h4 className="font-bold text-gray-900 dark:text-white">
                {exp.empresa}
              </h4>
              <Badge variant="secondary" className="text-xs">
                {exp.dataInicio} - {exp.dataFim || t.current}
              </Badge>
            </div>
            <p className="italic text-sm text-blue-600 dark:text-blue-400 mb-2">
              {exp.cargo}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {exp.descricao}
            </p>
          </div>
          
          {/* Print version optimized for ATS - simple linear structure */}
          <div className="hidden print:block">
            <p className="font-bold text-gray-900 text-base mb-0.5">
              {exp.cargo}
            </p>
            <p className="font-semibold text-gray-900 mb-0.5">
              {exp.empresa} | {exp.dataInicio} - {exp.dataFim || t.current}
            </p>
            <p className="text-sm text-gray-800 mt-1">
              {exp.descricao}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}
