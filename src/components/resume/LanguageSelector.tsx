import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useLanguage, type Language } from "@/contexts/LanguageContext"

const languages = [
  { value: 'pt-br', label: 'Pt-Br', flag: '\u{1F1E7}\u{1F1F7}' },
  { value: 'en', label: 'En', flag: '\u{1F1FA}\u{1F1F8}' },
  { value: 'es', label: 'Es', flag: '\u{1F1EA}\u{1F1F8}' },
] as const

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
      <SelectTrigger className="w-27.5 rounded-full bg-background dark:bg-input/30">
        <SelectValue placeholder="Idioma" />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value}>
            <span className="flex items-center gap-2">
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
