import { Button } from "@/components/ui/button";

interface PreviewHeaderProps {
  onEdit: () => void;
  clientId?: string;
}

export const PreviewHeader = ({ onEdit, clientId }: PreviewHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">Preview Your Card</h2>
        {clientId && (
          <p className="text-sm text-muted-foreground font-mono">
            Client ID: {clientId}
          </p>
        )}
      </div>
      <Button onClick={onEdit} variant="outline">
        Edit Card
      </Button>
    </div>
  );
};