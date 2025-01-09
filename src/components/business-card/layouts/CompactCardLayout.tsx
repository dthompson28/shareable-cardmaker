import { BusinessCardData } from "../../BusinessCardForm";
import { CardHeader } from "../header/CardHeader";
import { ContactInfo } from "../contact/ContactInfo";
import { SocialLinks } from "../SocialLinks";
import { AdditionalLinks } from "../AdditionalLinks";
import { CardActions } from "../preview/CardActions";
import { PhotoDisplay } from "../photo/PhotoDisplay";

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
      className="flex flex-col w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-xl relative transition-all duration-300" 
      style={{ 
        minHeight: '400px',
        backgroundColor: data.colors.background 
      }}
    >
      <div className="relative pt-6">
        <div className={`absolute ${isLogoBottomLeft() ? 'right-6' : 'left-6'}`}>
          <PhotoDisplay data={data} />
        </div>
        {renderLogo()}
      </div>
      <div className="mt-20 p-6 space-y-6">
        <CardHeader data={data} />
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