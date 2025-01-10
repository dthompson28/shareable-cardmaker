import { Mail, Phone, Globe } from "lucide-react";
import { BusinessCardData } from "../../BusinessCardForm";

interface ContactInfoProps {
  data: BusinessCardData;
}

export const ContactInfo = ({ data }: ContactInfoProps) => {
  return (
    <div className="space-y-4">
      {data.phone && (
        <a 
          href={`tel:${data.phone}`} 
          className="flex items-center gap-3 text-gray-600 hover:text-[#326872] transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span>{data.phone}</span>
        </a>
      )}
      
      {data.email && (
        <a 
          href={`mailto:${data.email}`} 
          className="flex items-center gap-3 text-gray-600 hover:text-[#326872] transition-colors"
        >
          <Mail className="w-5 h-5" />
          <span>{data.email}</span>
        </a>
      )}
      
      {data.website && (
        <a 
          href={data.website} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 text-gray-600 hover:text-[#326872] transition-colors"
        >
          <Globe className="w-5 h-5" />
          <span>Schedule a Call</span>
        </a>
      )}
    </div>
  );
};