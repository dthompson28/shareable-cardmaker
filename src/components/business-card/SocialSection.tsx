import { BusinessCardData } from "@/types/businessCard";
import { SocialMediaInput } from "./social/SocialMediaInput";
import { AdditionalLinksSection } from "./social/AdditionalLinksSection";

import { socialPlatforms } from "./social/config/socialPlatforms";

interface SocialSectionProps {
  data: BusinessCardData;
  onChange: (field: string, value: string | any) => void;
}

export const SocialSection = ({ data, onChange }: SocialSectionProps) => {
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
            value={data.social[platform.id as keyof typeof data.social] as string}
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
