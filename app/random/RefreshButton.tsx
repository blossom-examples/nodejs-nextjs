'use client';

import { useRouter } from 'next/navigation';

export default function RefreshButton() {
  const router = useRouter();

  const handleRefresh = () => {
    // Force a full page refresh
    window.location.reload();
  };

  return (
    <button
      onClick={handleRefresh}
      className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
    >
      Get Another Joke
    </button>
  );
}