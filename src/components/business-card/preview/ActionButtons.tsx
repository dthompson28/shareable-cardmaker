import { BusinessCardData } from "../../BusinessCardForm";
import { useNavigate } from "react-router-dom";

interface ActionButtonsProps {
  data: BusinessCardData;
  onBack: () => void;
  onEdit: () => void;
  onEmbed: () => void;
}

export const ActionButtons = ({ data, onBack, onEdit, onEmbed }: ActionButtonsProps) => {
  const navigate = useNavigate();

  const handlePreview = () => {
    navigate("/preview", { state: { data } });
  };

  return (
    <div className="flex justify-center gap-4">
      <button
        onClick={onBack}
        className="px-6 py-3 text-base font-medium border rounded-md transition-all duration-300 hover:bg-brand-primary/5"
        style={{ 
          borderColor: data.colors.primary,
          color: data.colors.primary
        }}
      >
        Back
      </button>
      <button
        onClick={onEdit}
        className="px-6 py-3 text-base font-medium rounded-md transition-all duration-300 hover:opacity-90"
        style={{ 
          backgroundColor: data.colors.primary,
          color: "#FFFFFF"
        }}
      >
        Edit Card
      </button>
      <button
        onClick={onEmbed}
        className="px-6 py-3 text-base font-medium border rounded-md transition-all duration-300 hover:bg-brand-primary/5"
        style={{ 
          borderColor: data.colors.accent,
          color: data.colors.accent
        }}
      >
        Get Embed Code
      </button>
      <button
        onClick={handlePreview}
        className="px-6 py-3 text-base font-medium border rounded-md transition-all duration-300 hover:bg-brand-primary/5"
        style={{ 
          borderColor: data.colors.secondary,
          color: data.colors.secondary
        }}
      >
        Preview
      </button>
    </div>
  );
};