import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface PhotoStyleSwitchProps {
  isFullWidth: boolean;
  onChange: (checked: boolean) => void;
}

export const PhotoStyleSwitch = ({ isFullWidth, onChange }: PhotoStyleSwitchProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="photo-style"
        checked={isFullWidth}
        onCheckedChange={onChange}
      />
      <Label htmlFor="photo-style">Use full-width photo header</Label>
    </div>
  );
};