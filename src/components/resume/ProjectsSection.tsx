export function ProjectsSection() {
  return (
    <section>
      <h3 className="text-lg font-bold uppercase tracking-wider border-b border-gray-300 dark:border-gray-600 print:border-gray-300 mb-3 pb-1 print:text-gray-800">
        Projetos
      </h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 print:text-gray-700">
        Confira alguns dos meus projetos no meu{' '}
        <a 
          href="https://labce-vendel-portifolio.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 print:text-blue-600 underline"
        >
          portfólio
        </a>
        {' '}ou diretamente no{' '}
        <a 
          href="https://github.com/ven-del" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 print:text-blue-600 underline"
        >
          GitHub
        </a>.
      </p>
    </section>
  )
}
