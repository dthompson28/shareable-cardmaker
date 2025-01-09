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
      className="max-w-md mx-auto rounded-xl overflow-hidden shadow-xl relative"
      style={{ 
        backgroundColor: "#1A1F2C", // Dark Purple background
        color: "#9b87f5" // Primary Purple for text
      }}
    >
      <div className="relative">
        <PhotoDisplay data={data} />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C] to-transparent"
          style={{ opacity: 0.8 }}
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
        
        <div style={{ color: "#7E69AB" }}> {/* Secondary Purple for contact info */}
          <ContactInfo data={data} />
        </div>
        
        <div style={{ color: "#6E59A5" }}> {/* Tertiary Purple for social links */}
          <SocialLinks data={data} />
        </div>
        
        <div style={{ color: "#7E69AB" }}> {/* Secondary Purple for additional links */}
          <AdditionalLinks data={data} />
        </div>
        
        <div className="flex gap-4 mt-6">
          <Button 
            className="flex-1"
            style={{ 
              backgroundColor: "#9b87f5", // Primary Purple
              color: '#1A1F2C' // Dark Purple
            }}
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button
            className="flex-1"
            variant="outline"
            style={{ 
              borderColor: "#6E59A5", // Tertiary Purple
              color: "#9b87f5" // Primary Purple
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