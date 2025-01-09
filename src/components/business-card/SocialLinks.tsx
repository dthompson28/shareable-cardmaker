import { Facebook, Instagram, Linkedin, Youtube, Twitter, Phone } from "lucide-react";
import { BusinessCardData } from "../BusinessCardForm";

interface SocialLinksProps {
  data: BusinessCardData;
}

export const SocialLinks = ({ data }: SocialLinksProps) => {
  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {data.social.linkedin && (
        <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 hover:opacity-75" style={{ color: data.colors.primary }} />
        </a>
      )}
      {data.social.facebook && (
        <a href={data.social.facebook} target="_blank" rel="noopener noreferrer">
          <Facebook className="w-6 h-6 hover:opacity-75" style={{ color: data.colors.primary }} />
        </a>
      )}
      {data.social.instagram && (
        <a href={data.social.instagram} target="_blank" rel="noopener noreferrer">
          <Instagram className="w-6 h-6 hover:opacity-75" style={{ color: data.colors.primary }} />
        </a>
      )}
      {data.social.youtube && (
        <a href={data.social.youtube} target="_blank" rel="noopener noreferrer">
          <Youtube className="w-6 h-6 hover:opacity-75" style={{ color: data.colors.primary }} />
        </a>
      )}
      {data.social.twitter && (
        <a href={data.social.twitter} target="_blank" rel="noopener noreferrer">
          <Twitter className="w-6 h-6 hover:opacity-75" style={{ color: data.colors.primary }} />
        </a>
      )}
      {data.social.tiktok && (
        <a href={data.social.tiktok} target="_blank" rel="noopener noreferrer">
          <svg className="w-6 h-6 hover:opacity-75" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: data.colors.primary }}>
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
          </svg>
        </a>
      )}
      {data.social.whatsapp && (
        <a href={data.social.whatsapp} target="_blank" rel="noopener noreferrer">
          <Phone className="w-6 h-6 hover:opacity-75" style={{ color: data.colors.primary }} />
        </a>
      )}
    </div>
  );
};