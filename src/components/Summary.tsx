import React from 'react';
import { FileText } from 'lucide-react';

interface SummaryProps {
  summary: string | null;
}

export function Summary({ summary }: SummaryProps) {
  if (!summary) return null;

  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="h-5 w-5 text-blue-600" />
        <h2 className="text-xl font-semibold">Video Summary</h2>
      </div>
      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{summary}</p>
    </div>
  );
}
