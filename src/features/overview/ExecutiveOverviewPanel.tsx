import { Card } from '../../components/ui/Card';
import { executiveSummary, kpis, principles } from '../../data/migrationData';

export const ExecutiveOverviewPanel = () => (
  <Card title='Semantic COBOL to Spring Boot Migration Studio' subtitle='Enterprise modernization cockpit for architecture teams and migration factories.'>
    <p className='text-sm text-slate-700'>{executiveSummary}</p>
    <div className='mt-4 flex flex-wrap gap-2'>
      {principles.map((item) => (
        <span key={item} className='rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700'>
          {item}
        </span>
      ))}
    </div>
    <div className='mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3'>
      {kpis.map((kpi) => (
        <div key={kpi.label} className='rounded-lg border border-slate-200 bg-slate-50 p-3'>
          <p className='text-xs text-slate-500'>{kpi.label}</p>
          <p className='mt-1 text-2xl font-semibold'>{kpi.value}</p>
          <p className='text-xs text-slate-600'>{kpi.trend}</p>
        </div>
      ))}
    </div>
  </Card>
);
