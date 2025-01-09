import { useState } from "react";
import { BusinessCardData } from "../../BusinessCardForm";
import { PhotoUrlInput } from "./photo/PhotoUrlInput";
import { PhotoStyleToggle } from "./photo/PhotoStyleToggle";
import { PhotoPreview } from "./photo/PhotoPreview";
import { PhotoZoomControl } from "./photo/PhotoZoomControl";

interface PhotoFormFieldsProps {
  data: BusinessCardData;
  onChange: (field: string, value: any) => void;
}

export const PhotoFormFields = ({ data, onChange }: PhotoFormFieldsProps) => {
  const [zoom, setZoom] = useState(100);

  return (
    <div className="grid gap-4">
      <PhotoUrlInput 
        photoUrl={data.photo} 
        onChange={onChange} 
      />

      {data.photo && (
        <>
          <PhotoStyleToggle 
            isFullWidth={data.photoStyle === 'full'} 
            onChange={onChange} 
          />

          <PhotoPreview 
            data={data} 
            onChange={onChange} 
            zoom={zoom} 
          />

          <PhotoZoomControl 
            zoom={zoom} 
            onZoomChange={setZoom} 
          />
        </>
      )}
    </div>
  );
};