import { memo, useEffect, useRef } from 'react';
import { BusinessCardData } from "../../BusinessCardForm";
import { generateEmbedCode } from "../embed/utils/EmbedCodeGenerator";

interface HighLevelPreviewProps {
  data: BusinessCardData;
}

export const HighLevelPreview = memo(({ data }: HighLevelPreviewProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const iframeDoc = iframeRef.current.contentDocument;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(generateEmbedCode(data));
        iframeDoc.close();
      }
    }
  }, [data]);

  return (
    <div className="w-full h-full">
      <iframe
        ref={iframeRef}
        className="w-full h-full border-0"
        title="Business Card Preview"
      />
    </div>
  );
});

HighLevelPreview.displayName = "HighLevelPreview";