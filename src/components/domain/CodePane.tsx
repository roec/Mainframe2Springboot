import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CodePane = ({ language, content }: { language: string; content: string }) => (
  <SyntaxHighlighter
    language={language}
    style={oneDark}
    customStyle={{ borderRadius: '0.75rem', fontSize: '0.78rem', maxHeight: '26rem' }}
    wrapLongLines
    showLineNumbers
  >
    {content}
  </SyntaxHighlighter>
);
