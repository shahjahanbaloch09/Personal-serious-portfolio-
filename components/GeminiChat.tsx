import React, { useState } from 'react';
import { sendMessageToGemini, streamMessageToGemini, checkApiHealth } from '../utils/geminiApi';

/**
 * Example component demonstrating secure Gemini AI integration
 * This component shows how to use the secure backend API
 */
const GeminiChat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [apiStatus, setApiStatus] = useState<boolean | null>(null);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    setIsLoading(true);
    setResponse('');

    try {
      const result = await sendMessageToGemini(message);
      setResponse(result.response);
    } catch (error) {
      setResponse(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStreamMessage = async () => {
    if (!message.trim()) return;

    setIsStreaming(true);
    setResponse('');

    await streamMessageToGemini(
      message,
      'gemini-1.5-flash',
      (chunk) => {
        setResponse(prev => prev + chunk);
      },
      () => {
        setIsStreaming(false);
      },
      (error) => {
        setResponse(`Error: ${error}`);
        setIsStreaming(false);
      }
    );
  };

  const handleCheckHealth = async () => {
    const healthy = await checkApiHealth();
    setApiStatus(healthy);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Secure Gemini AI Chat</h2>
      
      <div className="mb-4">
        <button
          onClick={handleCheckHealth}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Check API Health
        </button>
        {apiStatus !== null && (
          <span className={`ml-2 px-3 py-1 rounded text-sm ${
            apiStatus ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {apiStatus ? 'API Healthy' : 'API Unavailable'}
          </span>
        )}
      </div>

      <div className="mb-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={handleSendMessage}
          disabled={isLoading || isStreaming || !message.trim()}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
        
        <button
          onClick={handleStreamMessage}
          disabled={isLoading || isStreaming || !message.trim()}
          className="px-6 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isStreaming ? 'Streaming...' : 'Stream Response'}
        </button>
      </div>

      {response && (
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2 text-gray-700">Response:</h3>
          <div className="whitespace-pre-wrap text-gray-800">{response}</div>
        </div>
      )}

      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-1">Security Note:</h4>
        <p className="text-sm text-blue-700">
          All API calls are handled securely through the backend server. 
          No API keys are exposed in the frontend bundle.
        </p>
      </div>
    </div>
  );
};

export default GeminiChat;