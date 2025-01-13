import { BusinessCardData } from "@/types/businessCard";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

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
    generateNewId();
  };

  const generateNewId = async () => {
    const newId = crypto.randomUUID();
    console.log("Generated new ID:", newId);

    // Check if ID already exists in database
    const { data: existingCard } = await supabase
      .from('business_cards')
      .select('id')
      .eq('id', newId)
      .maybeSingle();

    if (existingCard) {
      console.log("ID collision detected, generating new ID");
      generateNewId(); // Recursively try again
      return;
    }

    onChange({
      ...data,
      id: newId
    });
    toast.success("Generated new client ID");
  };

  const handleGenerateNewId = async () => {
    if (isEditing) {
      toast.error("Cannot generate new ID while editing");
      return;
    }
    await generateNewId();
  };

  return {
    handleNewCard,
    handleGenerateNewId
  };
};