import { useState, useCallback, useEffect } from "react";
import { BusinessCardForm, BusinessCardData } from "@/components/BusinessCardForm";
import { BusinessCard } from "@/components/BusinessCard";
import { PageLayout } from "@/components/layout/PageLayout";
import { Header } from "@/components/layout/Header";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const initialData: BusinessCardData = {
  name: "John Doe",
  company: "Tech Solutions Inc.",
  jobTitle: "Senior Developer",
  phone: "+1 (555) 123-4567",
  email: "john.doe@techsolutions.com",
  website: "www.techsolutions.com",
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
  address: "123 Tech Street, Silicon Valley, CA 94025",
  social: {
    linkedin: "https://linkedin.com/in/johndoe",
    facebook: "https://facebook.com/johndoe",
    instagram: "https://instagram.com/johndoe",
    youtube: "",
    twitter: "https://twitter.com/johndoe",
    tiktok: "",
    whatsapp: "+15551234567",
    additionalLinks: [
      {
        title: "Portfolio",
        url: "https://johndoe-portfolio.com"
      }
    ],
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
  const [data, setData] = useState<BusinessCardData>(() => {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        if (
          typeof parsedData === 'object' &&
          parsedData !== null &&
          'name' in parsedData &&
          'colors' in parsedData &&
          'social' in parsedData
        ) {
          toast.success("Form data restored from local storage");
          return parsedData as BusinessCardData;
        }
      }
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
      toast.error("Could not load saved data");
    }
    return initialData;
  });

  useEffect(() => {
    try {
      if (JSON.stringify(data) !== JSON.stringify(initialData)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      }
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
      toast.error("Could not save form data");
    }
  }, [data]);

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
    setStep(2);
  }, []);

  const handleReset = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      // Create a new data object with empty fields but preserve colors
      const resetData: BusinessCardData = {
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
        colors: { ...data.colors }, // Preserve existing colors
      };
      setData(resetData);
      toast.success("Form data has been reset");
    } catch (error) {
      console.error('Error resetting data:', error);
      toast.error("Could not reset form data");
    }
  }, [data.colors]);

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