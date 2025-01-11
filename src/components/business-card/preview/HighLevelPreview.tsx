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
      
      // Add custom styles to match HighLevel display
      const customStyles = `
        <style>
          body {
            background-color: #e5e5e3;
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            font-family: 'Open Sans', sans-serif;
          }
          .business-card {
            background: white;
            max-width: 448px;
            width: 100%;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          .header {
            position: relative;
            width: 100%;
            height: 300px;
            background-size: cover;
            background-position: center;
          }
          .header-text {
            position: absolute;
            bottom: 20px;
            left: 20px;
            color: white;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          }
          .header-text h1 {
            font-size: 36px;
            margin: 0;
            font-family: 'Playfair Display', serif;
            font-weight: 700;
          }
          .header-text p {
            font-size: 24px;
            margin: 5px 0 0;
            font-family: 'Playfair Display', serif;
          }
          .content {
            padding: 24px;
          }
          .contact-link {
            display: flex;
            align-items: center;
            gap: 12px;
            color: #00674f;
            text-decoration: none;
            font-size: 18px;
            margin-bottom: 16px;
            padding: 8px;
            border-radius: 8px;
            transition: background-color 0.2s ease;
          }
          .social-links {
            display: flex;
            justify-content: center;
            gap: 24px;
            margin: 32px 0;
          }
          .social-icon {
            color: currentColor;
            width: 20px;
            height: 20px;
            flex-shrink: 0;
          }
          .additional-link {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #326872;
            text-decoration: none;
            font-size: 18px;
            margin-bottom: 16px;
          }
          .action-buttons {
            display: flex;
            gap: 16px;
            margin-top: 32px;
          }
          .action-button {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 12px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            border: none;
          }
          .share-button {
            color: white;
          }
          .save-button {
            background-color: transparent;
            color: #be5103;
            border: 2px solid #be5103;
          }
        </style>
      `;
      
      iframe.srcdoc = embedCode.replace('</head>', `${customStyles}</head>`);
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

HighLevelPreview.displayName = "HighLevelPreview";