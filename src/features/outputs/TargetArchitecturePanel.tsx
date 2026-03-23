import { Card } from '../../components/ui/Card';
import { architectureTree } from '../../data/migrationData';
import { FileNode } from '../../types/migration';
import { useStudioStore } from '../../hooks/useStudioStore';

const TreeNode = ({ node, depth = 0 }: { node: FileNode; depth?: number }) => {
  const { setFile } = useStudioStore();

  if (node.type === 'file') {
    return (
      <button
        type='button'
        onClick={() => node.key && setFile(node.key)}
        style={{ paddingLeft: `${depth * 16}px` }}
        className='block w-full rounded-md py-1 text-left text-sm text-slate-700 hover:bg-slate-100'
      >
        📄 {node.name}
      </button>
    );
  }

  return (
    <div>
      <p style={{ paddingLeft: `${depth * 16}px` }} className='py-1 text-sm font-semibold text-slate-800'>
        📁 {node.name}
      </p>
      <div className='space-y-0.5'>
        {node.children?.map((child) => (
          <TreeNode key={`${node.name}-${child.name}`} node={child} depth={depth + 1} />
        ))}
      </div>
    </div>
  );
};

export const TargetArchitecturePanel = () => (
  <Card title='Spring Boot Target Architecture Panel' subtitle='Generated layered project tree (API, Application, Domain, Infrastructure).'>
    <div className='rounded-lg border border-slate-200 bg-slate-50 p-3'>
      {architectureTree.map((root) => (
        <TreeNode key={root.name} node={root} />
      ))}
    </div>
  </Card>
);
