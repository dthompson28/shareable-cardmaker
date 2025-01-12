import { Button } from "@/components/ui/button";

interface SaveCardActionsProps {
  onCancel: () => void;
  onSave: () => void;
  isSaving: boolean;
}

export const SaveCardActions = ({ onCancel, onSave, isSaving }: SaveCardActionsProps) => {
  return (
    <div className="flex justify-end gap-4">
      <Button variant="outline" onClick={onCancel}>
        Cancel
      </Button>
      <Button onClick={onSave} disabled={isSaving}>
        {isSaving ? "Saving..." : "Save Card"}
      </Button>
    </div>
  );
};