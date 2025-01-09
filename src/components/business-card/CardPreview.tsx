import { BusinessCardData } from "../BusinessCardForm";
import { ContactInfo } from "./contact/ContactInfo";
import { CardHeader } from "./header/CardHeader";
import { PhotoDisplay } from "./photo/PhotoDisplay";
import { SocialLinks } from "./SocialLinks";
import { AdditionalLinks } from "./AdditionalLinks";

interface CardPreviewProps {
  data: BusinessCardData;
}

export const CardPreview = ({ data }: CardPreviewProps) => {
  return (
    <div 
      className="max-w-md mx-auto rounded-xl overflow-hidden shadow-xl relative bg-white"
      style={{ backgroundColor: data.colors.background }}
    >
      <PhotoDisplay data={data} />
      
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
        <CardHeader data={data} />
        <ContactInfo data={data} />
        <SocialLinks data={data} />
        <AdditionalLinks data={data} />
      </div>
    </div>
  );
};