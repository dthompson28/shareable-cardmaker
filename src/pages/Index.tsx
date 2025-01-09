import { useState } from "react";
import { BusinessCardForm, BusinessCardData } from "@/components/BusinessCardForm";
import { BusinessCard } from "@/components/BusinessCard";
import { PageLayout } from "@/components/layout/PageLayout";
import { Header } from "@/components/layout/Header";
import { ContentContainer } from "@/components/layout/ContentContainer";

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
    primary: "#8B5CF6",
    secondary: "#7E69AB",
    accent: "#6E59A5",
    background: "#1A1F2C",
  },
};

const Index = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<BusinessCardData>(initialData);

  const handleEdit = () => {
    setStep(1);
  };

  return (
    <PageLayout>
      <Header />
      <ContentContainer>
        {step === 1 ? (
          <BusinessCardForm
            data={data}
            onChange={setData}
            onNext={() => setStep(2)}
          />
        ) : (
          <BusinessCard
            data={data}
            onBack={() => setStep(1)}
            onEdit={handleEdit}
          />
        )}
      </ContentContainer>
    </PageLayout>
  );
};

export default Index;