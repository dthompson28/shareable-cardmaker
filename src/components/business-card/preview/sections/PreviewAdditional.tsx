import { BusinessCardData } from "@/components/BusinessCardForm";
import { generateAdditionalLinks } from '../generators/AdditionalLinksGenerator';

interface PreviewAdditionalProps {
  data: BusinessCardData;
  selectedSection: string | null;
}

export const PreviewAdditional = ({ data, selectedSection }: PreviewAdditionalProps) => {
  return (
    <div 
      className={`section-highlight ${selectedSection === 'additional' ? 'section-selected' : ''}`}
      data-section="additional" 
      onClick={() => window.parent.postMessage({ type: 'sectionClick', section: 'additional' }, '*')}
      dangerouslySetInnerHTML={{ __html: generateAdditionalLinks(data) }}
    />
  );
};