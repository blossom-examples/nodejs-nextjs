import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import RefreshButton from './RefreshButton';

// Add a dynamic segment to force revalidation
export const dynamic = 'force-dynamic';

export default async function RandomJoke() {
  // Get a random joke
  const jokes = await prisma.joke.findMany();
  const randomJoke = jokes.length > 0 ? jokes[Math.floor(Math.random() * jokes.length)] : null;

  return (
    <main>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h1 className="text-2xl font-semibold mb-4 text-center">Random Joke</h1>
          {randomJoke ? (
            <div className="text-center">
              <p className="text-lg text-gray-800 mb-4">{randomJoke.content}</p>
              <p className="text-sm text-gray-500">By {randomJoke.author}</p>
              <p className="text-xs text-gray-400 mt-1">Category: {randomJoke.category}</p>
              <div className="mt-4 flex justify-center space-x-4">
                <RefreshButton />
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

        <div className="text-center">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}