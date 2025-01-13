import { BusinessCardData } from "@/types/businessCard";
import { SavedCardActions } from "./SavedCardActions";

interface SavedCardProps {
  id: string;
  clientName: string;
  cardName: string;
  previewImage: string;
  embedCode: string;
  cardData: BusinessCardData;
  onCopyEmbed: (embedCode: string) => void;
  onEdit: (cardData: BusinessCardData) => void;
  onDelete: () => void;
}

export const SavedCardItem = ({
  id,
  clientName,
  cardName,
  previewImage,
  embedCode,
  cardData,
  onCopyEmbed,
  onEdit,
  onDelete,
}: SavedCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-start gap-6">
        {previewImage && (
          <img 
            src={previewImage} 
            alt={`${cardName} preview`}
            className="w-48 h-48 object-cover rounded-lg"
          />
        )}
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-lg font-medium">{clientName}</h3>
            <p className="text-gray-600">{cardName}</p>
            <p className="text-sm text-gray-400">ID: {id}</p>
          </div>
          <SavedCardActions 
            embedCode={embedCode}
            cardData={cardData}
            onCopyEmbed={onCopyEmbed}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  );
};