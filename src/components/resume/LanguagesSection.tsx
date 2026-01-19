import { Progress } from "@/components/ui/progress"
import type { Idioma } from '@/types/curriculo'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/lib/translations'

interface LanguagesSectionProps {
  idiomas: Idioma[]
}

export function LanguagesSection({ idiomas }: LanguagesSectionProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)

  return (
    <section>
      <h3 className="text-lg font-bold uppercase tracking-wider border-b border-gray-300 dark:border-gray-600 print:border-gray-300 mb-3 pb-1 print:text-gray-800">
        {t.languages}
      </h3>
      <div className="space-y-3">
        {idiomas.map((idioma) => (
          <div key={idioma.id}>
            <div className="flex justify-between text-sm mb-1">
              <span className="print:text-gray-800">{idioma.nome}</span>
              <span className="text-gray-500 text-xs print:text-gray-500">{idioma.nivel}</span>
            </div>
            <Progress 
              value={idioma.porcentagem} 
              className="h-1.5 print:bg-gray-200"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
