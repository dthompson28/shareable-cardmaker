import { useEffect } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Header } from "@/components/layout/Header";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { useLocation } from "react-router-dom";
import { useBusinessCard } from "@/hooks/useBusinessCard";
import { BusinessCardContent } from "@/components/business-card/BusinessCardContent";

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

  useEffect(() => {
    if (location.state?.newCard) {
      handleClearForm();
      window.history.replaceState({}, document.title);
    }
  }, [location.state, handleClearForm]);

  return (
    <PageLayout>
      <Header />
      <ContentContainer>
        <BusinessCardContent
          step={step}
          data={data}
          onEdit={handleEdit}
          onBack={handleBack}
          onChange={handleDataChange}
          onClear={handleClearForm}
          onNext={handleNext}
        />
      </ContentContainer>
    </PageLayout>
  );
};

export default Index;