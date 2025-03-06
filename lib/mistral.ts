import { MistralClient } from '@mistralai/mistralai';

if (!process.env.MISTRAL_API_KEY) {
  throw new Error('Missing MISTRAL_API_KEY environment variable');
}

// Initialize the Mistral AI client
const mistralClient = new MistralClient(process.env.MISTRAL_API_KEY);

export { mistralClient };

// Helper function to generate text using Mistral AI
export async function generateText(prompt: string) {
  try {
    const response = await mistralClient.chat({
      model: 'mistral-tiny',
      messages: [{ role: 'user', content: prompt }],
    });

    return response.choices[0]?.message?.content || '';
  } catch (error) {
    console.error('Error generating text with Mistral AI:', error);
    throw error;
  }
}

// Helper function to analyze text using Mistral AI
export async function analyzeText(text: string) {
  try {
    const response = await mistralClient.chat({
      model: 'mistral-tiny',
      messages: [
        {
          role: 'system',
          content: 'Analyze the following text and provide insights:'
        },
        {
          role: 'user',
          content: text
        }
      ],
    });

    return response.choices[0]?.message?.content || '';
  } catch (error) {
    console.error('Error analyzing text with Mistral AI:', error);
    throw error;
  }
} 