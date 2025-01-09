import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { BusinessCardData } from "../BusinessCardForm";

interface SocialLinksProps {
  data: BusinessCardData;
}

export const SocialLinks = ({ data }: SocialLinksProps) => {
  return (
    <div className="flex justify-center gap-4">
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
    </div>
  );
};