# Zandiva Design System

> Originally created to [Zandir](https://github.com/orgs/zandirdev) and used in https://zandir.com.br/ as private repo.

Nosso objetivo é ter algo próximo do Andromeda da RocketSeat:

Vídeo: <https://www.youtube.com/watch?v=90y5707fJbI>

Storybook: [https://andromeda.rocketseat.dev/](https://andromeda.rocketseat.dev/)

## Stack

[Vite](https://vitejs.dev/)

[Raddix](https://www.radix-ui.com/)

[Shadcn](https://ui.shadcn.com/)

[Tailwind CSS](https://tailwindcss.com/docs/installation)

[Storybook](https://storybook.js.org/)

## Estrutura de diretórios

```.
└── reactui       - ui kit para react
    ├── .storybook      - Arquivos base do storybook
    ├── components.json     - Configuração base do shadcn
    ├── src
    │   ├── components      - Componentes importados via shadcn
    │   ├── globals.css     - Css importado via shadcn
    │   ├── lib     
    │   │   └── utils.ts        - Lib importada do shadcn
    │   ├── stories      - Base do storybook, os arquivos de .stories podem estar em qualquer pasta
    │   │   ├── Configure.mdx       - Home do storybook
    │   │   ├── assets      - Assets linkados na home do storybook
    │   │   └── examples        - Exemplos de stories na sessão <EXAMPLE> do storybook
```

## Arquivos de configuração

## Como instalar e rodar

``` bash
npm install
npm run dev
npm run storybook
```

## Links úteis

| Descrição | Link |
| ----------- | ----------- |
| Local ReactUI|  <http://localhost:5173/> |
| Documentação ReactUI| <http://rootds.qa.s3-website-us-east-1.amazonaws.com/> |
| Documentação Shadcn| <https://ui.shadcn.com/docs/components/> |
| Confluence |  wip  |

> No momento não conseguimos proteger a main por conta do plano gratuito do GH. Lembrem de **nunca** commitar na main e sempre abrir PR antes de mergear. o PR tb é uma forma de documentação 🙏
