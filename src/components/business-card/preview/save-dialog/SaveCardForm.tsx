import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SaveCardFormProps {
  clientName: string;
  setClientName: (name: string) => void;
  cardName: string;
  setCardName: (name: string) => void;
  isEditing: boolean;
  clientId: string;
}

export const SaveCardForm = ({
  clientName,
  setClientName,
  cardName,
  setCardName,
  isEditing,
  clientId
}: SaveCardFormProps) => {
  return (
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
      {isEditing && (
        <div className="text-sm text-muted-foreground">
          Client ID: {clientId}
        </div>
      )}
    </div>
  );
};