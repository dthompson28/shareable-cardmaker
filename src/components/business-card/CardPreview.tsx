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
      className="w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-xl relative transition-all duration-300"
      style={{ 
        backgroundColor: data.colors.background,
        color: data.colors.primary,
        minHeight: data.photoStyle === 'compact' ? '400px' : '500px',
      }}
    >
      <div 
        className={`relative ${data.photoStyle === 'compact' ? 'h-40' : ''}`}
        style={{ 
          backgroundColor: data.photoStyle === 'compact' ? data.colors.primary : 'transparent',
        }}
      >
        <PhotoDisplay data={data} />
        <CardHeader data={data} />
      </div>
      
      <div className={`p-6 space-y-6 ${hasAdditionalLinks || hasSocialLinks ? 'pb-8' : 'pb-6'}`}>
        {data.logo && (
          <div 
            className="absolute top-4 right-4 w-16 h-16 bg-contain bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${data.logo})`,
              backgroundPosition: `${data.logoPosition?.x || 50}% ${data.logoPosition?.y || 50}%`
            }}
          />
        )}
        
        <div className={`space-y-4 ${hasAdditionalLinks ? 'mb-8' : ''}`}>
          <ContactInfo data={data} />
          <SocialLinks data={data} />
          <AdditionalLinks data={data} />
        </div>
        
        <CardActions 
          primaryColor={data.colors.primary}
          backgroundColor={data.colors.background}
          tertiaryColor={data.colors.accent}
        />
      </div>
    </div>
  );
};