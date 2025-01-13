import { BusinessCardData } from "@/types/businessCard";
import { getRootDomain } from "@/components/business-card/utils/urlUtils";

interface ContactInfoProps {
  data: BusinessCardData;
}

export const ContactInfo = ({ data }: ContactInfoProps) => {
  return (
    <div className="space-y-4">
      {data.phone && (
        <a href={`tel:${data.phone}`} className="flex items-center gap-3 hover:opacity-75 transition-colors">
          <svg 
            className="w-5 h-5" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{ color: data.colors.primary }}
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="text-base font-opensans" style={{ color: data.colors.primary }}>{data.phone}</span>
        </a>
      )}
      
      {data.email && (
        <a href={`mailto:${data.email}`} className="flex items-center gap-3 hover:opacity-75 transition-colors">
          <svg 
            className="w-5 h-5" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{ color: data.colors.primary }}
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <path d="m22 6-10 7L2 6" />
          </svg>
          <span className="text-base font-opensans" style={{ color: data.colors.primary }}>{data.email}</span>
        </a>
      )}
      
      {data.website && (
        <a href={data.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-75 transition-colors">
          <svg 
            className="w-5 h-5" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{ color: data.colors.primary }}
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <span className="text-base font-opensans" style={{ color: data.colors.primary }}>{getRootDomain(data.website)}</span>
        </a>
      )}
    </div>
  );
};
