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
  return (
    <div 
      className="max-w-md mx-auto rounded-xl overflow-hidden shadow-xl relative"
      style={{ 
        backgroundColor: data.colors.background,
        color: data.colors.primary
      }}
    >
      <div className="relative">
        <PhotoDisplay data={data} />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-current to-transparent"
          style={{ 
            opacity: 0.8,
            '--tw-gradient-from': data.colors.background
          } as React.CSSProperties}
        />
        <CardHeader data={data} />
      </div>
      
      <div className={`p-6 space-y-6 ${data.photoStyle === 'compact' ? 'mt-16' : ''}`}>
        {data.logo && (
          <div 
            className="absolute top-4 right-4 w-16 h-16 bg-contain bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${data.logo})`,
              backgroundPosition: `${data.logoPosition?.x || 50}% ${data.logoPosition?.y || 50}%`
            }}
          />
        )}
        
        <div style={{ color: data.colors.secondary }}>
          <ContactInfo data={data} />
        </div>
        
        <div style={{ color: data.colors.accent }}>
          <SocialLinks data={data} />
        </div>
        
        <div style={{ color: data.colors.secondary }}>
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