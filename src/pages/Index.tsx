import { useLocation } from "react-router-dom";
import { useBusinessCard } from "@/hooks/useBusinessCard";
import { BusinessCardContent } from "@/components/BusinessCardContent";
import { PageLayout } from "@/components/layout/PageLayout";

const Index = () => {
  const location = useLocation();
  const isEditing = !!location.state?.editData;
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
    <PageLayout>
      <div className="space-y-8">
        {step === 1 ? (
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#00674f] mb-2">
              {isEditing ? "Edit Card Here" : "Create New Business Card"}
            </h1>
            <p className="text-muted-foreground">
              {isEditing 
                ? "Make changes to your existing business card" 
                : "Fill out the form below to create your business card"}
            </p>
          </div>
        ) : (
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#00674f] mb-2">
              Preview Your New Business Card Here
            </h1>
            <p className="text-muted-foreground">
              Review your business card before saving
            </p>
          </div>
        )}
        
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
    </PageLayout>
  );
};

export default Index;