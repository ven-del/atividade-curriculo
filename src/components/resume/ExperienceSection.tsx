import { Badge } from "@/components/ui/badge"
import type { Experiencia } from '@/types/curriculo'

interface ExperienceSectionProps {
  experiencias: Experiencia[]
}

export function ExperienceSection({ experiencias }: ExperienceSectionProps) {
  return (
    <section>
      <h3 className="text-lg font-bold uppercase tracking-wider border-b border-gray-300 dark:border-gray-600 print:border-gray-300 mb-4 pb-1 print:text-gray-800">
        Experiência Profissional
      </h3>
      
      {experiencias.map((exp) => (
        <div key={exp.id} className="mb-4">
          <div className="flex justify-between items-baseline mb-1 flex-wrap gap-2">
            <h4 className="font-bold text-gray-900 dark:text-white print:text-gray-900">
              {exp.empresa}
            </h4>
            <Badge variant="secondary" className="text-xs print:bg-gray-200 print:text-gray-800">
              {exp.dataInicio} - {exp.dataFim || 'Atual'}
            </Badge>
          </div>
          <p className="italic text-sm text-blue-600 dark:text-blue-400 print:text-blue-600 mb-2">
            {exp.cargo}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300 print:text-gray-700">
            {exp.descricao}
          </p>
        </div>
      ))}
    </section>
  )
}
