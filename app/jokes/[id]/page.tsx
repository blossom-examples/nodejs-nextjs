import Link from 'next/link';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';

async function likeJoke(id: string) {
  'use server';

  await prisma.joke.update({
    where: { id: parseInt(id, 10) },
    data: {
      likes: {
        increment: 1,
      },
    },
  });
}

export default async function JokeDetail({ params }: { params: { id: string } }) {
  const jokeId = parseInt(params.id, 10);

  if (isNaN(jokeId)) {
    notFound();
  }

  const joke = await prisma.joke.findUnique({
    where: { id: jokeId },
  });

  if (!joke) {
    notFound();
  }

  return (
    <main>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h1 className="text-2xl font-semibold mb-4">Joke Details</h1>
          <div className="space-y-4">
            <p className="text-lg text-gray-800">{joke.content}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <div>
                <span>By {joke.author}</span>
                <span className="mx-2">•</span>
                <span>{joke.category}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span>{joke.likes} likes</span>
                <form action={likeJoke.bind(null, params.id)}>
                  <button
                    type="submit"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Like
                  </button>
                </form>
              </div>
            </div>
            <div className="text-xs text-gray-400">
              <p>Created: {new Date(joke.createdAt).toLocaleDateString()}</p>
              <p>Last updated: {new Date(joke.updatedAt).toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <Link
            href="/jokes"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            ← Back to Jokes
          </Link>
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