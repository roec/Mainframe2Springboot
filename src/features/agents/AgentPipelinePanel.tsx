import { Card } from '../../components/ui/Card';
import { StatusPill } from '../../components/ui/StatusPill';
import { agents } from '../../data/migrationData';

export const AgentPipelinePanel = () => (
  <Card title='Agent Pipeline Panel' subtitle='Agentic orchestration pipeline across semantic migration lifecycle.'>
    <div className='mb-4 rounded-lg border border-indigo-100 bg-indigo-50 p-3 text-sm text-indigo-800'>
      Inventory → Parse → Use Case Mapping → Domain Modeling → Persistence → API Design → Code Generation → Test & Diff → Reviewer/Fixer
    </div>
    <div className='grid gap-3 lg:grid-cols-2'>
      {agents.map((agent) => (
        <details key={agent.name} className='rounded-lg border border-slate-200 p-3'>
          <summary className='flex cursor-pointer items-center justify-between gap-3'>
            <span className='font-semibold'>{agent.name}</span>
            <StatusPill status={agent.status} />
          </summary>
          <div className='mt-3 space-y-2 text-sm'>
            <p><span className='font-medium'>Role:</span> {agent.role}</p>
            <p><span className='font-medium'>Inputs:</span> {agent.inputs.join(', ')}</p>
            <p><span className='font-medium'>Retrieved knowledge:</span> {agent.knowledge.join(', ')}</p>
            <p><span className='font-medium'>Processing purpose:</span> {agent.purpose}</p>
            <p><span className='font-medium'>Outputs:</span> {agent.outputs.join(', ')}</p>
          </div>
        </details>
      ))}
    </div>
  </Card>
);
