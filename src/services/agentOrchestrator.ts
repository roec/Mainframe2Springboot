import { AgentStage } from '../types/migration';
import { ChatMessage, LlmProvider } from './llmProvider';

export type OrchestrationRequest = {
  agent: AgentStage;
  irSnapshot: object;
  retrievedKnowledge: string[];
};

export class AgentOrchestrator {
  constructor(private provider: LlmProvider) {}

  async runAgent<T>(request: OrchestrationRequest): Promise<T> {
    const messages: ChatMessage[] = [
      {
        role: 'system',
        content:
          'You are a semantic migration agent. Convert legacy intent into Spring Boot layered architecture artifacts with traceability.',
      },
      {
        role: 'user',
        content: JSON.stringify(
          {
            agent: request.agent.name,
            role: request.agent.role,
            purpose: request.agent.purpose,
            knowledge: request.retrievedKnowledge,
            ir: request.irSnapshot,
          },
          null,
          2
        ),
      },
    ];

    return this.provider.completeJson<T>(
      messages,
      'Return JSON with generatedArtifacts, confidence, risks, and traceRefs arrays.'
    );
  }
}
