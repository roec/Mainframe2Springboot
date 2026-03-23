import { Card } from '../../components/ui/Card';
import { CodePane } from '../../components/domain/CodePane';
import { generatedFiles } from '../../data/migrationData';
import { useStudioStore } from '../../hooks/useStudioStore';

export const GeneratedCodeViewerPanel = () => {
  const { selectedFileKey, setFile } = useStudioStore();
  const selected = generatedFiles.find((file) => file.key === selectedFileKey) ?? generatedFiles[0];

  return (
    <Card title='Generated Code Viewer' subtitle='Traceable Spring Boot output and migration artifacts.'>
      <div className='mb-3 flex flex-wrap gap-2'>
        {generatedFiles.map((file) => (
          <button
            key={file.key}
            type='button'
            onClick={() => setFile(file.key)}
            className={`rounded-md border px-3 py-1.5 text-xs ${file.key === selected.key ? 'border-indigo-300 bg-indigo-50 text-indigo-700' : 'border-slate-200 bg-white text-slate-700'}`}
          >
            {file.key}
          </button>
        ))}
      </div>
      <p className='mb-2 text-sm text-slate-600'>{selected.description}</p>
      <CodePane language={selected.language} content={selected.content} />
    </Card>
  );
};
