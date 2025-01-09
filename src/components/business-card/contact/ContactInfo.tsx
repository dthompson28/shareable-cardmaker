import { Mail, Phone, Globe } from "lucide-react";
import { BusinessCardData } from "../../BusinessCardForm";

interface ContactInfoProps {
  data: BusinessCardData;
}

export const ContactInfo = ({ data }: ContactInfoProps) => {
  return (
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
  );
};