import React, { useState } from 'react';
import { Link2, Loader2 } from 'lucide-react';

interface VideoInputProps {
  onSubmit: (url: string) => Promise<void>;
  isLoading: boolean;
}

export function VideoInput({ onSubmit, isLoading }: VideoInputProps) {
  const [url, setUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      await onSubmit(url);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="relative">
        <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="url"
          placeholder="Paste YouTube video URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full pl-10 pr-32 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Summarizing...
            </span>
          ) : (
            'Summarize'
          )}
        </button>
      </div>
    </form>
  );
}
