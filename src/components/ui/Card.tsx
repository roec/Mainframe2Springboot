import { ReactNode } from 'react';
import { classNames } from '../../utils/classNames';

type CardProps = { title?: string; subtitle?: string; children: ReactNode; className?: string };

export const Card = ({ title, subtitle, children, className }: CardProps) => (
  <section className={classNames('rounded-xl border border-slate-200 bg-white p-5 shadow-card', className)}>
    {title ? <h3 className='text-lg font-semibold text-slate-900'>{title}</h3> : null}
    {subtitle ? <p className='mt-1 text-sm text-slate-500'>{subtitle}</p> : null}
    <div className={title || subtitle ? 'mt-4' : ''}>{children}</div>
  </section>
);
