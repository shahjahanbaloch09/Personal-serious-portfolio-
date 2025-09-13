// Secure API client for Gemini AI
// All API keys are handled securely on the backend

export interface GeminiResponse {
  response: string;
}

export interface GeminiError {
  error: string;
  details?: string;
}

/**
 * Send a message to Gemini AI and get a response
 * @param message The message to send
 * @param model The model to use (default: gemini-1.5-flash)
 * @returns Promise with the AI response
 */
export async function sendMessageToGemini(
  message: string, 
  model: string = 'gemini-1.5-flash'
): Promise<GeminiResponse> {
  const response = await fetch('/api/gemini/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message, model }),
  });

  if (!response.ok) {
    const error: GeminiError = await response.json();
    throw new Error(error.error || 'Failed to send message to Gemini');
  }

  return response.json();
}

/**
 * Send a message to Gemini AI and stream the response
 * @param message The message to send
 * @param model The model to use (default: gemini-1.5-flash)
 * @param onChunk Callback for each chunk of the response
 * @param onComplete Callback when streaming is complete
 * @param onError Callback for errors
 */
export async function streamMessageToGemini(
  message: string,
  model: string = 'gemini-1.5-flash',
  onChunk: (text: string) => void,
  onComplete: () => void,
  onError: (error: string) => void
): Promise<void> {
  try {
    const response = await fetch('/api/gemini/stream', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, model }),
    });

    if (!response.ok) {
      const error: GeminiError = await response.json();
      onError(error.error || 'Failed to stream message to Gemini');
      return;
    }

    const reader = response.body?.getReader();
    if (!reader) {
      onError('Failed to read response stream');
      return;
    }

    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6);
          
          if (data === '[DONE]') {
            onComplete();
            return;
          }

          try {
            const parsed = JSON.parse(data);
            if (parsed.error) {
              onError(parsed.error);
              return;
            }
            if (parsed.text) {
              onChunk(parsed.text);
            }
          } catch (e) {
            // Skip invalid JSON lines
          }
        }
      }
    }

    onComplete();
  } catch (error) {
    onError(error instanceof Error ? error.message : 'Unknown error occurred');
  }
}

/**
 * Check if the backend API is healthy
 * @returns Promise that resolves if the API is healthy
 */
export async function checkApiHealth(): Promise<boolean> {
  try {
    const response = await fetch('/api/health');
    const data = await response.json();
    return response.ok && data.status === 'OK';
  } catch {
    return false;
  }
}