import { memo } from "react";
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
import { useFormInitialization } from "./business-card/form/useFormInitialization";
import { useNewCard } from "./business-card/form/useNewCard";
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
  const isEditing = !!location.state?.editData;

  useFormInitialization(data, onChange, location.state?.editData);

  const { handleNewCard, handleGenerateNewId } = useNewCard({
    data,
    isEditing,
    onClear,
    onChange
  });

  const handleNext = () => {
    const sortedData = sortGroupsAndLinks(data);
    onChange(sortedData);
    onNext();
  };

  return (
    <div className="space-y-8">
      <FormHeader onNewCard={handleNewCard} />
      <ClientIdSection 
        clientId={data.id || ''} 
        isEditing={isEditing}
        onGenerateNewId={handleGenerateNewId}
      />
      <FormContainer data={data} onNext={handleNext}>
        <FontSection data={data} onChange={handleChange} />
        <PhotoSection data={data} onChange={handleChange} />
        <LogoSection data={data} onChange={handleChange} />
        <ContactSection 
          data={data} 
          onChange={handleChange}
          isEditing={isEditing}
        />
        <SocialSection data={data} onChange={handleChange} />
        <ColorSection data={data} onChange={handleChange} />
      </FormContainer>
    </div>
  );
});

BusinessCardForm.displayName = "BusinessCardForm";