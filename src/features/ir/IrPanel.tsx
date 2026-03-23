import { Card } from '../../components/ui/Card';
import { irNodes } from '../../data/migrationData';

export const IrPanel = () => (
  <Card title='Intermediate Representation (IR) Panel' subtitle='Structured program/data/logic IR with source traceability.'>
    <div className='space-y-3'>
      {irNodes.map((node) => (
        <details key={node.title} open className='rounded-lg border border-slate-200 p-3'>
          <summary className='cursor-pointer font-semibold text-slate-800'>{node.title}</summary>
          <pre className='mt-2 overflow-auto rounded-md bg-slate-900 p-3 text-xs text-slate-100'>
            {JSON.stringify(node.payload, null, 2)}
          </pre>
        </details>
      ))}
    </div>
  </Card>
);
