import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BusinessCardData } from "../../BusinessCardForm";

interface ContactFormFieldsProps {
  data: BusinessCardData;
  onChange: (field: string, value: string) => void;
}

export const ContactFormFields = ({ data, onChange }: ContactFormFieldsProps) => {
  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Name *</Label>
        <Input
          id="name"
          required
          value={data.name}
          onChange={(e) => onChange("name", e.target.value)}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          value={data.company}
          onChange={(e) => onChange("company", e.target.value)}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="phone">Phone *</Label>
        <Input
          id="phone"
          type="tel"
          required
          value={data.phone}
          onChange={(e) => onChange("phone", e.target.value)}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          required
          value={data.email}
          onChange={(e) => onChange("email", e.target.value)}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          type="url"
          value={data.website}
          onChange={(e) => onChange("website", e.target.value)}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="address">Business Address</Label>
        <Input
          id="address"
          value={data.address}
          onChange={(e) => onChange("address", e.target.value)}
        />
      </div>
    </div>
  );
};