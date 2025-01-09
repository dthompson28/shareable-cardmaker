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
                className="absolute top-4 right-4 w-16 h-16 bg-contain bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: `url(${data.logo})`,
                  backgroundPosition: `${data.logoPosition?.x || 50}% ${data.logoPosition?.y || 50}%`
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
          <div 
            className="relative h-40 w-full"
            style={{ backgroundColor: data.colors.primary }}
          >
            <div className="absolute left-6 -bottom-16">
              <PhotoDisplay data={data} />
            </div>
            {data.logo && (
              <div 
                className="absolute top-4 right-4 w-16 h-16 bg-contain bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: `url(${data.logo})`,
                  backgroundPosition: `${data.logoPosition?.x || 50}% ${data.logoPosition?.y || 50}%`
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