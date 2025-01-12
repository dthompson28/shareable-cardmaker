import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BusinessCardData } from "../../BusinessCardForm";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { generateEmbedCode } from "../embed/utils/generators/embedGenerator";
import html2canvas from "html2canvas";
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
      // Generate embed code
      const embedCode = generateEmbedCode(data);

      // Capture preview image
      const canvas = await html2canvas(previewRef.current);
      const previewImage = canvas.toDataURL('image/jpeg');

      // Save to Supabase
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
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="clientName">Client Name</Label>
            <Input
              id="clientName"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Enter client name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cardName">Card Name</Label>
            <Input
              id="cardName"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="Enter card name"
            />
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={isSaving}>
            {isSaving ? "Saving..." : "Save Card"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};