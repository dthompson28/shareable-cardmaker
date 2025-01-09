import { Facebook, Instagram, Linkedin, Youtube, Twitter, Phone } from "lucide-react";
import { BusinessCardData } from "../BusinessCardForm";
import { SocialMediaInput } from "./social/SocialMediaInput";
import { AdditionalLinksSection } from "./social/AdditionalLinksSection";
import { TikTokIcon } from "./social/TikTokIcon";

interface SocialSectionProps {
  data: BusinessCardData;
  onChange: (field: string, value: string | any) => void;
}

export const SocialSection = ({ data, onChange }: SocialSectionProps) => {
  const socialPlatforms = [
    { id: "linkedin", label: "LinkedIn URL", icon: Linkedin, value: data.social.linkedin },
    { id: "facebook", label: "Facebook URL", icon: Facebook, value: data.social.facebook },
    { id: "instagram", label: "Instagram URL", icon: Instagram, value: data.social.instagram },
    { id: "youtube", label: "YouTube URL", icon: Youtube, value: data.social.youtube },
    { id: "twitter", label: "X (Twitter) URL", icon: Twitter, value: data.social.twitter },
    { id: "tiktok", label: "TikTok URL", icon: TikTokIcon, value: data.social.tiktok },
    { id: "whatsapp", label: "WhatsApp URL", icon: Phone, value: data.social.whatsapp },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Social Media</h2>
      <div className="grid gap-4">
        {socialPlatforms.map((platform) => (
          <SocialMediaInput
            key={platform.id}
            id={platform.id}
            label={platform.label}
            Icon={platform.icon}
            value={platform.value}
            onChange={(value) => onChange(`social.${platform.id}`, value)}
          />
        ))}

        <AdditionalLinksSection
          links={data.social.additionalLinks || []}
          onChange={(links) => onChange("social.additionalLinks", links)}
        />
      </div>
    </div>
  );
};