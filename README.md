# asc-admin dashboard

A Next.js 13 dashboard built with Radix UI and Tailwind CSS.

## Features

- Radix UI Primitives
- Tailwind CSS
- Fonts with `next/font`
- Icons from [Lucide](https://lucide.dev)
- Dark mode with `next-themes`
- Automatic import sorting with `@ianvs/prettier-plugin-sort-imports`
- Heavily dependents on the [shadcn-ui](https://ui.shadcn.com/) project. for pre-styled and customizable react components

## Tailwind CSS Features

- Class merging with `taiwind-merge`
- Animation with `tailwindcss-animate`
- Conditional classes with `clsx`
- Variants with `class-variance-authority`
- Automatic class sorting with `eslint-plugin-tailwindcss`

## Import Sort

The starter comes with `@ianvs/prettier-plugin-sort-imports` for automatically sort your imports.

### Input

```tsx
import * as React from "react"
import Link from "next/link"

import { siteConfig } from "~/config/site"
import { buttonVariants } from "~/components/ui/button"
import "~/styles/globals.css"
import { twMerge } from "tailwind-merge"

import { NavItem } from "~/components/types/nav"
import { cn } from "~/components/lib/utils"
```

### Output

```tsx
import * as React from "react"
// React is always first.
import Link from "next/link"
// Followed by next modules.
import { twMerge } from "tailwind-merge"

// Followed by third-party modules
// Space
import "~/styles/globals.css"
// styles
import { NavItem } from "~/components/types/nav"
// types
import { siteConfig } from "~/components/config/site"
// config
import { cn } from "~/componnets/lib/utils"
// lib
import { buttonVariants } from "~/components/ui/button"

// components
```

### Class Merging

The `cn` util handles conditional classes and class merging.

### Input

```ts
cn("px-2 bg-slate-100 py-2 bg-slate-200")
// Outputs `p-2 bg-slate-200`
```

## License

Licensed under the [MIT license](https://github.com/shadcn/ui/blob/main/LICENSE.md).


## How to run

Create a .env file and populate with relevant environment variables

### Installation

```sh
pnpm i
```

Development mode

```sh
pnpm run dev
  
```

Build output
```sh
pnpm run build
```
Start production server
```sh
pnpm run start
```


<b>For other usefull commands take a look at the scripts sections of the package.json</b>
