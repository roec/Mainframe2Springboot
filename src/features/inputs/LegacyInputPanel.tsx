import { Card } from '../../components/ui/Card';
import { sourceArtifacts } from '../../data/migrationData';
import { useStudioStore } from '../../hooks/useStudioStore';
import { CodePane } from '../../components/domain/CodePane';

export const LegacyInputPanel = () => {
  const { selectedArtifactId, setArtifact } = useStudioStore();
  const selected = sourceArtifacts.find((item) => item.id === selectedArtifactId) ?? sourceArtifacts[0];

  return (
    <Card title='Legacy Source Input Panel' subtitle='COBOL ecosystem ingestion including copybooks, VSAM, CICS/BMS, and JCL.'>
      <div className='mb-3 flex flex-wrap gap-2'>
        {sourceArtifacts.map((artifact) => (
          <button
            key={artifact.id}
            type='button'
            onClick={() => setArtifact(artifact.id)}
            className={`rounded-md border px-3 py-1.5 text-sm ${artifact.id === selected.id ? 'border-indigo-300 bg-indigo-50 text-indigo-700' : 'border-slate-200 bg-white text-slate-700'}`}
          >
            {artifact.label}
          </button>
        ))}
      </div>
      <CodePane language={selected.language} content={selected.content} />
    </Card>
  );
};
