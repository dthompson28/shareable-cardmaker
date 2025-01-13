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
      <div className="header">
        {data.photo && (
          <div 
            className="contact-photo"
            style={{ 
              backgroundImage: `url(${data.photo})`,
              backgroundPosition: `${data.photoPosition?.x || 50}% ${data.photoPosition?.y || 50}%`
            }}
          />
        )}
        {renderLogo()}
      </div>

      <div className="content">
        <div className="name">{data.name}</div>
        {data.jobTitle && <div className="title">{data.jobTitle}</div>}
        {data.company && <div className="company">{data.company}</div>}

        <ContactInfo data={data} />
        <SocialLinks data={data} />
        <AdditionalLinks data={data} />
        <CardActions data={data} />
      </div>
    </div>
  );
};