import { BusinessCardData } from "@/types/businessCard";
import { ContactFormFields } from "./ContactFormFields";

interface ContactSectionProps {
  data: BusinessCardData;
  onChange: (field: string, value: string) => void;
  isEditing?: boolean;
}

export const ContactSection = ({ data, onChange, isEditing }: ContactSectionProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Contact Information</h2>
      <ContactFormFields data={data} onChange={onChange} isEditing={isEditing} />
    </div>
  );
};