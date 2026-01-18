import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react'
import type { Contato } from '@/types/curriculo'

interface ResumeHeaderProps {
  nome: string
  titulo: string
  fotoUrl: string
  contato: Contato
}

export function ResumeHeader({ nome, titulo, fotoUrl, contato }: ResumeHeaderProps) {
  return (
    <header className="border-b-2 border-gray-800 dark:border-gray-200 print:border-gray-800 pb-6 mb-6 flex flex-col md:flex-row print:flex-row justify-between items-start md:items-center print:items-center gap-4">
      <div className="flex items-center gap-4">
        {fotoUrl && (
          <img 
            src={fotoUrl} 
            alt={`Foto de ${nome}`}
            className="w-20 h-20 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600 print:hidden"
          />
        )}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-1 print:text-gray-800">
            {nome}
          </h1>
          <h2 className="text-xl text-blue-600 dark:text-blue-400 print:text-blue-600 font-medium">
            {titulo}
          </h2>
        </div>
      </div>
      <div className="text-sm text-right space-y-1 text-gray-600 dark:text-gray-400 print:text-gray-600">
        <p className="flex items-center justify-end gap-2">
          <Mail className="w-3 h-3" /> {contato.email}
        </p>
        <p className="flex items-center justify-end gap-2">
          <Phone className="w-3 h-3" /> {contato.telefone}
        </p>
        <p className="flex items-center justify-end gap-2">
          <Linkedin className="w-3 h-3" /> <a href={contato.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 print:text-gray-600">linkedin.com/in/{contato.linkedin.replace('https://linkedin.com/in/', '')}</a>
        </p>
        <p className="flex items-center justify-end gap-2">
          <Github className="w-3 h-3" /> <a href={contato.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 print:text-gray-600">github.com/{contato.github.replace('https://github.com/', '')}</a>
        </p>
        <p className="flex items-center justify-end gap-2">
          <MapPin className="w-3 h-3" /> {contato.localizacao}
        </p>
      </div>
    </header>
  )
}
