import { Card } from '../../components/ui/Card';
import { ragCategories, retrievalMatrix } from '../../data/migrationData';

export const RagKnowledgePanel = () => (
  <Card title='RAG Knowledge Base Panel' subtitle='Grounded retrieval assets and agent-level knowledge usage matrix.'>
    <div className='grid gap-3 md:grid-cols-2'>
      {ragCategories.map((category) => (
        <div key={category.name} className='rounded-lg border border-slate-200 p-3'>
          <h4 className='font-medium'>{category.name}</h4>
          <p className='mt-1 text-sm text-slate-600'>{category.description}</p>
          <p className='mt-2 text-xs text-slate-500'>Artifacts: {category.artifacts.join(', ')}</p>
        </div>
      ))}
    </div>
    <div className='mt-4 overflow-auto rounded-lg border border-slate-200'>
      <table className='min-w-full text-left text-sm'>
        <thead className='bg-slate-50 text-xs uppercase text-slate-500'>
          <tr>
            <th className='px-3 py-2'>Agent</th>
            <th className='px-3 py-2'>Knowledge Retrieved</th>
            <th className='px-3 py-2'>Purpose</th>
          </tr>
        </thead>
        <tbody>
          {retrievalMatrix.map((row) => (
            <tr key={row.agent} className='border-t border-slate-200'>
              <td className='px-3 py-2 font-medium'>{row.agent}</td>
              <td className='px-3 py-2'>{row.categories.join(' · ')}</td>
              <td className='px-3 py-2 text-slate-600'>{row.rationale}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
);
