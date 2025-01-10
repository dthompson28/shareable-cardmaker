import { Button } from "@/components/ui/button";
import { Download, Share2, Code2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BusinessCardData } from "../../BusinessCardForm";

interface ActionButtonsProps {
  data: BusinessCardData;
  onBack: () => void;
  onEdit: () => void;
  onEmbed: () => void;
}

export const ActionButtons = ({ data, onBack, onEdit, onEmbed }: ActionButtonsProps) => {
  const navigate = useNavigate();

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
        Embed
      </Button>
      <Button 
        variant="secondary"
        onClick={() => navigate('/highlevel-preview')}
      >
        <Code2 className="w-4 h-4 mr-2" />
        HighLevel Code
      </Button>
    </div>
  );
};