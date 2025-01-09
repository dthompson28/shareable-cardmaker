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
      className="max-w-md mx-auto rounded-xl overflow-hidden shadow-xl"
      style={{ backgroundColor: data.colors.background }}
    >
      <PhotoDisplay data={data} />
      
      <div className="p-6 space-y-6">
        <CardHeader data={data} />
        <ContactInfo data={data} />
        <SocialLinks data={data} />
        <AdditionalLinks data={data} />
      </div>
    </div>
  );
};