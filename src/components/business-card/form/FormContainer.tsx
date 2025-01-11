import { memo } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { BusinessCardData } from "../../BusinessCardForm";

interface FormContainerProps {
  children: React.ReactNode;
  data: BusinessCardData;
  onNext: () => void;
}

export const FormContainer = memo(({ children, data, onNext }: FormContainerProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.phone) {
      toast.error("Please fill in all required fields");
      return;
    }
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-12 animate-fadeIn">
      <div className="space-y-12 divide-y divide-muted">
        {children}
      </div>
      <Button 
        type="submit" 
        className="w-full h-12 text-lg bg-brand-primary hover:bg-brand-primary/90 transition-opacity"
      >
        Preview Card
      </Button>
    </form>
  );
});

FormContainer.displayName = "FormContainer";