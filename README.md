# Roundest - Which Pokémon is most round?

Answering all of life's toughest questions

image.png

image.png

## Why?

Building a MODERN Full Stack App w/ NextJS 12, Typescript, Prisma and more - T3 Stack

## Getting Started

Prerequisite:

- MySQL local database (or Planetscale connection using PScale CLI)
- npm

Setup

1. Clone repo
1. `npm install`
1. Create `.env` file if one does not already exist
1. Add connection URLs for both database and shadow db to .env ([example .env file here](https://gist.github.com/TheoBr/e450c52a52a9f9c9b49ef07212689685))
1. Initialize database - `npx prisma migrate dev`
1. Initialize base data set - `npm run ts-node ./scripts/fill-db.ts`
1. Run dev server `npm run dev`

## TODO

- [x] Use next/image to handle image caching and better rendering
- [x] Persist data fetched from PokemonAPI
- [x] Create the results page with counting/sorting
- [x] Better loading state between votes

## USEFUL LINKS

- [x] TailWindCss ([link here](https://tailwindcss.com/))
- [x] tRpc ([link here](https://trpc.io/))
- [x] Pokemon API ([link here](https://pokeapi.co/))
