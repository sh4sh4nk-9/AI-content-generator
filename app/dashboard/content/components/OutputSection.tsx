import React, { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Clipboard } from 'lucide-react';

interface Props {
  aiOutput: string;
  loading: boolean;
}

function OutputSection({ aiOutput, loading }: Props) {
  const editorRef = useRef<Editor | null>(null);

  // Function to copy editor content
  const copyToClipboard = () => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      const content = editorInstance.getMarkdown();
      navigator.clipboard.writeText(content);
      // alert("Output copied to clipboard!");
    }
  };

  // Update the editor when aiOutput changes
  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      if (loading) {
        editorInstance.setMarkdown(`
<div class="loading-container">
  <p class="loading-text">✨ Generating Content... ✨</p>
</div>
        `);
      } else {
        editorInstance.setMarkdown(aiOutput || "Your Result Will Be Displayed Here");
      }
    }
  }, [aiOutput, loading]);

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      {aiOutput && !loading && (
        <div className='flex justify-between items-center p-5'>
          <h2>Here is your output:</h2>
          <Button className='flex gap-2' variant="outline" onClick={copyToClipboard}>
            <Clipboard className='w-4 h-4' /> Copy
          </Button>
        </div>
      )}
      <div className='relative'>
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <p className="text-lg font-semibold text-gray-600 animate-pulse">✨ Generating Content... ✨</p>
          </div>
        ) : null}
        <Editor
          ref={editorRef}
          initialValue="Your Result Will Be Displayed Here"
          initialEditType="markdown"
          height="600px"
          useCommandShortcut={true}
        />
      </div>
    </div>
  );
}

export default OutputSection;
