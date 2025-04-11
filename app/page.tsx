import Link from 'next/link';
import { prisma } from '@/lib/prisma';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  // Get a random joke
  const jokes = await prisma.joke.findMany();
  const randomJoke = jokes.length > 0 ? jokes[Math.floor(Math.random() * jokes.length)] : null;

  return (
    <main>
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Next.js Jokes App</h1>
        <p className="text-gray-600 mb-4">A simple jokes application built with Next.js</p>
        <a
          href="https://blossom-cloud.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <span>Deploy on Blossom</span>
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </header>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Random Joke</h2>
        {randomJoke ? (
          <div className="text-center">
            <p className="text-lg text-gray-800 mb-4">{randomJoke.content}</p>
            <p className="text-sm text-gray-500">By {randomJoke.author}</p>
            <p className="text-xs text-gray-400 mt-1">Category: {randomJoke.category}</p>
            <div className="mt-4 flex justify-center space-x-4">
              <Link
                href="/random"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Get Another Joke
              </Link>
              <Link
                href="/jokes"
                className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                View All Jokes
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-600">No jokes available. Add some jokes to get started!</p>
            <Link
              href="/jokes/new"
              className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Add a Joke
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}