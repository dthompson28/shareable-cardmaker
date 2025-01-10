import { Mail, Phone, Globe } from "lucide-react";
import { BusinessCardData } from "../../BusinessCardForm";

interface ContactInfoProps {
  data: BusinessCardData;
}

export const ContactInfo = ({ data }: ContactInfoProps) => {
  return (
    <div className="space-y-4">
      {data.phone && (
        <a href={`tel:${data.phone}`} className="flex items-center gap-3 hover:opacity-75 transition-colors">
          <Phone className="w-6 h-6" style={{ color: data.colors.primary }} />
          <span className="text-lg" style={{ color: data.colors.primary }}>{data.phone}</span>
        </a>
      )}
      
      {data.email && (
        <a href={`mailto:${data.email}`} className="flex items-center gap-3 hover:opacity-75 transition-colors">
          <Mail className="w-6 h-6" style={{ color: data.colors.primary }} />
          <span className="text-lg" style={{ color: data.colors.primary }}>{data.email}</span>
        </a>
      )}
      
      {data.website && (
        <a href={data.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-75 transition-colors">
          <Globe className="w-6 h-6" style={{ color: data.colors.primary }} />
          <span className="text-lg" style={{ color: data.colors.primary }}>{data.website}</span>
        </a>
      )}
    </div>
  );
};