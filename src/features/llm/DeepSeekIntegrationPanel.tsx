import { useMemo, useState } from 'react';
import { Card } from '../../components/ui/Card';
import { llmFlow } from '../../data/migrationData';
import { buildInitialIr } from '../../services/irBuilder';

export const DeepSeekIntegrationPanel = () => {
  const [loading, setLoading] = useState(false);

  const sampleIr = useMemo(
    () =>
      buildInitialIr({
        cobolSource: 'READ CUSTOMER-MASTER ... EXEC CICS SYNCPOINT END-EXEC',
        copybook: '01 CUSTOMER-REC. 05 CUST-ID PIC 9(10).',
        metadata: 'VSAM KSDS CUSTOMER.MASTER',
      }),
    []
  );

  const simulateAgentPrompt = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setLoading(false);
  };

  return (
    <Card title='DeepSeek LLM Integration Panel' subtitle='Primary provider for semantic parsing, IR refinement, and migration review loops.'>
      <div className='grid gap-4 xl:grid-cols-2'>
        <div className='rounded-lg border border-slate-200 p-3'>
          <h4 className='font-semibold'>LLM Service Architecture</h4>
          <ul className='mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700'>
            <li>DeepSeek client with environment-configured API key and base URL.</li>
            <li>Agent-specific prompt routing with JSON schema hints.</li>
            <li>Structured output parsing and validation-first retry loop.</li>
            <li>Stateless request strategy with explicit source trace context.</li>
            <li>Tool/function-calling ready abstraction via provider interface.</li>
          </ul>
          <button
            type='button'
            onClick={simulateAgentPrompt}
            className='mt-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700'
          >
            {loading ? 'Running DeepSeek Semantic Prompt…' : 'Simulate Prompt Execution'}
          </button>
        </div>
        <div className='rounded-lg border border-slate-200 p-3'>
          <h4 className='font-semibold'>Sample IR Builder Output</h4>
          <pre className='mt-2 overflow-auto rounded-md bg-slate-900 p-3 text-xs text-slate-100'>
            {JSON.stringify(sampleIr, null, 2)}
          </pre>
        </div>
      </div>
      <div className='mt-4 rounded-lg border border-slate-200'>
        <h4 className='border-b border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold'>DeepSeek Processing Stages</h4>
        <ul className='divide-y divide-slate-200 text-sm'>
          {llmFlow.map((item) => (
            <li key={item.step} className='grid gap-2 px-3 py-2 md:grid-cols-[180px_1fr_180px]'>
              <span className='font-medium'>{item.step}</span>
              <span className='text-slate-600'>{item.detail}</span>
              <span className='text-slate-500'>{item.output}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
