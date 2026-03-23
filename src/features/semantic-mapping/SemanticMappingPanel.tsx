import { Card } from '../../components/ui/Card';
import { StatusPill } from '../../components/ui/StatusPill';
import { semanticMappings } from '../../data/migrationData';

export const SemanticMappingPanel = () => (
  <Card title='Semantic Mapping Panel' subtitle='Business-intent translation from COBOL constructs into Spring Boot layered implementation.'>
    <div className='overflow-auto rounded-lg border border-slate-200'>
      <table className='min-w-full text-left text-sm'>
        <thead className='bg-slate-50 text-xs uppercase text-slate-500'>
          <tr>
            <th className='px-3 py-2'>COBOL Construct</th>
            <th className='px-3 py-2'>Business Meaning</th>
            <th className='px-3 py-2'>Spring Boot Target</th>
            <th className='px-3 py-2'>Traceability</th>
            <th className='px-3 py-2'>Confidence</th>
          </tr>
        </thead>
        <tbody>
          {semanticMappings.map((row) => (
            <tr key={`${row.cobolConstruct}-${row.traceRef}`} className='border-t border-slate-200'>
              <td className='px-3 py-2 font-medium'>{row.cobolConstruct}</td>
              <td className='px-3 py-2'>{row.businessMeaning}</td>
              <td className='px-3 py-2'>{row.springTarget}</td>
              <td className='px-3 py-2 text-xs text-slate-500'>{row.traceRef}</td>
              <td className='px-3 py-2'><StatusPill status={row.confidence} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
);
