import { memo, useState, useEffect } from "react";
import { ContactSection } from "./business-card/form/ContactSection";
import { SocialSection } from "./business-card/form/SocialSection";
import { ColorSection } from "./business-card/form/ColorSection";
import { PhotoSection } from "./business-card/form/PhotoSection";
import { LogoSection } from "./business-card/form/LogoSection";
import { FormContainer } from "./business-card/form/FormContainer";
import { FormHeader } from "./business-card/form/FormHeader";
import { FontSection } from "./business-card/form/FontSection";
import { ClientIdSection } from "./business-card/form/ClientIdSection";
import { useBusinessCardForm } from "@/hooks/useBusinessCardForm";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";
import { sortGroupsAndLinks } from "@/utils/sortGroupsAndLinks";
import { BusinessCardData } from "@/types/businessCard";

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
    } else if (!data.id) {
      onChange({
        ...data,
        id: crypto.randomUUID(),
        social: {
          ...data.social,
          additionalLinks: [],
          linkGroups: []
        }
      });
    }
  }, [location.state, onChange, data]);

  const handleClearForm = () => {
    onClear();
  };

  const handleGenerateNewId = () => {
    const newId = crypto.randomUUID();
    onChange({
      ...data,
      id: newId
    });
    toast.success("New client ID generated");
  };

  const handleNext = () => {
    const sortedData = sortGroupsAndLinks(data);
    onChange(sortedData);
    onNext();
  };

  return (
    <div className="space-y-8">
      <FormHeader onClear={handleClearForm} />
      <ClientIdSection 
        clientId={data.id} 
        onGenerateNewId={handleGenerateNewId}
      />
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