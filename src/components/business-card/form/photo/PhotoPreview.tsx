import { BusinessCardData } from "@/types/businessCard";
import { PhotoDragHandler } from "./PhotoDragHandler";
import { CompactPhotoStyle, FullWidthPhotoStyle } from "./PhotoPreviewStyles";
import { Label } from "@/components/ui/label";

interface PhotoPreviewProps {
  data: BusinessCardData;
  onChange: (field: string, value: any) => void;
  zoom: number;
}

export const PhotoPreview = ({ data, onChange, zoom }: PhotoPreviewProps) => {
  if (!data.photo) return null;

  return (
    <div className="space-y-2">
      <Label>Preview (Click and drag to position)</Label>
      <PhotoDragHandler data={data} onChange={onChange}>
        {data.photoStyle === 'compact' ? (
          <CompactPhotoStyle data={data} zoom={zoom} />
        ) : (
          <FullWidthPhotoStyle data={data} zoom={zoom} />
        )}
      </PhotoDragHandler>
    </div>
  );
};