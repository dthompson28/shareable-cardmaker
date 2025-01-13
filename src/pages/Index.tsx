import { useLocation } from "react-router-dom";
import { useBusinessCard } from "@/hooks/useBusinessCard";
import { BusinessCardContent } from "@/components/BusinessCardContent";

const Index = () => {
  const location = useLocation();
  const {
    step,
    data,
    handleEdit,
    handleBack,
    handleDataChange,
    handleClearForm,
    handleNext,
  } = useBusinessCard();

  return (
    <div className="container mx-auto py-8 px-4">
      <BusinessCardContent
        step={step}
        data={data}
        onEdit={handleEdit}
        onBack={handleBack}
        onChange={handleDataChange}
        onClear={handleClearForm}
        onNext={handleNext}
      />
    </div>
  );
};

export default Index;