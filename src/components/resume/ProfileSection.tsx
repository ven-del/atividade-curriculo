interface ProfileSectionProps {
  perfil: string
}

export function ProfileSection({ perfil }: ProfileSectionProps) {
  return (
    <section>
      <h3 className="text-lg font-bold uppercase tracking-wider border-b border-gray-300 dark:border-gray-600 print:border-gray-300 mb-3 pb-1 print:text-gray-800">
        Perfil Profissional
      </h3>
      <p className="text-sm leading-relaxed text-justify text-gray-700 dark:text-gray-300 print:text-gray-700">
        {perfil}
      </p>
    </section>
  )
}
