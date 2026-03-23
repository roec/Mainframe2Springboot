export type KpiCard = { label: string; value: string; trend: string };

export type SourceArtifact = { id: string; label: string; language: string; content: string };

export type RagCategory = { name: string; description: string; artifacts: string[] };

export type RetrievalMatrixRow = { agent: string; categories: string[]; rationale: string };

export type IrNode = { title: string; payload: Record<string, unknown> };

export type AgentStage = {
  name: string;
  status: 'completed' | 'running' | 'pending';
  role: string;
  inputs: string[];
  knowledge: string[];
  purpose: string;
  outputs: string[];
};

export type SemanticMapRow = {
  cobolConstruct: string;
  businessMeaning: string;
  springTarget: string;
  traceRef: string;
  confidence: 'High' | 'Medium' | 'Low';
};

export type FileNode = { name: string; type: 'folder' | 'file'; children?: FileNode[]; key?: string };

export type GeneratedFile = { key: string; language: string; content: string; description: string };

export type DiffResult = { field: string; legacy: string; modern: string; status: 'matched' | 'requires-review' };

export type AuditFinding = { id: string; severity: 'Low' | 'Medium' | 'High'; summary: string; owner: string; traceRef: string };

export type LlmFlowStage = { step: string; detail: string; output: string };
