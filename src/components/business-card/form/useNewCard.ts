import { BusinessCardData } from "@/types/businessCard";
import { toast } from "sonner";

interface UseNewCardProps {
  data: BusinessCardData;
  isEditing: boolean;
  onClear: () => void;
  onChange: (data: BusinessCardData) => void;
}

export const useNewCard = ({
  data,
  isEditing,
  onClear,
  onChange
}: UseNewCardProps) => {
  const handleNewCard = () => {
    if (isEditing) {
      // Don't clear when editing
      return;
    }
    onClear();
    // Generate new ID for new card
    const newId = crypto.randomUUID();
    console.log("Generated new ID for new card:", newId);
    onChange({
      ...data,
      id: newId
    });
  };

  const handleGenerateNewId = () => {
    if (isEditing) {
      toast.error("Cannot generate new ID while editing");
      return;
    }
    const newId = crypto.randomUUID();
    console.log("Manually generating new ID:", newId);
    onChange({
      ...data,
      id: newId
    });
    toast.success("Generated new client ID");
  };

  return {
    handleNewCard,
    handleGenerateNewId
  };
};