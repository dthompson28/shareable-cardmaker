import { BusinessCardData } from "../../BusinessCardForm";
import { CardHeader } from "../header/CardHeader";
import { ContactInfo } from "../contact/ContactInfo";
import { SocialLinks } from "../SocialLinks";
import { AdditionalLinks } from "../AdditionalLinks";
import { CardActions } from "../preview/CardActions";
import { PhotoDisplay } from "../photo/PhotoDisplay";

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
  const renderSocialSection = () => {
    if (!hasSocialLinks && !hasAdditionalLinks) return null;
    return (
      <div className="space-y-4">
        <SocialLinks data={data} />
        <AdditionalLinks data={data} />
      </div>
    );
  };

  return (
    <div 
      className="w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-xl relative transition-all duration-300" 
      style={{ 
        minHeight: '500px',
        backgroundColor: data.colors.background 
      }}
    >
      <div className="relative">
        <PhotoDisplay data={data} />
        {renderLogo()}
        <CardHeader data={data} />
      </div>
      <div className="p-6 space-y-6">
        <ContactInfo data={data} />
        {renderSocialSection()}
        <CardActions 
          primaryColor={data.colors.primary}
          backgroundColor={data.colors.background}
          tertiaryColor={data.colors.accent}
          data={data}
        />
      </div>
    </div>
  );
};