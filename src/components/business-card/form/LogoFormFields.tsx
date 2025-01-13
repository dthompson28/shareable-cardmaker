import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BusinessCardData } from "@/types/businessCard";

interface LogoFormFieldsProps {
  data: BusinessCardData;
  onChange: (field: string, value: any) => void;
}

export const LogoFormFields = ({ data, onChange }: LogoFormFieldsProps) => {
  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="logo">Logo URL</Label>
        <Input
          id="logo"
          placeholder="https://example.com/logo.png"
          value={data.logo || ''}
          onChange={(e) => onChange("logo", e.target.value)}
        />
      </div>

      {data.logo && (
        <div className="space-y-2">
          <Label>Preview</Label>
          <div className="relative w-32 h-32 rounded-xl overflow-hidden border border-border mx-auto">
            <div
              className="w-full h-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${data.logo})`,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
