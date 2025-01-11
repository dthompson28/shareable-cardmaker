import { memo, useState } from 'react';
import { BusinessCardData } from "../../BusinessCardForm";
import { CardPreview } from "../CardPreview";

interface HighLevelPreviewProps {
  data: BusinessCardData;
}

export const HighLevelPreview = memo(({ data }: HighLevelPreviewProps) => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
    const businessCardSection = document.querySelector(`[data-section="${section}"]`);
    if (businessCardSection) {
      businessCardSection.classList.add('ring-2', 'ring-brand-primary');
      setTimeout(() => {
        businessCardSection.classList.remove('ring-2', 'ring-brand-primary');
      }, 2000);
    }
  };

  return (
    <div className="h-[500px] w-full flex items-center justify-center">
      <div className="w-[448px] h-[500px] flex items-center justify-center bg-white rounded-lg shadow-md">
        <CardPreview data={data} />
      </div>
    </div>
  );
});

HighLevelPreview.displayName = "HighLevelPreview";