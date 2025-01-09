import { useState } from "react";
import { BusinessCardForm, BusinessCardData } from "@/components/BusinessCardForm";
import { BusinessCard } from "@/components/BusinessCard";

const initialData: BusinessCardData = {
  name: "",
  company: "",
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
  const [data, setData] = useState<BusinessCardData>(initialData);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Digital Business Card Generator</h1>
          <p className="text-gray-600">Create your professional digital business card in minutes</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
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
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;