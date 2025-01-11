import { memo, useEffect, useRef } from 'react';
import { BusinessCardData } from "../../BusinessCardForm";
import { generateEmbedCode } from '../embed/utils/generators/htmlSections';

interface HighLevelPreviewProps {
  data: BusinessCardData;
}

export const HighLevelPreview = memo(({ data }: HighLevelPreviewProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const embedCode = generateEmbedCode(data);
      iframe.srcdoc = embedCode;
    }
  }, [data]);

  return (
    <div className="w-full h-full">
      <iframe
        ref={iframeRef}
        className="w-full h-full border-0"
        title="Business Card Preview"
        style={{
          width: "448px",
          maxWidth: "90%",
          height: "600px",
          margin: "0 auto",
          display: "block",
          border: "none"
        }}
      />
    </div>
  );
});

HighLevelPreview.displayName = "HighLevelPreview";