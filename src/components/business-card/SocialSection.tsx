import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { BusinessCardData } from "../BusinessCardForm";

interface SocialSectionProps {
  data: BusinessCardData;
  onChange: (field: string, value: string) => void;
}

export const SocialSection = ({ data, onChange }: SocialSectionProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Social Media</h2>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="linkedin">
            <Linkedin className="inline-block w-4 h-4 mr-2" />
            LinkedIn URL
          </Label>
          <Input
            id="linkedin"
            value={data.social.linkedin}
            onChange={(e) => onChange("social.linkedin", e.target.value)}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="facebook">
            <Facebook className="inline-block w-4 h-4 mr-2" />
            Facebook URL
          </Label>
          <Input
            id="facebook"
            value={data.social.facebook}
            onChange={(e) => onChange("social.facebook", e.target.value)}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="instagram">
            <Instagram className="inline-block w-4 h-4 mr-2" />
            Instagram URL
          </Label>
          <Input
            id="instagram"
            value={data.social.instagram}
            onChange={(e) => onChange("social.instagram", e.target.value)}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="youtube">
            <Youtube className="inline-block w-4 h-4 mr-2" />
            YouTube URL
          </Label>
          <Input
            id="youtube"
            value={data.social.youtube}
            onChange={(e) => onChange("social.youtube", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};