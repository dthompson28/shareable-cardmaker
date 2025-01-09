import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Facebook, Instagram, Linkedin, Youtube, Twitter, Phone } from "lucide-react";
import { BusinessCardData } from "../BusinessCardForm";

interface SocialSectionProps {
  data: BusinessCardData;
  onChange: (field: string, value: string | any) => void;
}

export const SocialSection = ({ data, onChange }: SocialSectionProps) => {
  const addLink = () => {
    const newLinks = [...(data.social.additionalLinks || []), { title: "", url: "" }];
    onChange("social.additionalLinks", newLinks);
  };

  const removeLink = (index: number) => {
    const newLinks = data.social.additionalLinks.filter((_, i) => i !== index);
    onChange("social.additionalLinks", newLinks);
  };

  const updateLink = (index: number, field: "title" | "url", value: string) => {
    const newLinks = [...data.social.additionalLinks];
    newLinks[index] = { ...newLinks[index], [field]: value };
    onChange("social.additionalLinks", newLinks);
  };

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

        <div className="grid gap-2">
          <Label htmlFor="twitter">
            <Twitter className="inline-block w-4 h-4 mr-2" />
            X (Twitter) URL
          </Label>
          <Input
            id="twitter"
            value={data.social.twitter}
            onChange={(e) => onChange("social.twitter", e.target.value)}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="tiktok">
            <svg className="inline-block w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
            TikTok URL
          </Label>
          <Input
            id="tiktok"
            value={data.social.tiktok}
            onChange={(e) => onChange("social.tiktok", e.target.value)}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="whatsapp">
            <Phone className="inline-block w-4 h-4 mr-2" />
            WhatsApp URL
          </Label>
          <Input
            id="whatsapp"
            value={data.social.whatsapp}
            onChange={(e) => onChange("social.whatsapp", e.target.value)}
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Additional Links</h3>
            <Button type="button" variant="outline" size="sm" onClick={addLink}>
              <Plus className="w-4 h-4 mr-2" />
              Add Link
            </Button>
          </div>
          
          {data.social.additionalLinks?.map((link, index) => (
            <div key={index} className="grid gap-4 p-4 border rounded-lg">
              <div className="grid gap-2">
                <Label htmlFor={`link-title-${index}`}>Link Title</Label>
                <Input
                  id={`link-title-${index}`}
                  value={link.title}
                  onChange={(e) => updateLink(index, "title", e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor={`link-url-${index}`}>Link URL</Label>
                <div className="flex gap-2">
                  <Input
                    id={`link-url-${index}`}
                    value={link.url}
                    onChange={(e) => updateLink(index, "url", e.target.value)}
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    onClick={() => removeLink(index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};