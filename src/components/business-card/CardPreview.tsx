import { BusinessCardData } from "../BusinessCardForm";
import { ContactInfo } from "./contact/ContactInfo";
import { CardHeader } from "./header/CardHeader";
import { PhotoDisplay } from "./photo/PhotoDisplay";
import { SocialLinks } from "./SocialLinks";
import { AdditionalLinks } from "./AdditionalLinks";
import { Button } from "@/components/ui/button";
import { Download, Share2 } from "lucide-react";

interface CardPreviewProps {
  data: BusinessCardData;
}

export const CardPreview = ({ data }: CardPreviewProps) => {
  return (
    <div 
      className="max-w-md mx-auto rounded-xl overflow-hidden shadow-xl relative bg-white"
      style={{ backgroundColor: data.colors.background }}
    >
      <div className="relative">
        <PhotoDisplay data={data} />
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
        <ContactInfo data={data} />
        <SocialLinks data={data} />
        <AdditionalLinks data={data} />
        
        <div className="flex gap-4 mt-6">
          <Button 
            className="flex-1"
            style={{ 
              backgroundColor: data.colors.primary,
              color: 'white'
            }}
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button
            className="flex-1"
            variant="outline"
            style={{ 
              borderColor: data.colors.primary,
              color: data.colors.primary
            }}
          >
            <Download className="w-4 h-4 mr-2" />
            Save Contact
          </Button>
        </div>
      </div>
    </div>
  );
};