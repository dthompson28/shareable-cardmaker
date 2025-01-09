import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface PhotoStyleToggleProps {
  isFullWidth: boolean;
  onChange: (field: string, value: string) => void;
}

export const PhotoStyleToggle = ({ isFullWidth, onChange }: PhotoStyleToggleProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="photo-style"
        checked={isFullWidth}
        onCheckedChange={(checked) => 
          onChange("photoStyle", checked ? 'full' : 'compact')
        }
      />
      <Label htmlFor="photo-style">Use full-width photo header</Label>
    </div>
  );
};