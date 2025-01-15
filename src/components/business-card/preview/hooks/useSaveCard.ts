import { useState } from "react";
import { BusinessCardData } from "@/types/businessCard";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { generateEmbedCode } from "../../embed/utils/generators/embedGenerator";
import { capturePreview } from "@/utils/previewCapture";
import { Json } from "@/integrations/supabase/types";
import { useNavigate } from "react-router-dom";
import { getSafeId } from "../utils/idUtils";

interface UseSaveCardProps {
  data: BusinessCardData;
  previewRef: React.RefObject<HTMLDivElement>;
  onOpenChange: (open: boolean) => void;
}

export const useSaveCard = ({ data, previewRef, onOpenChange }: UseSaveCardProps) => {
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  const handleSave = async (clientName: string, cardName: string) => {
    if (!clientName || !cardName) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!previewRef.current) {
      toast.error("Preview element not found");
      return;
    }

    setIsSaving(true);

    try {
      const embedCode = generateEmbedCode(data);
      const previewImage = await capturePreview(previewRef.current);
      const id = getSafeId(data.id);

      // Log the data being saved for debugging
      console.log("Saving card data:", {
        id,
        clientName,
        cardName,
        data
      });

      const cardData = {
        client_name: clientName,
        card_name: cardName,
        embed_code: embedCode,
        card_data: data as unknown as Json,
        preview_image: previewImage
      };

      let error;

      if (id) {
        // Update existing card
        const { error: updateError } = await supabase
          .from('business_cards')
          .update(cardData)
          .eq('id', id);
        error = updateError;
        
        if (!error) {
          toast.success("Business card updated successfully");
          navigate('/saved-cards');
        }
      } else {
        // Insert new card
        const { error: insertError } = await supabase
          .from('business_cards')
          .insert({
            ...cardData,
            id: data.id // Use the generated ID from the form
          });
        error = insertError;
        
        if (!error) {
          toast.success("Business card saved successfully");
          navigate('/saved-cards');
        }
      }

      if (error) {
        console.error('Error saving card:', error);
        throw error;
      }
      
      onOpenChange(false);
    } catch (error) {
      console.error('Error saving business card:', error);
      toast.error("Failed to save business card");
    } finally {
      setIsSaving(false);
    }
  };

  return {
    handleSave,
    isSaving
  };
};