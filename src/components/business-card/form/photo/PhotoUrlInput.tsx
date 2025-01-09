import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BusinessCardData } from "../../../BusinessCardForm";

interface PhotoUrlInputProps {
  photoUrl: string;
  onChange: (field: string, value: string) => void;
}

export const PhotoUrlInput = ({ photoUrl, onChange }: PhotoUrlInputProps) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor="photo">Photo URL</Label>
      <Input
        id="photo"
        placeholder="https://example.com/photo.jpg"
        value={photoUrl}
        onChange={(e) => onChange("photo", e.target.value)}
      />
    </div>
  );
};