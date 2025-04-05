# Next.js Jokes App

A simple jokes application built with Next.js, featuring a modern UI with Tailwind CSS and a PostgreSQL database with Prisma ORM. This application is ready to deploy on Blossom.

## Features

- Modern UI with Tailwind CSS
- PostgreSQL database with Prisma ORM
- Server-side rendering with Next.js
- Ready to deploy on Blossom

## Prerequisites

- Node.js 18.x or later
- PostgreSQL database (for production)
- npm or yarn package manager

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd nodejs-nextjs
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/jokes_db"
   ```
   For local development, you can use SQLite by not setting the `DATABASE_URL` variable.

4. Set up the database:
   ```bash
   npm run db:setup
   # or
   yarn db:setup
   ```

5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues
- `npm run db:setup` - Set up the database (run migrations and seed data)

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

## Deployment

This application is ready to deploy on Blossom. Follow these steps:

1. Create a new application on Blossom
2. Connect your repository
3. Set the following environment variables:
   - `DATABASE_URL`: Your PostgreSQL database URL
4. Deploy!

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
