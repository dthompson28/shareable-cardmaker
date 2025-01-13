import { useEffect } from "react";
import { BusinessCardData } from "@/types/businessCard";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const useFormInitialization = (
  data: BusinessCardData,
  onChange: (data: BusinessCardData) => void,
  editData?: BusinessCardData
) => {
  useEffect(() => {
    const initializeForm = async () => {
      if (editData) {
        console.log("Initializing form with edit data:", editData);
        // When editing, preserve the existing ID
        onChange({
          ...editData,
          id: editData.id // Explicitly set the ID from editData
        });
      } else if (!data.id) {
        // Only generate new ID for new cards
        const newId = crypto.randomUUID();
        console.log("Generating initial clientId for new card:", newId);

        // Check if ID already exists in database
        const { data: existingCard } = await supabase
          .from('business_cards')
          .select('id')
          .eq('id', newId)
          .maybeSingle();

        if (existingCard) {
          console.log("ID collision detected, generating new ID");
          toast.error("Generated ID already exists. Generating new one...");
          return; // Let the form handle generating a new ID
        }

        onChange({
          ...data,
          id: newId
        });
      }
    };

    initializeForm();
  }, [editData, onChange, data.id]);
};