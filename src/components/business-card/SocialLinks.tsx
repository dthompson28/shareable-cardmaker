import { Facebook, Instagram, Linkedin, Youtube, Twitter, Phone } from "lucide-react";
import { BusinessCardData } from "../BusinessCardForm";
import { memo } from "react";

interface SocialLinksProps {
  data: BusinessCardData;
}

type IconType = typeof Facebook | typeof Instagram | typeof Linkedin | typeof Youtube | typeof Twitter | typeof Phone;

const socialIcons: Record<string, IconType> = {
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  twitter: Twitter,
  whatsapp: Phone,
  tiktok: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  ),
};

export const SocialLinks = memo(({ data }: SocialLinksProps) => {
  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {Object.entries(data.social)
        .filter(([key, value]) => key !== 'additionalLinks' && value)
        .map(([key, value]) => {
          const IconComponent = socialIcons[key];
          if (!IconComponent) return null;

          return (
            <a 
              key={key}
              href={value as string} 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: data.colors.primary }}
              onMouseEnter={(e) => e.currentTarget.style.color = data.colors.accent}
              onMouseLeave={(e) => e.currentTarget.style.color = data.colors.primary}
            >
              <IconComponent className="w-6 h-6" />
            </a>
          );
        })}
    </div>
  );
});

SocialLinks.displayName = "SocialLinks";