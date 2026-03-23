import { Card } from '../../components/ui/Card';
import { StatusPill } from '../../components/ui/StatusPill';
import { auditFindings, diffResults } from '../../data/migrationData';

export const ValidationAuditPanel = () => (
  <Card title='Validation & Audit Panel' subtitle='Governance controls: tests, diff parity, confidence scoring, and review checkpoints.'>
    <div className='grid gap-4 xl:grid-cols-2'>
      <div className='rounded-lg border border-slate-200'>
        <h4 className='border-b border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold'>Old vs New Field Diff</h4>
        <table className='min-w-full text-left text-sm'>
          <thead className='text-xs uppercase text-slate-500'>
            <tr>
              <th className='px-3 py-2'>Field</th>
              <th className='px-3 py-2'>Legacy</th>
              <th className='px-3 py-2'>Modern</th>
              <th className='px-3 py-2'>Status</th>
            </tr>
          </thead>
          <tbody>
            {diffResults.map((row) => (
              <tr key={row.field} className='border-t border-slate-200'>
                <td className='px-3 py-2 font-medium'>{row.field}</td>
                <td className='px-3 py-2'>{row.legacy}</td>
                <td className='px-3 py-2'>{row.modern}</td>
                <td className='px-3 py-2'><StatusPill status={row.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='rounded-lg border border-slate-200'>
        <h4 className='border-b border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold'>Audit Findings & Risk Flags</h4>
        <ul className='space-y-2 p-3 text-sm'>
          {auditFindings.map((finding) => (
            <li key={finding.id} className='rounded-md border border-slate-200 p-3'>
              <div className='mb-1 flex items-center justify-between'>
                <span className='font-semibold'>{finding.id}</span>
                <StatusPill status={finding.severity} />
              </div>
              <p className='text-slate-700'>{finding.summary}</p>
              <p className='mt-1 text-xs text-slate-500'>Owner: {finding.owner} · Trace: {finding.traceRef}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Card>
);
