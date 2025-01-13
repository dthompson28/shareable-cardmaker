import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { BusinessCardData } from "@/types/businessCard";
import { SaveCardForm } from "./save-dialog/SaveCardForm";
import { SaveCardActions } from "./save-dialog/SaveCardActions";
import { useSaveCard } from "./hooks/useSaveCard";
import { getSafeId } from "./utils/idUtils";

interface SaveCardDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: BusinessCardData;
  previewRef: React.RefObject<HTMLDivElement>;
}

export const SaveCardDialog = ({ open, onOpenChange, data, previewRef }: SaveCardDialogProps) => {
  const [clientName, setClientName] = useState("");
  const [cardName, setCardName] = useState("");
  const { handleSave, isSaving } = useSaveCard({ data, previewRef, onOpenChange });

  useEffect(() => {
    if (open) {
      const id = getSafeId(data.id);
      console.log("SaveCardDialog opened with clientId:", id);
      
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

  const safeId = getSafeId(data.id);
  console.log("Current safeId in SaveCardDialog:", safeId);

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
          onSave={() => handleSave(clientName, cardName)}
          isSaving={isSaving}
          isEditing={!!safeId}
        />
      </DialogContent>
    </Dialog>
  );
};