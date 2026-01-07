import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { UserRound, Code, Lightbulb, Quote } from 'lucide-react'
import type { SecaoSecreta } from '@/types/curriculo'

interface SecretModalProps {
  secaoSecreta: SecaoSecreta
}

export function SecretModal({ secaoSecreta }: SecretModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="bg-purple-600 hover:bg-purple-700">
          <UserRound className="w-4 h-4 mr-2" />
          Seção Secreta
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg border-2 border-purple-500">
        <DialogHeader className="bg-purple-600 -m-6 mb-0 p-4 rounded-t-lg">
          <DialogTitle className="text-white flex items-center gap-2">
            <UserRound className="w-5 h-5" />
            {secaoSecreta.titulo}
          </DialogTitle>
        </DialogHeader>
        
        <div className="pt-6 space-y-6">
          <div className="flex items-start gap-4">
            <Code className="w-10 h-10 text-purple-500 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1">Curiosidades</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1">
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
                className="rounded-lg max-w-[200px] shadow-md"
              />
            </div>
          )}

          <div className="flex items-start gap-4">
            <Lightbulb className="w-10 h-10 text-purple-500 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1">Interesses</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Entusiasta de novas tecnologias, segurança da informação e automação. Sempre explorando novas ferramentas e frameworks.
              </p>
            </div>
          </div>

          <div className="bg-yellow-100 dark:bg-yellow-900/30 border-l-4 border-yellow-500 p-4 rounded text-sm text-yellow-800 dark:text-yellow-200 italic flex items-start gap-2">
            <Quote className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>{secaoSecreta.citacao}</span>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <DialogClose asChild>
            <Button variant="secondary">Fechar Arquivo</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}
