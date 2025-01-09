import { Phone, Mail, Globe } from "lucide-react";
import { BusinessCardData } from "../BusinessCardForm";
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
      {data.photo && (
        <div 
          className="w-full h-48 bg-cover" 
          style={{ 
            backgroundImage: `url(${data.photo})`,
            backgroundPosition: `${data.photoPosition.x}% ${data.photoPosition.y}%`
          }} 
        />
      )}
      
      <div className="p-6 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold" style={{ color: data.colors.primary }}>{data.name}</h1>
          {data.company && (
            <p className="text-lg" style={{ color: data.colors.secondary }}>{data.company}</p>
          )}
        </div>

        <div className="space-y-3">
          {data.phone && (
            <a href={`tel:${data.phone}`} className="flex items-center gap-2 hover:opacity-75">
              <Phone className="w-5 h-5" style={{ color: data.colors.primary }} />
              <span>{data.phone}</span>
            </a>
          )}
          
          {data.email && (
            <a href={`mailto:${data.email}`} className="flex items-center gap-2 hover:opacity-75">
              <Mail className="w-5 h-5" style={{ color: data.colors.primary }} />
              <span>{data.email}</span>
            </a>
          )}
          
          {data.website && (
            <a href={data.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-75">
              <Globe className="w-5 h-5" style={{ color: data.colors.primary }} />
              <span>{data.website}</span>
            </a>
          )}
        </div>

        <SocialLinks data={data} />
        <AdditionalLinks data={data} />
      </div>
    </div>
  );
};