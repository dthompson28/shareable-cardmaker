import { BusinessCardData } from "@/types/businessCard";
import { toast } from "sonner";

export const useNewCard = (
  data: BusinessCardData,
  isEditing: boolean,
  onClear: () => void,
  onChange: (data: BusinessCardData) => void
) => {
  const handleNewCard = () => {
    if (isEditing) {
      toast.error("Cannot create new card while editing");
      return;
    }
    const newId = crypto.randomUUID();
    onClear();
    onChange({
      ...data,
      id: newId,
      colors: {
        primary: "#FFFFFF",
        secondary: "#FFFFFF",
        accent: "#FFFFFF",
        background: "#FFFFFF"
      },
      social: {
        ...data.social,
        additionalLinks: [],
        linkGroups: []
      }
    });
    toast.success("New card created");
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

  return {
    handleNewCard,
    handleGenerateNewId
  };
};