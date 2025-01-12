import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface SaveCardFormProps {
  clientName: string;
  setClientName: (value: string) => void;
  cardName: string;
  setCardName: (value: string) => void;
}

export const SaveCardForm = ({ 
  clientName, 
  setClientName, 
  cardName, 
  setCardName 
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
    </div>
  );
};