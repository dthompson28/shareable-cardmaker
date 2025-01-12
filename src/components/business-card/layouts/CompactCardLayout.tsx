import { BusinessCardData } from "@/components/BusinessCardForm";
import { ContactInfo } from "../contact/ContactInfo";
import { SocialLinks } from "../SocialLinks";
import { AdditionalLinks } from "../AdditionalLinks";

interface CompactCardLayoutProps {
  data: BusinessCardData;
  selectedSection: string | null;
  onSectionClick: (section: string) => void;
}

export const CompactCardLayout = ({ data, selectedSection, onSectionClick }: CompactCardLayoutProps) => {
  const renderLogo = () => {
    if (!data.logo) return null;
    return (
      <div 
        className="absolute top-4 right-4 w-16 h-16 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${data.logo})` }}
        data-section="header"
        onClick={() => onSectionClick('header')}
      />
    );
  };

  return (
    <div className="relative w-full h-full flex flex-col">
      <div 
        className={`header section-highlight relative h-48 bg-cover bg-center ${selectedSection === 'header' ? 'section-selected' : ''}`}
        style={{ backgroundImage: `url(${data.photo})` }}
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