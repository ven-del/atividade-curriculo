# Currículo Digital

Aplicação web moderna para visualização de currículo profissional, desenvolvida com React, TypeScript e Vite. O projeto apresenta um design responsivo, suporte a múltiplos idiomas (Português, Inglês e Espanhol) e integração com API REST para carregamento dinâmico de dados.

## Tecnologias

- **React 19.2.0** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS 4.1** - Framework CSS utility-first
- **ShadCn UI** - Componentes acessíveis e sem estilo
- **Lucide React** - Biblioteca de ícones
- **Country Flag Icons** - Ícones de bandeiras de países

## Arquitetura do Projeto

```
src/
├── components/
│   ├── resume/              # Componentes do currículo
│   │   ├── ControlBar.tsx        # Barra de controle e seleção de idioma
│   │   ├── ResumeHeader.tsx      # Cabeçalho do currículo
│   │   ├── ProfileSection.tsx    # Seção de perfil/sobre
│   │   ├── ExperienceSection.tsx # Seção de experiências profissionais
│   │   ├── SkillsSection.tsx     # Seção de habilidades (hard e soft)
│   │   ├── EducationSection.tsx  # Seção de educação/formação
│   │   ├── LanguagesSection.tsx  # Seção de idiomas
│   │   ├── ProjectsSection.tsx   # Seção de projetos
│   │   ├── SecretModal.tsx       # Modal secreto (easter egg)
│   │   └── index.ts              # Barrel export
│   └── ui/                  # Componentes de UI reutilizáveis
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── progress.tsx
│       ├── select.tsx
│       └── separator.tsx
├── contexts/
│   └── LanguageContext.tsx  # Context API para gerenciamento de idioma
├── data/
│   └── data.ts              # Lógica de carregamento e transformação de dados da API
├── lib/
│   ├── translations.ts      # Sistema de traduções
│   └── utils.ts             # Funções utilitárias
├── types/
│   └── curriculo.ts         # Definições de tipos TypeScript
├── App.tsx                  # Componente raiz da aplicação
└── main.tsx                 # Ponto de entrada da aplicação
```

## Camadas da Aplicação

### 1. **Camada de Apresentação (Components)**

#### Componentes de Currículo (`components/resume/`)
Componentes especializados que representam diferentes seções do currículo:

- **ControlBar**: Controla a visualização e permite troca de idioma
- **ResumeHeader**: Exibe informações principais (nome, cargo, contatos)
- **ProfileSection**: Apresenta o perfil profissional/descrição
- **ExperienceSection**: Lista experiências profissionais com período e descrições
- **SkillsSection**: Exibe hardskills e softskills em formato de badges
- **EducationSection**: Mostra formação acadêmica
- **LanguagesSection**: Lista idiomas e níveis de proficiência
- **ProjectsSection**: Apresenta projetos relevantes
- **SecretModal**: Easter egg com informações curiosas

#### Componentes de UI (`components/ui/`)
Componentes reutilizáveis baseados em ShadCn UI e estilizados com Tailwind CSS:

- Card, Button, Badge, Dialog, Select, Separator, Progress

### 2. **Camada de Estado (Contexts)**

#### LanguageContext
Gerencia o estado global do idioma da aplicação usando React Context API:

```typescript
type Language = 'pt-br' | 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}
```

Permite que qualquer componente acesse e altere o idioma atual sem prop drilling.

### 3. **Camada de Dados (Data)**

#### data.ts
Responsável por:
- Buscar dados da API REST
- Transformar dados da API para o formato esperado pela aplicação
- Fornecer fallback para dados estáticos em caso de erro
- Implementar a função principal `montarCurriculo()`

```typescript
export async function montarCurriculo(): Promise<Curriculo> {
  // Busca dados de múltiplos endpoints
  // Transforma e combina os dados
  // Retorna objeto do tipo Curriculo
}
```

### 4. **Camada de Tradução (Lib)**

#### translations.ts
Sistema de internacionalização (i18n) que:
- Armazena traduções para pt-br, en e es
- Fornece função `getTranslations(language)` para obter textos traduzidos
- Suporta traduções de labels, títulos e mensagens da interface

### 5. **Camada de Tipos (Types)**

#### curriculo.ts
Define todas as interfaces e tipos TypeScript:

- `Curriculo`: Estrutura completa do currículo
- `InformacaoPessoal`: Dados pessoais e contatos
- `Experiencia`: Experiência profissional
- `Hardskill` / `Softskill`: Habilidades técnicas e comportamentais
- `Educacao`: Formação acadêmica
- `Idioma`: Idiomas e níveis
- `Projeto`: Projetos desenvolvidos
- `Curiosidade`: Informações curiosas (easter egg)
- Tipos da API (`*Api`): Estrutura dos dados vindos da API

## Fluxo de Dados

```
1. API REST ────────┐
                    ↓
2. data.ts (fetch & transform)
                    ↓
3. App.tsx (estado local)
                    ↓
4. LanguageContext (idioma global)
                    ↓
5. Componentes Resume (renderização)
                    ↓
6. translations.ts (textos traduzidos)
```

## Padrões de Design Utilizados

1. **Component Composition**: Componentes pequenos e focados que se combinam
2. **Container/Presentational Pattern**: Separação de lógica e apresentação
3. **Context Pattern**: Gerenciamento de estado global com Context API
4. **Barrel Exports**: Simplificação de imports via index.ts
5. **Type Safety**: Uso extensivo de TypeScript para type checking

## Configuração e Execução

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
npm install
```

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

### Executar em Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

### Preview da Build

```bash
npm run preview
```

## Extensibilidade

### Adicionar Nova Seção ao Currículo

1. Criar novo componente em `src/components/resume/`
2. Adicionar tipos necessários em `src/types/curriculo.ts`
3. Atualizar `data.ts` para buscar/processar novos dados
4. Adicionar traduções em `translations.ts`
5. Importar e usar no `App.tsx`

### Adicionar Novo Idioma

1. Adicionar tipo ao union `Language` em `LanguageContext.tsx`
2. Adicionar traduções em `translations.ts`
3. Adicionar bandeira/ícone no `LanguageSelector.tsx`

## Responsividade

O projeto utiliza Tailwind CSS com abordagem mobile-first:
- Breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
- Grid system responsivo
- Componentes adaptáveis a diferentes tamanhos de tela

## Acessibilidade

- Componentes ShadCn UI para elementos visuais
- Navegação por teclado
- Semântica HTML adequada
- Contraste de cores adequado

## Estrutura de Dados

O currículo é representado pela interface `Curriculo`:

```typescript
interface Curriculo {
  informacoesPessoais: InformacaoPessoal
  experiencias: Experiencia[]
  hardskills: Hardskill[]
  softskills: Softskill[]
  educacoes: Educacao[]
  idiomas: Idioma[]
  projetos: Projeto[]
  curiosidades: Curiosidade[]
}
```

Cada seção é renderizada por um componente específico que recebe os dados tipados e o idioma atual.

---

Feito por Wendell Pereira @ LABORATÓRIO.CE