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
    primary: "#00674f",
    secondary: "#ff8c00",
    accent: "#00674f",
    background: "#f5f5f5",
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