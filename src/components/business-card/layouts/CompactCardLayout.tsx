import { BusinessCardData } from "../../BusinessCardForm";
import { CardActions } from "../preview/CardActions";
import { CardHeader } from "../header/CardHeader";
import { ContactInfo } from "../contact/ContactInfo";
import { SocialLinks } from "../SocialLinks";
import { AdditionalLinks } from "../AdditionalLinks";

interface CompactCardLayoutProps {
  data: BusinessCardData;
  hasSocialLinks: boolean;
  hasAdditionalLinks: boolean;
  renderLogo: () => React.ReactNode;
  isLogoBottomLeft: () => boolean;
}

export const CompactCardLayout = ({
  data,
  hasSocialLinks,
  hasAdditionalLinks,
  renderLogo,
  isLogoBottomLeft,
}: CompactCardLayoutProps) => {
  return (
    <div 
      className="flex flex-col w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-xl relative transition-all duration-300" 
      style={{ 
        minHeight: '500px',
        backgroundColor: data.colors.background 
      }}
    >
      <div className="relative pt-6">
        <div className={`absolute ${isLogoBottomLeft() ? 'right-6' : 'left-6'}`}>
          <div 
            className="w-48 h-48 rounded-full bg-cover bg-center relative"
            style={{ 
              backgroundImage: `url(${data.photo})`,
              backgroundPosition: `${data.photoPosition?.x || 50}% ${data.photoPosition?.y || 50}%`,
              backgroundSize: 'cover'
            }}
          >
            <div className="absolute inset-0 bg-black/10 rounded-full" />
          </div>
        </div>
        {renderLogo()}
        <CardHeader data={data} />
      </div>
      <div className="mt-20 p-6 space-y-6">
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