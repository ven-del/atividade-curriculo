import { Badge } from "@/components/ui/badge"
import type { Habilidade } from '@/types/curriculo'

interface SkillsSectionProps {
  habilidades: Habilidade[]
}

export function SkillsSection({ habilidades }: SkillsSectionProps) {
  const hardskills = habilidades.filter(h => h.categoria === 'hard')
  const softskills = habilidades.filter(h => h.categoria === 'soft')

  return (
    <section>
      <h3 className="text-lg font-bold uppercase tracking-wider border-b border-gray-300 dark:border-gray-600 print:border-gray-300 mb-3 pb-1 print:text-gray-800">
        Habilidades
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-sm mb-2 text-gray-800 dark:text-gray-200 print:text-gray-800">
            Hardskills
          </h4>
          <div className="flex flex-wrap gap-2">
            {hardskills.map((skill) => (
              <Badge 
                key={skill.id} 
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 print:bg-blue-100 print:text-blue-800"
              >
                {skill.nome}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-2 text-gray-800 dark:text-gray-200 print:text-gray-800">
            Softskills
          </h4>
          <div className="flex flex-wrap gap-2">
            {softskills.map((skill) => (
              <Badge 
                key={skill.id} 
                variant="outline"
                className="print:border-gray-400 print:text-gray-700"
              >
                {skill.nome}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
