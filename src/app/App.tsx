import { StudioLayout } from '../layouts/StudioLayout';
import { AgentPipelinePanel } from '../features/agents/AgentPipelinePanel';
import { IrPanel } from '../features/ir/IrPanel';
import { DeepSeekIntegrationPanel } from '../features/llm/DeepSeekIntegrationPanel';
import { ExecutiveOverviewPanel } from '../features/overview/ExecutiveOverviewPanel';
import { GeneratedCodeViewerPanel } from '../features/outputs/GeneratedCodeViewerPanel';
import { TargetArchitecturePanel } from '../features/outputs/TargetArchitecturePanel';
import { LegacyInputPanel } from '../features/inputs/LegacyInputPanel';
import { RagKnowledgePanel } from '../features/rag/RagKnowledgePanel';
import { SemanticMappingPanel } from '../features/semantic-mapping/SemanticMappingPanel';
import { ValidationAuditPanel } from '../features/validation/ValidationAuditPanel';

import { ReactNode } from 'react';

const Section = ({ id, children }: { id: string; children: ReactNode }) => (
  <section id={id} className='scroll-mt-6'>
    {children}
  </section>
);

export const App = () => (
  <StudioLayout>
    <Section id='overview'>
      <ExecutiveOverviewPanel />
    </Section>
    <Section id='legacy-inputs'>
      <LegacyInputPanel />
    </Section>
    <Section id='rag-knowledge'>
      <RagKnowledgePanel />
    </Section>
    <Section id='ir'>
      <IrPanel />
    </Section>
    <Section id='agent-pipeline'>
      <AgentPipelinePanel />
    </Section>
    <Section id='semantic-mapping'>
      <SemanticMappingPanel />
    </Section>
    <Section id='target-architecture'>
      <TargetArchitecturePanel />
    </Section>
    <Section id='generated-code'>
      <GeneratedCodeViewerPanel />
    </Section>
    <Section id='validation-&-audit'>
      <ValidationAuditPanel />
    </Section>
    <Section id='deepseek-integration'>
      <DeepSeekIntegrationPanel />
    </Section>
  </StudioLayout>
);
