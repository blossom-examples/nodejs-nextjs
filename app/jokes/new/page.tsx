import Link from 'next/link';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';

async function createJoke(formData: FormData) {
  'use server';

  const content = formData.get('content') as string;
  const author = formData.get('author') as string;
  const category = formData.get('category') as string;

  if (!content || !author || !category) {
    throw new Error('All fields are required');
  }

  await prisma.joke.create({
    data: {
      content,
      author,
      category,
      likes: 0,
    },
  });

  redirect('/jokes');
}

export default function NewJoke() {
  return (
    <main>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold mb-8">Add New Joke</h1>

        <form action={createJoke} className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Joke Content
            </label>
            <textarea
              id="content"
              name="content"
              rows={4}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your joke here..."
            />
          </div>

          <div className="mb-4">
            <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter author name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter joke category"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <Link
              href="/jokes"
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Add Joke
            </button>
          </div>
        </form>

        <div className="text-center mt-8">
          <Link
            href="/jokes"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            ← Back to Jokes
          </Link>
        </div>
      </div>
    </main>
  );
}