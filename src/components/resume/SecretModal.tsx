import { useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from "@/components/ui/dialog"
import { UserRound, Code, Lightbulb, Quote } from 'lucide-react'
import type { SecaoSecreta } from '@/types/curriculo'

interface SecretModalProps {
  secaoSecreta: SecaoSecreta
}

export function SecretModal({ secaoSecreta }: SecretModalProps) {
  const originalTitleRef = useRef(document.title)

  function handleOpenChange(open: boolean) {
    if (open) {
      originalTitleRef.current = document.title
      document.title = "Easter Egg Encontrado!"
    } else {
      document.title = originalTitleRef.current
    }
  }

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
          <UserRound className="w-4 h-4 mr-2" />
          Seção Secreta
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg border border-gray-300 dark:border-gray-600 max-h-[90vh] flex flex-col p-0 gap-0 bg-white dark:bg-slate-800">
        {/* Header fixo */}
        <DialogHeader className="bg-gray-100 dark:bg-gray-900 p-4 rounded-t-lg shrink-0 border-b-2 border-blue-600">
          <DialogTitle className="text-gray-800 dark:text-white flex items-center gap-2">
            <UserRound className="w-5 h-5" />
            {secaoSecreta.titulo}
          </DialogTitle>
        </DialogHeader>
        
        {/* Conteúdo com scroll */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-100">
          <div className="flex items-start gap-4">
            <Code className="w-10 h-10 text-blue-600 dark:text-blue-400 shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Curiosidades</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                {secaoSecreta.curiosidades.map((curiosidade, index) => (
                  <li key={index}>{curiosidade}</li>
                ))}
              </ul>
            </div>
          </div>

          {secaoSecreta.fotoUrl && (
            <div className="flex justify-center">
              <img 
                src={secaoSecreta.fotoUrl} 
                alt="Foto pessoal" 
                className="rounded-lg max-w-50 shadow-md border border-gray-300 dark:border-gray-600"
              />
            </div>
          )}

          <div className="flex items-start gap-4">
            <Lightbulb className="w-10 h-10 text-blue-600 dark:text-blue-400 shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Interesses</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Entusiasta de novas tecnologias, segurança da informação e automação. Sempre explorando novas ferramentas e frameworks.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-600 p-4 rounded text-sm text-blue-800 dark:text-blue-200 italic flex items-start gap-2">
            <Quote className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{secaoSecreta.citacao}</span>
          </div>
        </div>

        {/* Footer fixo */}
        <DialogFooter className="p-4 border-t border-gray-300 dark:border-gray-600 shrink-0 bg-gray-50 dark:bg-slate-900">
          <DialogClose asChild>
            <Button variant="outline">Fechar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
