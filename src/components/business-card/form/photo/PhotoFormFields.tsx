import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BusinessCardData } from "@/components/BusinessCardForm";
import { useState } from "react";
import { PhotoPositionControl } from "./PhotoPositionControl";
import { PhotoZoomControl } from "./PhotoZoomControl";
import { PhotoStyleSwitch } from "./PhotoStyleSwitch";

interface PhotoFormFieldsProps {
  data: BusinessCardData;
  onChange: (field: string, value: any) => void;
}

export const PhotoFormFields = ({ data, onChange }: PhotoFormFieldsProps) => {
  const [zoom, setZoom] = useState(100);

  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="photo">Photo URL</Label>
        <Input
          id="photo"
          placeholder="https://example.com/photo.jpg"
          value={data.photo}
          onChange={(e) => onChange("photo", e.target.value)}
        />
      </div>

      {data.photo && (
        <>
          <PhotoStyleSwitch 
            isFullWidth={data.photoStyle === 'full'}
            onChange={(checked) => 
              onChange("photoStyle", checked ? 'full' : 'compact')
            }
          />

          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Preview (Click and drag to position)</Label>
              <PhotoPositionControl 
                data={data}
                zoom={zoom}
                onChange={onChange}
              />
            </div>

            <PhotoZoomControl 
              zoom={zoom}
              onZoomChange={setZoom}
            />
          </div>
        </>
      )}
    </div>
  );
};