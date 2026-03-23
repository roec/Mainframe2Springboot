export type ChatMessage = { role: 'system' | 'user' | 'assistant'; content: string };

export interface LlmProvider {
  completeJson<T>(messages: ChatMessage[], schemaHint: string): Promise<T>;
}
