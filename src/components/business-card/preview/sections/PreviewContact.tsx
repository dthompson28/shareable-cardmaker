import { BusinessCardData } from "@/types/businessCard";
import { generateContactLinks } from '../generators/ContactLinksGenerator';

interface PreviewContactProps {
  data: BusinessCardData;
  selectedSection: string | null;
}

export const PreviewContact = ({ data, selectedSection }: PreviewContactProps) => {
  return (
    <div 
      className={`contact-info section-highlight ${selectedSection === 'contact' ? 'section-selected' : ''}`}
      data-section="contact" 
      onClick={() => window.parent.postMessage({ type: 'sectionClick', section: 'contact' }, '*')}
      dangerouslySetInnerHTML={{ __html: generateContactLinks(data) }}
    />
  );
};