import { Button } from "@/components/ui/button";

interface SaveCardActionsProps {
  onCancel: () => void;
  onSave: () => void;
  isSaving: boolean;
  isEditing?: boolean;
}

export const SaveCardActions = ({ onCancel, onSave, isSaving, isEditing }: SaveCardActionsProps) => {
  return (
    <div className="flex justify-end gap-4">
      <Button variant="outline" onClick={onCancel}>
        Cancel
      </Button>
      <Button onClick={onSave} disabled={isSaving}>
        {isSaving ? "Saving..." : isEditing ? "Update Card" : "Save Card"}
      </Button>
    </div>
  );
};