import { BusinessCardData } from "./BusinessCardForm";
import { CardPreview } from "./business-card/CardPreview";

interface Props {
  data: BusinessCardData;
  onBack: () => void;
  onEdit: () => void;
}

export const BusinessCard = ({ data, onBack, onEdit }: Props) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <CardPreview data={data} />
      <div className="flex justify-center gap-4">
        <button
          onClick={onBack}
          className="px-4 py-2 text-sm font-medium border rounded-md hover:bg-accent"
          style={{ 
            backgroundColor: data.colors.background,
            color: data.colors.primary,
            borderColor: data.colors.primary
          }}
        >
          Back
        </button>
        <button
          onClick={onEdit}
          className="px-4 py-2 text-sm font-medium border rounded-md hover:bg-accent"
          style={{ 
            backgroundColor: data.colors.primary,
            color: data.colors.background,
          }}
        >
          Edit Card
        </button>
      </div>
    </div>
  );
};