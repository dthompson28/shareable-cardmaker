import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";
import { BusinessCardData } from "@/types/businessCard";

interface ActionButtonsProps {
  data: BusinessCardData;
  onBack: () => void;
  onEdit: () => void;
  onEmbed: () => void;
}

export const ActionButtons = ({ data, onBack, onEdit, onEmbed }: ActionButtonsProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="outline" onClick={onBack}>
        Back
      </Button>
      <Button variant="outline" onClick={onEdit}>
        Edit
      </Button>
      <Button onClick={onEmbed}>
        <Code2 className="w-4 h-4 mr-2" />
        Get Embed Code
      </Button>
    </div>
  );
};
