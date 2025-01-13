import { memo, useEffect, useRef } from "react";
import { BusinessCardData } from "@/types/businessCard";
import { generateEmbedCode } from './embed/utils/generators/embedGenerator';

interface HighLevelCardPreviewProps {
  data: BusinessCardData;
}

export const HighLevelCardPreview = memo(({ data }: HighLevelCardPreviewProps) => {
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
        className="w-full h-full"
        title="Business Card Preview"
        style={{
          width: "448px",
          maxWidth: "90%",
          height: "700px",
          margin: "0 auto",
          display: "block",
          border: "none",
          backgroundColor: "#e5e5e3"
        }}
      />
    </div>
  );
});

HighLevelCardPreview.displayName = "HighLevelCardPreview";
