import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export default async function JokesList() {
  // Get all jokes
  const jokes = await prisma.joke.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <main>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">All Jokes</h1>
          <Link
            href="/jokes/new"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Add New Joke
          </Link>
        </div>

        {jokes.length > 0 ? (
          <div className="grid gap-6">
            {jokes.map((joke) => (
              <div key={joke.id} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg text-gray-800 mb-4">{joke.content}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div>
                    <span>By {joke.author}</span>
                    <span className="mx-2">•</span>
                    <span>{joke.category}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span>{joke.likes} likes</span>
                    <Link
                      href={`/jokes/${joke.id}`}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">No jokes available. Add some jokes to get started!</p>
            <Link
              href="/jokes/new"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Add a Joke
            </Link>
          </div>
        )}

        <div className="text-center mt-8">
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