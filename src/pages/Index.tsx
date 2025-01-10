import { useState, useCallback, useEffect } from "react";
import { BusinessCardForm, BusinessCardData } from "@/components/BusinessCardForm";
import { BusinessCard } from "@/components/BusinessCard";
import { PageLayout } from "@/components/layout/PageLayout";
import { Header } from "@/components/layout/Header";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

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

const STORAGE_KEY = 'businessCardFormData';

const Index = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<BusinessCardData>(initialData);

  // Clear localStorage on component mount
  useEffect(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }, []);

  const handleEdit = useCallback(() => {
    setStep(1);
  }, []);

  const handleBack = useCallback(() => {
    setStep(1);
  }, []);

  const handleDataChange = useCallback((newData: BusinessCardData) => {
    setData(newData);
  }, []);

  const handleNext = useCallback(() => {
    // Save to localStorage when form is submitted
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      toast.success("Form data saved successfully");
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
      toast.error("Could not save form data");
    }
    setStep(2);
  }, [data]);

  const handleReset = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      setData(initialData);
      toast.success("Form data has been reset");
    } catch (error) {
      console.error('Error resetting data:', error);
      toast.error("Could not reset form data");
    }
  }, []);

  return (
    <PageLayout>
      <Header />
      <ContentContainer>
        <div className="flex justify-end mb-4">
          <Button 
            variant="outline" 
            onClick={handleReset}
            className="text-sm"
          >
            Reset Form
          </Button>
        </div>
        {step === 1 ? (
          <BusinessCardForm
            data={data}
            onChange={handleDataChange}
            onNext={handleNext}
          />
        ) : (
          <BusinessCard
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