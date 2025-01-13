import { Button } from "@/components/ui/button";

interface PreviewHeaderProps {
  onEdit: () => void;
  clientId?: string;
}

export const PreviewHeader = ({ onEdit, clientId }: PreviewHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-4">
      {clientId && (
        <p className="text-sm text-muted-foreground font-mono">
          Client ID: {clientId}
        </p>
      )}
      <Button onClick={onEdit} variant="outline">
        Edit Card
      </Button>
    </div>
  );
};