svelte-movies-app
├── src
│   ├── lib
│   │   ├── components
│   │   │   ├── MovieCard.svelte
│   │   │   ├── MovieList.svelte
│   │   │   ├── MovieDetails.svelte
│   │   │   ├── SearchBar.svelte
│   │   │   └── Pagination.svelte
│   │   ├── services
│   │   │   └── api.ts
│   │   └── types
│   │       └── movie.ts
│   ├── routes
│   │   ├── +page.svelte
│   │   ├── +layout.svelte
│   │   └── movie
│   │       └── [id]
│   │           └── +page.svelte
│   ├── app.html
│   └── app.d.ts
├── static
├── svelte.config.js
├── package.json
├── tsconfig.json
└── README.md