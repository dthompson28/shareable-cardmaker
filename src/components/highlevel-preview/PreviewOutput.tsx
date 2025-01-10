import { useEffect, useRef } from "react";

interface PreviewOutputProps {
  htmlCode: string;
  cssCode: string;
}

const PreviewOutput = ({ htmlCode, cssCode }: PreviewOutputProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const iframeDoc = iframeRef.current.contentDocument;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(`
          ${htmlCode}
          <style>${cssCode}</style>
        `);
        iframeDoc.close();
      }
    }
  }, [htmlCode, cssCode]);

  return (
    <div className="relative bg-white rounded-md shadow-md">
      <iframe
        ref={iframeRef}
        className="w-full min-h-[600px] rounded-md"
        title="Business Card Preview"
      />
    </div>
  );
};

export default PreviewOutput;