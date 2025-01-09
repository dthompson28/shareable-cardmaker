import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LucideIcon } from "lucide-react";

interface Props {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  Icon: LucideIcon | React.FC;
}

export const SocialMediaInput = ({ id, label, value, onChange, Icon }: Props) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>
        {typeof Icon === 'function' ? (
          <Icon />
        ) : (
          <Icon className="inline-block w-4 h-4 mr-2" />
        )}
        {label}
      </Label>
      <Input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};