# Alterdata Finance Web

Frontend do aplicativo de gerenciamento financeiro pessoal desenvolvido como teste técnico para vaga de Programador.

**[Aplicação em Produção](https://alterdata-finance-web.vercel.app)** · **[API (Swagger)](https://alterdata-finance-api-h0ddd7c8gvcfgeh5.canadacentral-01.azurewebsites.net/swagger/index.html)**

---

## Sobre o Projeto

Interface web para gerenciamento de finanças pessoais com dashboard interativo, CRUD de transações com Data Table (busca, ordenação, paginação), relatórios por período e exportação em CSV/PDF.

---

## Tecnologias

| Categoria       | Tecnologias                                    |
| --------------- | ---------------------------------------------- |
| Framework       | Next.js 16 (App Router, Server Actions)        |
| UI              | React 19                                       |
| Estilização     | Tailwind CSS v4 + Shadcn UI                    |
| Componentes     | Radix UI (primitivos) + Lucide (ícones)        |
| Tabela          | @tanstack/react-table                          |
| Gráficos        | Recharts                                       |
| Formulários     | React Hook Form + Zod                          |
| HTTP            | Axios                                          |
| Datas           | date-fns (pt-BR)                               |
| Notificações    | Sonner                                         |
| Deploy          | Vercel                                         |

---

## Funcionalidades

### Dashboard (`/`)

- Cards de resumo: Receitas, Despesas e Balanço do ano
- Gráfico de barras com receitas vs despesas por mês (Recharts)
- Gráfico de balanço mensal
- Seletor de ano

### Transações (`/transactions`)

- Data Table com busca por descrição, ordenação por coluna e paginação
- Filtro por tipo (Todos / Despesas / Receitas)
- Criar, editar e excluir transações via dialogs modais
- Formulário com validação (React Hook Form + Zod)
- Badge colorido por tipo (Receita em verde, Despesa em cinza)
- Valores formatados em BRL (R$)

### Relatórios (`/reports`)

- Filtro por período (data inicial e final) e tipo
- Cards de resumo: Receitas, Despesas e Balanço do período
- Tabela de transações do período
- Exportação em CSV e PDF

### Autenticação

- Login com email e senha
- Token JWT armazenado em cookie HTTP-only (seguro)
- Middleware protege todas as rotas automaticamente
- Logout com limpeza de cookie

---

## Estrutura do Projeto

```
app/
├── layout.tsx                          # Layout raiz (metadata, Toaster)
├── globals.css                         # Tailwind + tema customizado
├── error.tsx                           # Error boundary global
│
├── login/                              # Página pública
│   ├── page.tsx
│   ├── _actions/login.ts              # Server action de autenticação
│   └── _components/login-form.tsx
│
├── (app)/                              # Rotas protegidas
│   ├── layout.tsx                     # Sidebar + Mobile Nav
│   ├── page.tsx                       # Dashboard
│   ├── transactions/
│   │   ├── page.tsx
│   │   ├── _actions/                  # CRUD server actions
│   │   └── _components/
│   │       ├── transactions-client.tsx
│   │       ├── columns.tsx            # Definições de colunas (TanStack)
│   │       ├── transaction-form-dialog.tsx
│   │       └── delete-confirm-dialog.tsx
│   └── reports/
│       ├── page.tsx
│       ├── _actions/get-report.ts     # Report + exportação
│       └── _components/
│           ├── reports-client.tsx      # Filtros + download CSV/PDF
│           ├── report-filters.tsx
│           ├── report-summary.tsx
│           └── report-table.tsx
│
├── _actions/                           # Server actions compartilhadas
│   ├── get-dashboard.ts
│   └── logout.ts
│
├── _lib/                               # Utilitários
│   ├── api.ts                         # Factory Axios com auth
│   ├── formatters.ts                  # Formatação BRL e datas
│   ├── validators.ts                  # Schemas Zod
│   └── utils.ts                       # cn() helper
│
├── _services/                          # Camada de serviço (API calls)
│   ├── auth.ts
│   ├── transaction.ts
│   ├── dashboard.ts
│   └── report.ts
│
├── _models/                            # Interfaces TypeScript
│   ├── transaction.ts
│   ├── report.ts
│   └── dashboard.ts
│
└── _components/
    ├── ui/                             # Shadcn UI (15 componentes)
    │   ├── data-table.tsx             # DataTable genérico reutilizável
    │   ├── button.tsx, card.tsx, dialog.tsx, ...
    │   └── sonner.tsx
    ├── layout/                         # Layout responsivo
    │   ├── sidebar.tsx                # Sidebar desktop
    │   ├── mobile-header.tsx          # Header mobile com drawer
    │   └── mobile-nav.tsx             # Bottom nav mobile
    └── dashboard/                      # Componentes do dashboard
        ├── summary-cards.tsx
        ├── monthly-chart.tsx
        ├── balance-chart.tsx
        └── year-selector.tsx
```

---

## Como Executar

### Pré-requisitos

- [Node.js 18+](https://nodejs.org/)
- [pnpm](https://pnpm.io/)
- API backend rodando (ver [alterdata-finance-api](../alterdata-finance-api))

### 1. Instalar dependências

```bash
pnpm install
```

### 2. Configurar variáveis de ambiente

Crie um arquivo `.env.local` na raiz:

```env
API_URL=http://localhost:5027/api
NEXT_PUBLIC_API_URL=http://localhost:5027/api
```

### 3. Executar em desenvolvimento

```bash
pnpm dev
```

A aplicação estará disponível em `http://localhost:3000`.

---

## Autor

**Paulo Ricardo**
