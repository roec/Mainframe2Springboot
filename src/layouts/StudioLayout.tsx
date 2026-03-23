import { ReactNode } from 'react';

const sections = [
  'Overview',
  'Legacy Inputs',
  'RAG Knowledge',
  'IR',
  'Agent Pipeline',
  'Semantic Mapping',
  'Target Architecture',
  'Generated Code',
  'Validation & Audit',
  'DeepSeek Integration',
];

export const StudioLayout = ({ children }: { children: ReactNode }) => (
  <div className='min-h-screen bg-slate-100 text-slate-900'>
    <div className='mx-auto grid max-w-[1600px] grid-cols-1 gap-6 p-6 xl:grid-cols-[260px_1fr]'>
      <aside className='sticky top-6 hidden h-fit rounded-xl border border-slate-200 bg-white p-4 shadow-card xl:block'>
        <h1 className='text-base font-bold'>Migration Studio</h1>
        <p className='mt-1 text-xs text-slate-500'>Semantic COBOL ➜ Spring Boot</p>
        <nav className='mt-4 space-y-1'>
          {sections.map((section) => (
            <a key={section} href={`#${section.replace(/\s+/g, '-').toLowerCase()}`} className='block rounded-md px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100'>
              {section}
            </a>
          ))}
        </nav>
      </aside>
      <main className='space-y-6'>{children}</main>
    </div>
  </div>
);
