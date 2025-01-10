import { BusinessCardData } from "../../BusinessCardForm";
import { CardHeader } from "../header/CardHeader";
import { ContactInfo } from "../contact/ContactInfo";
import { SocialLinks } from "../SocialLinks";
import { AdditionalLinks } from "../AdditionalLinks";
import { CardActions } from "../preview/CardActions";
import { isLogoBottomLeft } from "@/utils/positionUtils";

interface CompactCardLayoutProps {
  data: BusinessCardData;
  hasSocialLinks: boolean;
  hasAdditionalLinks: boolean;
  renderLogo: () => React.ReactNode;
}

export const CompactCardLayout = ({
  data,
  hasSocialLinks,
  hasAdditionalLinks,
  renderLogo,
}: CompactCardLayoutProps) => {
  return (
    <div 
      className="flex flex-col w-full max-w-[28rem] mx-auto rounded-xl overflow-hidden shadow-xl relative transition-all duration-300 bg-brand-background" 
      style={{ 
        minHeight: '500px',
      }}
    >
      <div 
        className="w-full h-48 relative bg-brand-primary"
      >
        <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-lg p-2">
          {renderLogo()}
        </div>
      </div>
      <div className="relative px-8">
        <div className="flex flex-col items-center -mt-16">
          <div 
            className="w-32 h-32 rounded-full bg-cover bg-center relative mb-4 border-4 border-white shadow-lg"
            style={{ 
              backgroundImage: `url(${data.photo})`,
              backgroundPosition: `${data.photoPosition?.x || 50}% ${data.photoPosition?.y || 50}%`,
              backgroundSize: 'cover'
            }}
          />
          <div className="w-full text-center">
            <CardHeader data={data} />
          </div>
        </div>
      </div>
      <div className="p-8 space-y-6">
        <ContactInfo data={data} />
        {(hasSocialLinks || hasAdditionalLinks) && (
          <div className="space-y-4">
            {hasSocialLinks && <SocialLinks data={data} />}
            {hasAdditionalLinks && <AdditionalLinks data={data} />}
          </div>
        )}
        <CardActions data={data} />
      </div>
    </div>
  );
};