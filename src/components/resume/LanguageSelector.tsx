import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useLanguage, type Language } from "@/contexts/LanguageContext"
import { BR, US, ES } from 'country-flag-icons/react/3x2'

const languages = [
  { value: 'pt-br', label: 'Português', Flag: BR },
  { value: 'en', label: 'English', Flag: US },
  { value: 'es', label: 'Español', Flag: ES },
] as const

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
      <SelectTrigger className="w-36 rounded-full bg-background dark:bg-input/30">
        <SelectValue placeholder="Idioma" />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value}>
            <span className="flex items-center gap-2">
              <lang.Flag className="w-5 h-4" />
              <span>{lang.label}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
