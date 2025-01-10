import { BusinessCardData } from "../../BusinessCardForm";
import { CardActions } from "../preview/CardActions";
import { CardHeader } from "../header/CardHeader";
import { ContactInfo } from "../contact/ContactInfo";
import { SocialLinks } from "../SocialLinks";
import { AdditionalLinks } from "../AdditionalLinks";

interface FullCardLayoutProps {
  data: BusinessCardData;
  hasSocialLinks: boolean;
  hasAdditionalLinks: boolean;
  renderLogo: () => React.ReactNode;
}

export const FullCardLayout = ({
  data,
  hasSocialLinks,
  hasAdditionalLinks,
  renderLogo,
}: FullCardLayoutProps) => {
  return (
    <div 
      className="w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-xl relative transition-all duration-300" 
      style={{ 
        minHeight: '500px',
        backgroundColor: data.colors.background 
      }}
    >
      <div className="relative">
        {data.photo && (
          <div 
            className="w-full h-64 bg-cover bg-center relative"
            style={{ 
              backgroundImage: `url(${data.photo})`,
              backgroundPosition: `${data.photoPosition?.x || 50}% ${data.photoPosition?.y || 50}%`
            }}
          >
            <div className="absolute inset-0 bg-black/30" />
            <CardHeader data={data} />
          </div>
        )}
        {renderLogo()}
      </div>
      <div className="p-6 space-y-6">
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