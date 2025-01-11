import { memo, useState } from 'react';
import { BusinessCardData } from "../../BusinessCardForm";
import { PreviewHeader } from './sections/PreviewHeader';
import { PreviewContact } from './sections/PreviewContact';
import { PreviewSocial } from './sections/PreviewSocial';
import { PreviewAdditional } from './sections/PreviewAdditional';
import { PreviewActions } from './sections/PreviewActions';
import { PreviewStyles } from './styles/PreviewStyles';

interface HighLevelPreviewProps {
  data: BusinessCardData;
}

type PreviewSection = 'header' | 'contact' | 'social' | 'additional' | 'actions' | null;

export const HighLevelPreview = memo(({ data }: HighLevelPreviewProps) => {
  const [selectedSection, setSelectedSection] = useState<PreviewSection>(null);

  const handleSectionClick = (section: PreviewSection) => {
    setSelectedSection(section);
    const businessCardSection = document.querySelector(`[data-section="${section}"]`);
    if (businessCardSection) {
      businessCardSection.classList.add('ring-2', 'ring-brand-primary');
      setTimeout(() => {
        businessCardSection.classList.remove('ring-2', 'ring-brand-primary');
      }, 2000);
    }
  };

  const iframeContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title>${data.name} - Digital Business Card</title>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
      </head>
      <body>
        <div class="business-card-wrapper">
          <div class="business-card">
            ${PreviewHeader({ data, selectedSection })}
            <div class="content">
              ${PreviewContact({ data, selectedSection })}
              ${PreviewSocial({ data, selectedSection })}
              ${PreviewAdditional({ data, selectedSection })}
              ${PreviewActions({ data, selectedSection })}
            </div>
          </div>
        </div>
        ${PreviewStyles({ data })}
      </body>
    </html>
  `;

  return (
    <div className="h-[500px] w-full flex items-center justify-center">
      <iframe
        srcDoc={iframeContent}
        className="w-[448px] h-[500px] border-0"
        title="HighLevel Preview"
        onLoad={() => {
          window.addEventListener('message', (event) => {
            if (event.data.type === 'sectionClick') {
              handleSectionClick(event.data.section);
            }
          });
        }}
      />
    </div>
  );
});

HighLevelPreview.displayName = "HighLevelPreview";