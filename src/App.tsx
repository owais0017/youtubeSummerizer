import React, { useState } from 'react';
import { Video } from 'lucide-react';
import { VideoInput } from './components/VideoInput';
import { Summary } from './components/Summary';
import { LoginPage } from './pages/LoginPage';

function App() {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (url: string) => {
    setIsLoading(true);
    try {
      // TODO: Implement actual API call to your summarization service
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSummary(
        "This is a placeholder summary. In a real implementation, you would make an API call to your backend service that would process the YouTube video and generate a summary using AI/ML models."
      );
    } catch (error) {
      console.error('Error generating summary:', error);
      alert('Failed to generate summary. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8 text-center">
          <LoginPage />
        <div className="flex flex-col items-center gap-8">
          <div>
            <div className="flex items-center justify-center gap-4 mb-4">
              <Video className="h-12 w-12 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">Video Summarizer</h1>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get quick summaries of YouTube videos. Just paste the video URL below and see the magic happen!
            </p>
          </div>
          
          <VideoInput onSubmit={handleSubmit} isLoading={isLoading} />

          <Summary summary={summary} />
        </div>
      </div>
    </div>
  );
}

export default App;
