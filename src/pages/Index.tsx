import { useState, useCallback, useEffect } from "react";
import { BusinessCardData } from "@/components/BusinessCardForm";
import { PageLayout } from "@/components/layout/PageLayout";
import { Header } from "@/components/layout/Header";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { toast } from "sonner";
import { STORAGE_KEY } from "@/constants/businessCard";
import { FormStep } from "@/components/steps/FormStep";
import { PreviewStep } from "@/components/steps/PreviewStep";
import { useLocation } from "react-router-dom";

const initialData: BusinessCardData = {
  name: "",
  company: "",
  jobTitle: "",
  phone: "",
  email: "",
  website: "",
  photo: "",
  photoStyle: "full",
  photoPosition: {
    x: 50,
    y: 50
  },
  logo: "",
  logoPosition: {
    x: 50,
    y: 50
  },
  address: "",
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
    youtube: "",
    twitter: "",
    tiktok: "",
    whatsapp: "",
    additionalLinks: [],
  },
  colors: {
    primary: "#00674f",
    secondary: "#326872",
    accent: "#be5103",
    background: "#cecabe",
  },
};

const Index = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<BusinessCardData>(() => {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY);
      return savedData ? JSON.parse(savedData) : initialData;
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
      return initialData;
    }
  });

  const location = useLocation();

  useEffect(() => {
    // Reset form when navigating from saved cards with state.newCard
    if (location.state?.newCard) {
      handleClearForm();
      // Clear the state to prevent repeated resets
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const handleEdit = useCallback(() => {
    setStep(1);
  }, []);

  const handleBack = useCallback(() => {
    setStep(1);
  }, []);

  const handleDataChange = useCallback((newData: BusinessCardData) => {
    setData(newData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
    }
  }, []);

  const handleClearForm = useCallback(() => {
    setData(initialData);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const handleNext = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      toast.success("Form data saved successfully");
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
      toast.error("Could not save form data");
    }
    setStep(2);
  }, [data]);

  return (
    <PageLayout>
      <Header />
      <ContentContainer>
        {step === 1 ? (
          <FormStep
            data={data}
            onChange={handleDataChange}
            onNext={handleNext}
            onClear={handleClearForm}
          />
        ) : (
          <PreviewStep
            data={data}
            onBack={handleBack}
            onEdit={handleEdit}
          />
        )}
      </ContentContainer>
    </PageLayout>
  );
};

export default Index;