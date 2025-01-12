import { Button } from "@/components/ui/button";
import { BusinessCardData } from "@/components/BusinessCardForm";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface SavedCardActionsProps {
  embedCode: string;
  cardData: BusinessCardData;
  onCopyEmbed: (embedCode: string) => void;
  onEdit: (cardData: BusinessCardData) => void;
  onDelete: () => void;
}

export const SavedCardActions = ({
  embedCode,
  cardData,
  onCopyEmbed,
  onEdit,
  onDelete,
}: SavedCardActionsProps) => {
  const handleCopyEmbed = (code: string) => {
    onCopyEmbed(code);
    toast.success("Embed code copied to clipboard!");
  };

  return (
    <div className="flex gap-4">
      <Button 
        onClick={() => handleCopyEmbed(embedCode)}
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
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">
            Delete Card
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your business card.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};