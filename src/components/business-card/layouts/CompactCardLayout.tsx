import { BusinessCardData } from "@/types/businessCard";
import { ContactInfo } from "../contact/ContactInfo";
import { SocialLinks } from "../SocialLinks";
import { AdditionalLinks } from "../AdditionalLinks";
import { CardHeader } from "../header/CardHeader";
import { CardActions } from "../preview/CardActions";

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
    <div className="business-card">
      <div 
        className="header"
        style={{ backgroundColor: data.colors.secondary }}
      >
        {data.photo && (
          <div 
            className="contact-photo"
            style={{ 
              backgroundImage: `url(${data.photo})`,
              backgroundPosition: `${data.photoPosition?.x || 50}% ${data.photoPosition?.y || 50}%`,
              borderColor: data.colors.background
            }}
          />
        )}
        {data.logo && (
          <div 
            className="logo"
            style={{ 
              backgroundImage: `url(${data.logo})`
            }}
          />
        )}
      </div>

      <div 
        className="content"
        style={{ backgroundColor: data.colors.background }}
      >
        <div 
          className="name"
          style={{ 
            color: data.colors.primary,
            fontFamily: data.fonts.heading
          }}
        >
          {data.name}
        </div>
        {data.jobTitle && (
          <div 
            className="title"
            style={{ 
              color: data.colors.secondary,
              fontFamily: data.fonts.heading
            }}
          >
            {data.jobTitle}
          </div>
        )}
        {data.company && (
          <div 
            className="company"
            style={{ 
              color: data.colors.accent,
              fontFamily: data.fonts.heading
            }}
          >
            {data.company}
          </div>
        )}

        <ContactInfo data={data} />
        <SocialLinks data={data} />
        <AdditionalLinks data={data} />
        <CardActions data={data} />
      </div>
    </div>
  );
};