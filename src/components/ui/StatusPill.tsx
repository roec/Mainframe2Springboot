import { classNames } from '../../utils/classNames';

type Status = 'completed' | 'running' | 'pending' | 'matched' | 'requires-review' | 'High' | 'Medium' | 'Low';

const colorMap: Record<Status, string> = {
  completed: 'bg-emerald-100 text-emerald-800',
  running: 'bg-amber-100 text-amber-800',
  pending: 'bg-slate-200 text-slate-700',
  matched: 'bg-emerald-100 text-emerald-800',
  'requires-review': 'bg-rose-100 text-rose-800',
  High: 'bg-rose-100 text-rose-800',
  Medium: 'bg-amber-100 text-amber-800',
  Low: 'bg-emerald-100 text-emerald-800',
};

export const StatusPill = ({ status }: { status: Status }) => (
  <span className={classNames('rounded-full px-2.5 py-1 text-xs font-medium', colorMap[status])}>{status}</span>
);
