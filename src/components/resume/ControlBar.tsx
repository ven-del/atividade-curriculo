import { Button } from "@/components/ui/button"
import { Moon, Sun, Printer, IdCard, Menu, X } from 'lucide-react'
import { SecretModal } from './SecretModal'
import { LanguageSelector } from './LanguageSelector'
import type { SecaoSecreta } from '@/types/curriculo'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/lib/translations'
import { useState } from 'react'

interface ControlBarProps {
    isDark: boolean
    onToggleTheme: () => void
    onPrint: () => void
    secaoSecreta: SecaoSecreta
}

export function ControlBar({ isDark, onToggleTheme, onPrint, secaoSecreta }: ControlBarProps) {
    const { language } = useLanguage()
    const t = getTranslations(language)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="no-print fixed top-0 left-0 w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-md z-50 p-4 transition-colors duration-300">
            <div className="flex justify-between items-center md:justify-center lg:justify-between">
                {/* Version info - hidden on tablet and mobile */}
                <div className="hidden lg:flex text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-widest items-center gap-2">
                    <IdCard className="w-4 h-4" />
                    V.2.0 | React + TS + Tailwind + Shadcn Ui
                </div>

                {/* Mobile menu button - visible only on mobile (< md) */}
                <div className="md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="rounded-full"
                    >
                        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                </div>

                {/* Desktop and Tablet controls - hidden only on mobile */}
                <div className="hidden md:flex gap-4 items-center">
                    <LanguageSelector />

                    <div className="flex gap-3 items-center">
                        <SecretModal secaoSecreta={secaoSecreta} />

                        <Button onClick={onPrint} className="bg-blue-600 hover:bg-blue-700">
                            <Printer className="w-4 h-4 mr-2" />
                            {t.print}
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
            </div>

            {/* Mobile menu dropdown */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 flex flex-col gap-3 pb-2 items-center">
                    <LanguageSelector />
                    
                    <div className="flex flex-col gap-2 w-full max-w-xs">
                        <SecretModal secaoSecreta={secaoSecreta} />

                        <Button onClick={() => { onPrint(); setIsMenuOpen(false); }} className="bg-blue-600 hover:bg-blue-700 w-full">
                            <Printer className="w-4 h-4 mr-2" />
                            {t.print}
                        </Button>

                        <Button
                            variant="outline"
                            onClick={() => { onToggleTheme(); setIsMenuOpen(false); }}
                            className="w-full"
                        >
                            {isDark ? (
                                <>
                                    <Sun className="w-4 h-4 mr-2 text-yellow-400" />
                                    Modo Claro
                                </>
                            ) : (
                                <>
                                    <Moon className="w-4 h-4 mr-2" />
                                    Modo Escuro
                                </>
                            )}
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}
