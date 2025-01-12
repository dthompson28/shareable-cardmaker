import { memo } from "react";
import { ContactSection } from "./business-card/form/ContactSection";
import { SocialSection } from "./business-card/form/SocialSection";
import { ColorSection } from "./business-card/form/ColorSection";
import { PhotoSection } from "./business-card/form/PhotoSection";
import { LogoSection } from "./business-card/form/LogoSection";
import { FormContainer } from "./business-card/form/FormContainer";
import { useBusinessCardForm } from "@/hooks/useBusinessCardForm";
import { Button } from "./ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "sonner";

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
  onClear: () => void;
}

export const BusinessCardForm = memo(({ data, onChange, onNext, onClear }: Props) => {
  const { handleChange } = useBusinessCardForm(data, onChange);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const editData = location.state?.editData;
    if (editData) {
      onChange(editData);
    }
  }, [location.state, onChange]);

  const handleClearForm = () => {
    onClear();
    toast.success("Form has been cleared");
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between">
        <Button 
          variant="outline"
          onClick={handleClearForm}
        >
          Clear Form
        </Button>
        <Button 
          variant="outline"
          onClick={() => navigate('/saved-cards')}
        >
          View Saved Cards
        </Button>
      </div>
      <FormContainer data={data} onNext={onNext}>
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
