import { Button } from "@/components/ui/button";
import { BusinessCardData } from "@/components/BusinessCardForm";

interface SavedCardActionsProps {
  embedCode: string;
  cardData: BusinessCardData;
  onCopyEmbed: (embedCode: string) => void;
  onEdit: (cardData: BusinessCardData) => void;
}

export const SavedCardActions = ({
  embedCode,
  cardData,
  onCopyEmbed,
  onEdit,
}: SavedCardActionsProps) => {
  return (
    <div className="flex gap-4">
      <Button 
        onClick={() => onCopyEmbed(embedCode)}
        variant="secondary"
      >
        Copy Embed Code
      </Button>
      <Button
        onClick={() => onEdit(cardData)}
        variant="outline"
      >
        Edit Card
      </Button>
    </div>
  );
};