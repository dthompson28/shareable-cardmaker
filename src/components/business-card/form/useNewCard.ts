import { BusinessCardData } from "@/types/businessCard";

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
  };

  const handleGenerateNewId = () => {
    if (isEditing) {
      return;
    }
    onChange({
      ...data,
      id: crypto.randomUUID()
    });
  };

  return {
    handleNewCard,
    handleGenerateNewId
  };
};