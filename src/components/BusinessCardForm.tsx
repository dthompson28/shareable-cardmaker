import { memo } from "react";
import { ContactSection } from "./business-card/form/ContactSection";
import { SocialSection } from "./business-card/form/SocialSection";
import { ColorSection } from "./business-card/form/ColorSection";
import { PhotoSection } from "./business-card/form/PhotoSection";
import { LogoSection } from "./business-card/form/LogoSection";
import { FormContainer } from "./business-card/form/FormContainer";
import { FormHeader } from "./business-card/form/FormHeader";
import { FontSection } from "./business-card/form/FontSection";
import { useBusinessCardForm } from "@/hooks/useBusinessCardForm";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "sonner";
import { sortGroupsAndLinks } from "@/utils/sortGroupsAndLinks";

export interface BusinessCardData {
  id?: string;
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
  address: string;
  fonts: {
    heading: string;
    body: string;
  };
  social: {
    linkedin: string;
    facebook: string;
    instagram: string;
    youtube: string;
    twitter: string;
    tiktok: string;
    whatsapp: string;
    additionalLinks?: { 
      title: string; 
      url: string;
      groupName?: string; 
      id?: string;
    }[];
    linkGroups?: {
      name: string;
      position: number;
      order: number;
    }[];
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
  onClear: () => void;
}

export const BusinessCardForm = memo(({ data, onChange, onNext, onClear }: Props) => {
  const { handleChange } = useBusinessCardForm(data, onChange);
  const location = useLocation();

  useEffect(() => {
    const editData = location.state?.editData;
    if (editData) {
      const processedData = sortGroupsAndLinks({
        ...editData,
        fonts: editData.fonts || { heading: 'Playfair Display', body: 'Open Sans' },
      });
      onChange(processedData);
    }
  }, [location.state, onChange]);

  const handleClearForm = () => {
    onClear();
    toast.success("Form has been cleared");
  };

  const handleNext = () => {
    // Sort groups and links before saving
    const sortedData = sortGroupsAndLinks(data);
    onChange(sortedData);
    onNext();
  };

  return (
    <div className="space-y-8">
      <FormHeader onClear={handleClearForm} />
      <FormContainer data={data} onNext={handleNext}>
        <FontSection data={data} onChange={handleChange} />
        <PhotoSection data={data} onChange={handleChange} />
        <LogoSection data={data} onChange={handleChange} />
        <ContactSection data={data} onChange={handleChange} />
        <SocialSection data={data} onChange={handleChange} />
        <ColorSection data={data} onChange={handleChange} />
      </FormContainer>
    </div>
  );
});

BusinessCardForm.displayName = "BusinessCardForm";
