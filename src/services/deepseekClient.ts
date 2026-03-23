import { ChatMessage, LlmProvider } from './llmProvider';

type DeepSeekChoice = { message: { content: string } };
type DeepSeekResponse = { choices: DeepSeekChoice[] };

const API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY;
const BASE_URL = import.meta.env.VITE_DEEPSEEK_BASE_URL || 'https://api.deepseek.com/v1';
const MODEL = import.meta.env.VITE_DEEPSEEK_MODEL || 'deepseek-chat';

export class DeepSeekClient implements LlmProvider {
  async completeJson<T>(messages: ChatMessage[], schemaHint: string): Promise<T> {
    if (!API_KEY) {
      throw new Error('DeepSeek API key missing. Set VITE_DEEPSEEK_API_KEY in your environment.');
    }

    const response = await fetch(`${BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        temperature: 0.1,
        response_format: { type: 'json_object' },
        extra_body: {
          schema_hint: schemaHint,
        },
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      throw new Error(`DeepSeek request failed: ${response.status} ${details}`);
    }

    const payload = (await response.json()) as DeepSeekResponse;
    const content = payload.choices?.[0]?.message?.content;
    if (!content) {
      throw new Error('DeepSeek returned an empty response.');
    }

    try {
      return JSON.parse(content) as T;
    } catch {
      throw new Error('DeepSeek output is not valid JSON.');
    }
  }
}
