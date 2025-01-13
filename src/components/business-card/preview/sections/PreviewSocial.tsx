import { BusinessCardData } from "@/types/businessCard";
import { generateSocialLinks } from '../generators/SocialLinksGenerator';

interface PreviewSocialProps {
  data: BusinessCardData;
  selectedSection: string | null;
}

export const PreviewSocial = ({ data, selectedSection }: PreviewSocialProps) => {
  return (
    <div 
      className={`section-highlight ${selectedSection === 'social' ? 'section-selected' : ''}`}
      data-section="social" 
      onClick={() => window.parent.postMessage({ type: 'sectionClick', section: 'social' }, '*')}
      dangerouslySetInnerHTML={{ __html: generateSocialLinks(data) }}
    />
  );
};