import { Facebook, Instagram, Linkedin } from "lucide-react";
import { BusinessCardData } from "../BusinessCardForm";
import { memo } from "react";

interface SocialLinksProps {
  data: BusinessCardData;
}

export const SocialLinks = memo(({ data }: SocialLinksProps) => {
  return (
    <div className="flex justify-center gap-6">
      {data.social.facebook && (
        <a 
          href={data.social.facebook}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#326872] hover:text-[#00674f] transition-colors"
        >
          <Facebook className="w-6 h-6" />
        </a>
      )}
      
      {data.social.instagram && (
        <a 
          href={data.social.instagram}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#326872] hover:text-[#00674f] transition-colors"
        >
          <Instagram className="w-6 h-6" />
        </a>
      )}
      
      {data.social.linkedin && (
        <a 
          href={data.social.linkedin}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#326872] hover:text-[#00674f] transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </a>
      )}
    </div>
  );
});

SocialLinks.displayName = "SocialLinks";