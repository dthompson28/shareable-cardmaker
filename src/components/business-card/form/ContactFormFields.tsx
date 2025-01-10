import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BusinessCardData } from "../../BusinessCardForm";

interface ContactFormFieldsProps {
  data: BusinessCardData;
  onChange: (field: string, value: string) => void;
}

export const ContactFormFields = ({ data, onChange }: ContactFormFieldsProps) => {
  return (
    <div className="grid gap-6 pt-6">
      <div className="grid gap-2">
        <Label htmlFor="name" className="text-brand-primary font-medium">Name *</Label>
        <Input
          id="name"
          required
          value={data.name}
          onChange={(e) => onChange("name", e.target.value)}
          className="h-12 bg-white/50 border-muted focus:border-brand-primary focus:ring-brand-primary/20"
          autoComplete="name"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="company" className="text-brand-primary font-medium">Company</Label>
        <Input
          id="company"
          value={data.company}
          onChange={(e) => onChange("company", e.target.value)}
          className="h-12 bg-white/50 border-muted focus:border-brand-primary focus:ring-brand-primary/20"
          autoComplete="organization"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="jobTitle" className="text-brand-primary font-medium">Job Title</Label>
        <Input
          id="jobTitle"
          value={data.jobTitle}
          onChange={(e) => onChange("jobTitle", e.target.value)}
          className="h-12 bg-white/50 border-muted focus:border-brand-primary focus:ring-brand-primary/20"
          autoComplete="organization-title"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="phone" className="text-brand-primary font-medium">Phone *</Label>
        <Input
          id="phone"
          type="tel"
          required
          value={data.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          className="h-12 bg-white/50 border-muted focus:border-brand-primary focus:ring-brand-primary/20"
          autoComplete="tel"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email" className="text-brand-primary font-medium">Email *</Label>
        <Input
          id="email"
          type="email"
          required
          value={data.email}
          onChange={(e) => onChange("email", e.target.value)}
          className="h-12 bg-white/50 border-muted focus:border-brand-primary focus:ring-brand-primary/20"
          autoComplete="email"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="website" className="text-brand-primary font-medium">Website</Label>
        <Input
          id="website"
          type="url"
          value={data.website}
          onChange={(e) => onChange("website", e.target.value)}
          className="h-12 bg-white/50 border-muted focus:border-brand-primary focus:ring-brand-primary/20"
          autoComplete="url"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="address" className="text-brand-primary font-medium">Business Address</Label>
        <Input
          id="address"
          value={data.address}
          onChange={(e) => onChange("address", e.target.value)}
          className="h-12 bg-white/50 border-muted focus:border-brand-primary focus:ring-brand-primary/20"
          autoComplete="street-address"
        />
      </div>
    </div>
  );
};