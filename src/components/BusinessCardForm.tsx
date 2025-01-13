import { memo, useState, useEffect } from "react";
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
import { toast } from "sonner";
import { sortGroupsAndLinks } from "@/utils/sortGroupsAndLinks";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
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

  useEffect(() => {
    const editData = location.state?.editData;
    if (editData) {
      console.log("Edit data received:", editData); // Debug log
      // When editing, preserve all data including the ID
      const processedData = sortGroupsAndLinks({
        ...editData,
        fonts: editData.fonts || { heading: 'Playfair Display', body: 'Open Sans' },
      });
      console.log("Processed data:", processedData); // Debug log
      onChange(processedData);
    } else if (!data.id) {
      // Only generate new ID if we're not editing and don't have an ID
      onChange({
        ...data,
        id: crypto.randomUUID()
      });
    }
  }, [location.state, onChange, data]);

  const handleClearForm = () => {
    if (isEditing) {
      toast.error("Cannot clear form while editing");
      return;
    }
    onClear();
    const newId = crypto.randomUUID();
    onChange({
      ...data,
      id: newId
    });
    toast.success("Form has been cleared");
  };

  const handleGenerateNewId = () => {
    if (isEditing) {
      toast.error("Cannot generate new ID while editing");
      return;
    }
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
      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <Label htmlFor="clientId">Client ID</Label>
            <Input
              id="clientId"
              value={data.id || ''}
              readOnly
              className="font-mono text-gray-900 bg-white border-gray-200"
            />
          </div>
          {!isEditing && (
            <Button 
              type="button"
              variant="outline"
              onClick={handleGenerateNewId}
              className="mt-6"
            >
              Generate New ID
            </Button>
          )}
        </div>
      </div>
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