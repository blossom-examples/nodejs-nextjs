# Next.js Jokes App

[![Blossom Badge](https://img.boltops.com/images/blossom/logos/blossom-readme.png)](https://blossom-cloud.com)

A simple jokes application built with Next.js, featuring a modern UI with Tailwind CSS and a PostgreSQL database with Prisma ORM. This application is ready to deploy on [Blossom](https://blossom-cloud.com).

## Getting Started

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL="postgres://user:password@localhost:5432/example_nextjs_dev"
   ```
   For local development, you can use SQLite by not setting the `DATABASE_URL` variable.

3. Set up the database:
   ```bash
   yarn db:setup
   ```

4. Start the development server:
   ```bash
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

<details>
<summary>Additional Information</summary>

## Features

- Modern UI with Tailwind CSS
- PostgreSQL database with Prisma ORM
- Server-side rendering with Next.js
- Ready to deploy on Blossom

## Available Scripts

- `yarn dev` - Start the development server
- `yarn build` - Build the application for production
- `yarn start` - Start the production server
- `yarn lint` - Run ESLint to check for code issues
- `yarn db:setup` - Set up the database (run migrations and seed data)

## Project Structure

```
nodejs-nextjs/
├── app/                  # Next.js app directory
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── error.tsx        # Error page
│   ├── loading.tsx      # Loading page
│   ├── not-found.tsx    # 404 page
│   ├── random/          # Random joke page
│   └── jokes/           # Jokes pages
├── lib/                  # Utility functions and shared code
├── prisma/              # Prisma schema and migrations
├── public/              # Static files
└── scripts/             # Database setup and seeding scripts
```

</details>