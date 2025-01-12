import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BusinessCardData } from "../../BusinessCardForm";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { generateEmbedCode } from "../embed/utils/generators/embedGenerator";
import { SaveCardForm } from "./save-dialog/SaveCardForm";
import { SaveCardActions } from "./save-dialog/SaveCardActions";
import { capturePreview } from "@/utils/previewCapture";
import { Json } from "@/integrations/supabase/types";

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

      const { error } = await supabase
        .from('business_cards')
        .insert({
          client_name: clientName,
          card_name: cardName,
          embed_code: embedCode,
          card_data: data as unknown as Json,
          preview_image: previewImage
        });

      if (error) throw error;

      toast.success("Business card saved successfully");
      onOpenChange(false);
    } catch (error) {
      console.error('Error saving business card:', error);
      toast.error("Failed to save business card");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save Business Card</DialogTitle>
        </DialogHeader>
        <SaveCardForm
          clientName={clientName}
          setClientName={setClientName}
          cardName={cardName}
          setCardName={setCardName}
        />
        <SaveCardActions
          onCancel={() => onOpenChange(false)}
          onSave={handleSave}
          isSaving={isSaving}
        />
      </DialogContent>
    </Dialog>
  );
};