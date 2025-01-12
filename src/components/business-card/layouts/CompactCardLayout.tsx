import { BusinessCardData } from "@/components/BusinessCardForm";
import { ContactInfo } from "../contact/ContactInfo";
import { SocialLinks } from "../SocialLinks";
import { AdditionalLinks } from "../AdditionalLinks";

interface CompactCardLayoutProps {
  data: BusinessCardData;
  selectedSection: string | null;
  onSectionClick: (section: string) => void;
  renderLogo: () => React.ReactNode;
}

export const CompactCardLayout = ({ 
  data, 
  selectedSection, 
  onSectionClick,
  renderLogo 
}: CompactCardLayoutProps) => {
  return (
    <div className="relative w-full h-full flex flex-col">
      <div 
        className={`header section-highlight relative h-48 bg-cover bg-center ${selectedSection === 'header' ? 'section-selected' : ''}`}
        style={{ 
          backgroundImage: `url(${data.photo})`,
          backgroundPosition: `${data.photoPosition?.x || 50}% ${data.photoPosition?.y || 50}%`
        }}
        data-section="header"
        onClick={() => onSectionClick('header')}
      >
        {renderLogo()}
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-2xl font-playfair">{data.name}</h1>
          {data.jobTitle && <p className="text-lg font-playfair">{data.jobTitle}</p>}
          {data.company && <p className="text-lg font-playfair">{data.company}</p>}
        </div>
      </div>

      <div className="content flex-1 p-6 space-y-6">
        <div 
          className={`section-highlight ${selectedSection === 'contact' ? 'section-selected' : ''}`}
          data-section="contact"
          onClick={() => onSectionClick('contact')}
        >
          <ContactInfo data={data} />
        </div>

        <div 
          className={`section-highlight ${selectedSection === 'social' ? 'section-selected' : ''}`}
          data-section="social"
          onClick={() => onSectionClick('social')}
        >
          <SocialLinks data={data} />
        </div>

        <div 
          className={`section-highlight ${selectedSection === 'additional' ? 'section-selected' : ''}`}
          data-section="additional"
          onClick={() => onSectionClick('additional')}
        >
          <AdditionalLinks data={data} />
        </div>
      </div>
    </div>
  );
};