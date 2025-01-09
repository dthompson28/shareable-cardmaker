import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ContactSection } from "./business-card/ContactSection";
import { SocialSection } from "./business-card/SocialSection";
import { ColorSection } from "./business-card/ColorSection";
import { PhotoSection } from "./business-card/PhotoSection";
import { LogoSection } from "./business-card/LogoSection";

export interface BusinessCardData {
  name: string;
  company: string;
  phone: string;
  email: string;
  website: string;
  photo: string;
  photoStyle: 'full' | 'compact';
  photoPosition: {
    x: number;
    y: number;
  };
  logo: string;
  logoPosition: {
    x: number;
    y: number;
  };
  address: string;
  social: {
    linkedin: string;
    facebook: string;
    instagram: string;
    youtube: string;
    twitter: string;
    tiktok: string;
    whatsapp: string;
    additionalLinks?: { title: string; url: string; }[];
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
}

interface Props {
  data: BusinessCardData;
  onChange: (data: BusinessCardData) => void;
  onNext: () => void;
}

export const BusinessCardForm = ({ data, onChange, onNext }: Props) => {
  const handleChange = (field: string, value: string | any) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      const parentKey = parent as keyof BusinessCardData;
      const parentValue = data[parentKey];
      
      if (parentValue && typeof parentValue === 'object') {
        onChange({
          ...data,
          [parent]: {
            ...parentValue,
            [child]: value,
          },
        });
      }
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
      <PhotoSection data={data} onChange={handleChange} />
      <LogoSection data={data} onChange={handleChange} />
      <ContactSection data={data} onChange={handleChange} />
      <SocialSection data={data} onChange={handleChange} />
      <ColorSection data={data} onChange={handleChange} />
      <Button type="submit" className="w-full">Next</Button>
    </form>
  );
};