import { Button } from "@/components/ui/button"
import { Moon, Sun, Printer, IdCard } from 'lucide-react'
import { SecretModal } from './SecretModal'
import { LanguageSelector } from './LanguageSelector'
import type { SecaoSecreta } from '@/types/curriculo'

interface ControlBarProps {
    isDark: boolean
    onToggleTheme: () => void
    onPrint: () => void
    secaoSecreta: SecaoSecreta
}

export function ControlBar({ isDark, onToggleTheme, onPrint, secaoSecreta }: ControlBarProps) {
    return (
        <nav className="no-print fixed top-0 left-0 w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-md z-50 p-4 flex flex-wrap justify-between items-center transition-colors duration-300">
            <div className="text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-widest flex items-center gap-2">
                <IdCard className="w-4 h-4" />
                V.2.0 | React + TS + Tailwind + Shadcn Ui
            </div>

            <div className="flex gap-4 items-center">
                <LanguageSelector />

                <div className="flex gap-3 items-center">
                    <SecretModal secaoSecreta={secaoSecreta} />

                    <Button onClick={onPrint} className="bg-blue-600 hover:bg-blue-700">
                        <Printer className="w-4 h-4 mr-2" />
                        PDF / Imprimir
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        onClick={onToggleTheme}
                        className="rounded-full"
                    >
                        {isDark ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4" />}
                    </Button>
                </div>
            </div>
        </nav>
    )
}
