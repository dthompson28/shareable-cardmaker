import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { BusinessCardData } from "@/types/businessCard";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { generateEmbedCode } from "../embed/utils/generators/embedGenerator";
import { SaveCardForm } from "./save-dialog/SaveCardForm";
import { SaveCardActions } from "./save-dialog/SaveCardActions";
import { capturePreview } from "@/utils/previewCapture";
import { Json } from "@/integrations/supabase/types";
import { useNavigate } from "react-router-dom";

interface SaveCardDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: BusinessCardData;
  previewRef: React.RefObject<HTMLDivElement>;
}

export const SaveCardDialog = ({ open, onOpenChange, data, previewRef }: SaveCardDialogProps) => {
  const [clientName, setClientName] = useState("");
  const [cardName, setCardName] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      // Clean up the ID if it's an object
      const id = data?.id ? 
        (typeof data.id === 'object' ? data.id?.value : data.id) 
        : undefined;
      
      if (id) {
        // Editing existing card - use existing data
        setClientName(data.name);
        setCardName(data.company);
      } else {
        // New card - auto populate from form data
        const formattedClientName = `${data.name || ""} - ${data.company || ""}`.trim();
        setClientName(formattedClientName);
        setCardName("");
      }
    }
  }, [data.id, data.name, data.company, open]);

  const handleSave = async () => {
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
      
      // Clean up the ID if it's an object
      const id = data?.id ? 
        (typeof data.id === 'object' ? data.id?.value : data.id) 
        : undefined;

      const cardData = {
        client_name: clientName,
        card_name: cardName,
        embed_code: embedCode,
        card_data: data as unknown as Json,
        preview_image: previewImage
      };

      let error;

      if (id) {
        console.log("Updating existing card with ID:", id);
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
        console.log("Creating new card");
        const { error: insertError } = await supabase
          .from('business_cards')
          .insert(cardData);
        error = insertError;
        if (!error) {
          toast.success("Business card saved successfully");
          navigate('/saved-cards');
        }
      }

      if (error) throw error;
      onOpenChange(false);
    } catch (error) {
      console.error('Error saving business card:', error);
      toast.error("Failed to save business card");
    } finally {
      setIsSaving(false);
    }
  };

  // Create a safe ID value that handles all edge cases
  const safeId = data?.id ? 
    (typeof data.id === 'object' ? data.id?.value : data.id) 
    : undefined;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {safeId ? (
              <>Update Business Card (ID: {safeId})</>
            ) : (
              <>Save Business Card</>
            )}
          </DialogTitle>
          <DialogDescription>
            {safeId ? 
              "Update the existing business card with your changes." :
              "Save your business card with a name and client information."
            }
          </DialogDescription>
        </DialogHeader>
        <SaveCardForm
          clientName={clientName}
          setClientName={setClientName}
          cardName={cardName}
          setCardName={setCardName}
          isEditing={!!safeId}
          clientId={safeId || ''}
        />
        <SaveCardActions
          onCancel={() => onOpenChange(false)}
          onSave={handleSave}
          isSaving={isSaving}
          isEditing={!!safeId}
        />
      </DialogContent>
    </Dialog>
  );
};