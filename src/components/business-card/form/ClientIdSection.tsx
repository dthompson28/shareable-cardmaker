import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface ClientIdSectionProps {
  clientId: string | undefined;
  onGenerateNewId: () => void;
}

export const ClientIdSection = ({ clientId, onGenerateNewId }: ClientIdSectionProps) => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <Label htmlFor="clientId">Client ID</Label>
          <Input
            id="clientId"
            value={clientId || ''}
            readOnly
            className="font-mono text-gray-900 bg-white border-gray-200"
          />
        </div>
        <Button 
          type="button"
          variant="outline"
          onClick={onGenerateNewId}
          className="mt-6"
        >
          Generate New ID
        </Button>
      </div>
    </div>
  );
};