import { memo } from "react";
import { BusinessCardData } from "../BusinessCardForm";
import { ContactInfo } from "./contact/ContactInfo";
import { CardHeader } from "./header/CardHeader";
import { PhotoDisplay } from "./photo/PhotoDisplay";
import { SocialLinks } from "./SocialLinks";
import { AdditionalLinks } from "./AdditionalLinks";
import { CardActions } from "./preview/CardActions";

interface CardPreviewProps {
  data: BusinessCardData;
}

export const CardPreview = memo(({ data }: CardPreviewProps) => {
  const hasAdditionalLinks = data.social.additionalLinks?.length > 0;
  const hasSocialLinks = Object.values(data.social).some(value => 
    typeof value === 'string' && value.length > 0
  );

  const getLogoPosition = () => {
    const { x = 50, y = 50 } = data.logoPosition || {};
    if (x === 0 && y === 0) return 'top-4 left-4';
    if (x === 100 && y === 0) return 'top-4 right-4';
    if (x === 0 && y === 100) return 'bottom-32 left-4';
    if (x === 100 && y === 100) return 'bottom-4 right-4';
    return 'top-4 right-4';
  };

  const isLogoBottomLeft = () => {
    const { x = 50, y = 50 } = data.logoPosition || {};
    return x === 0 && y === 100;
  };

  const renderLogo = () => {
    if (!data.logo) return null;
    return (
      <div 
        className={`absolute w-16 h-16 bg-contain bg-center bg-no-repeat ${getLogoPosition()}`}
        style={{ backgroundImage: `url(${data.logo})` }}
      />
    );
  };

  const renderSocialSection = () => {
    if (!hasSocialLinks && !hasAdditionalLinks) return null;
    return (
      <div className="space-y-4">
        <SocialLinks data={data} />
        <AdditionalLinks data={data} />
      </div>
    );
  };

  if (data.photoStyle === 'compact') {
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
          />
        </div>
      </div>
    );
  }

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
        />
      </div>
    </div>
  );
});

CardPreview.displayName = "CardPreview";