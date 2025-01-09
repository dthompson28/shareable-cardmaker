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

export const CardPreview = ({ data }: CardPreviewProps) => {
  const hasAdditionalLinks = data.social.additionalLinks && data.social.additionalLinks.length > 0;
  const hasSocialLinks = Object.values(data.social).some(value => 
    typeof value === 'string' && value.length > 0
  );

  const getLogoPosition = () => {
    const { x = 50, y = 50 } = data.logoPosition || {};
    if (x === 0 && y === 0) return 'top-4 left-4';
    if (x === 100 && y === 0) return 'top-4 right-4';
    if (x === 0 && y === 100) return 'bottom-24 left-4';
    if (x === 100 && y === 100) return 'bottom-4 right-4';
    return 'top-4 right-4'; // default position
  };

  return (
    <div 
      className="w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-xl relative transition-all duration-300 bg-white"
      style={{ 
        minHeight: data.photoStyle === 'compact' ? '400px' : '500px',
      }}
    >
      {data.photoStyle === 'full' ? (
        <>
          <div className="relative">
            <PhotoDisplay data={data} />
            <CardHeader data={data} />
          </div>
          <div className="p-6 space-y-6">
            {data.logo && (
              <div 
                className={`absolute w-16 h-16 bg-contain bg-center bg-no-repeat ${getLogoPosition()}`}
                style={{ 
                  backgroundImage: `url(${data.logo})`,
                }}
              />
            )}
            <ContactInfo data={data} />
            {(hasSocialLinks || hasAdditionalLinks) && (
              <div className="space-y-4">
                <SocialLinks data={data} />
                <AdditionalLinks data={data} />
              </div>
            )}
            <CardActions 
              primaryColor={data.colors.primary}
              backgroundColor={data.colors.background}
              tertiaryColor={data.colors.accent}
            />
          </div>
        </>
      ) : (
        <div className="flex flex-col">
          <div className="relative pt-6">
            <div className="absolute left-6">
              <PhotoDisplay data={data} />
            </div>
            {data.logo && (
              <div 
                className={`absolute w-16 h-16 bg-contain bg-center bg-no-repeat ${getLogoPosition()}`}
                style={{ 
                  backgroundImage: `url(${data.logo})`,
                }}
              />
            )}
          </div>
          <div className="mt-20 p-6 space-y-6">
            <CardHeader data={data} />
            <ContactInfo data={data} />
            {(hasSocialLinks || hasAdditionalLinks) && (
              <div className="space-y-4">
                <SocialLinks data={data} />
                <AdditionalLinks data={data} />
              </div>
            )}
            <CardActions 
              primaryColor={data.colors.primary}
              backgroundColor={data.colors.background}
              tertiaryColor={data.colors.accent}
            />
          </div>
        </div>
      )}
    </div>
  );
};