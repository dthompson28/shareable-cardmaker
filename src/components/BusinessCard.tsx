import { BusinessCardData } from "./BusinessCardForm";
import { CardPreview } from "./business-card/CardPreview";

interface Props {
  data: BusinessCardData;
  onBack: () => void;
}

export const BusinessCard = ({ data, onBack }: Props) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <CardPreview data={data} />
      <div className="flex justify-center">
        <button
          onClick={onBack}
          className="px-4 py-2 text-sm font-medium border rounded-md hover:opacity-80 transition-opacity"
          style={{ 
            backgroundColor: data.colors.background,
            borderColor: data.colors.primary,
            color: data.colors.primary
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};