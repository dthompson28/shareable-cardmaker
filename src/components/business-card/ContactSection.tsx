import { BusinessCardData } from "@/types/businessCard";
import { ContactFormFields } from "./form/ContactFormFields";

interface ContactSectionProps {
  data: BusinessCardData;
  onChange: (field: string, value: string) => void;
}

export const ContactSection = ({ data, onChange }: ContactSectionProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Contact Information</h2>
      <ContactFormFields data={data} onChange={onChange} />
    </div>
  );
};