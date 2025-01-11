import { memo } from "react";
import { ContactSection } from "./business-card/form/ContactSection";
import { SocialSection } from "./business-card/form/SocialSection";
import { ColorSection } from "./business-card/form/ColorSection";
import { PhotoSection } from "./business-card/form/PhotoSection";
import { LogoSection } from "./business-card/form/LogoSection";
import { FormContainer } from "./business-card/form/FormContainer";
import { useBusinessCardForm } from "@/hooks/useBusinessCardForm";

export interface BusinessCardData {
  name: string;
  company: string;
  jobTitle: string;
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

export const BusinessCardForm = memo(({ data, onChange, onNext }: Props) => {
  const { handleChange } = useBusinessCardForm(data, onChange);

  return (
    <FormContainer data={data} onNext={onNext}>
      <PhotoSection data={data} onChange={handleChange} />
      <LogoSection data={data} onChange={handleChange} />
      <ContactSection data={data} onChange={handleChange} />
      <SocialSection data={data} onChange={handleChange} />
      <ColorSection data={data} onChange={handleChange} />
    </FormContainer>
  );
});

BusinessCardForm.displayName = "BusinessCardForm";