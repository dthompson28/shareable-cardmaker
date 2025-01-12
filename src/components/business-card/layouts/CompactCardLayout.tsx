import { BusinessCardData } from "@/components/BusinessCardForm";
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
    <div 
      className="w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-xl relative transition-all duration-300" 
      style={{ backgroundColor: data.colors.background }}
    >
      <div className="relative h-48 bg-secondary">
        {renderLogo()}
        {data.photo && (
          <div className="absolute left-6 -bottom-24">
            <div 
              className="w-48 h-48 rounded-full bg-cover border-4 border-white shadow-xl" 
              style={{ 
                backgroundImage: `url(${data.photo})`,
                backgroundPosition: `${data.photoPosition?.x || 50}% ${data.photoPosition?.y || 50}%`,
                backgroundColor: 'white'
              }} 
            />
          </div>
        )}
      </div>

      <div className="pt-28 pb-6 px-6 space-y-6">
        <CardHeader data={data} />
        <ContactInfo data={data} />
        <div className="space-y-4">
          <SocialLinks data={data} />
          <AdditionalLinks data={data} />
        </div>
        <CardActions data={data} />
      </div>
    </div>
  );
};