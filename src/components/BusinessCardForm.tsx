import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { toast } from "sonner";

export interface BusinessCardData {
  name: string;
  company: string;
  phone: string;
  email: string;
  website: string;
  photo: string;
  address: string;
  social: {
    linkedin: string;
    facebook: string;
    instagram: string;
    youtube: string;
  };
  colors: {
    primary: string;
    secondary: string;
    background: string;
  };
}

interface Props {
  data: BusinessCardData;
  onChange: (data: BusinessCardData) => void;
  onNext: () => void;
}

export const BusinessCardForm = ({ data, onChange, onNext }: Props) => {
  const handleChange = (field: string, value: string) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      onChange({
        ...data,
        [parent]: {
          ...data[parent as keyof BusinessCardData],
          [child]: value,
        },
      });
    } else {
      onChange({
        ...data,
        [field]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.phone) {
      toast.error("Please fill in all required fields");
      return;
    }
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-fadeIn">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Contact Information</h2>
        
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="photo">Photo URL</Label>
            <Input
              id="photo"
              placeholder="https://example.com/photo.jpg"
              value={data.photo}
              onChange={(e) => handleChange("photo", e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              required
              value={data.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              value={data.company}
              onChange={(e) => handleChange("company", e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={data.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              required
              value={data.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              type="url"
              value={data.website}
              onChange={(e) => handleChange("website", e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="address">Business Address</Label>
            <Input
              id="address"
              value={data.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
          </div>
        </div>
      </div>

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
              onChange={(e) => handleChange("social.linkedin", e.target.value)}
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
              onChange={(e) => handleChange("social.facebook", e.target.value)}
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
              onChange={(e) => handleChange("social.instagram", e.target.value)}
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
              onChange={(e) => handleChange("social.youtube", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Card Colors</h2>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="primaryColor">Primary Color</Label>
            <Input
              id="primaryColor"
              type="color"
              value={data.colors.primary}
              onChange={(e) => handleChange("colors.primary", e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="secondaryColor">Secondary Color</Label>
            <Input
              id="secondaryColor"
              type="color"
              value={data.colors.secondary}
              onChange={(e) => handleChange("colors.secondary", e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="backgroundColor">Background Color</Label>
            <Input
              id="backgroundColor"
              type="color"
              value={data.colors.background}
              onChange={(e) => handleChange("colors.background", e.target.value)}
            />
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full">Next</Button>
    </form>
  );
};