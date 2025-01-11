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
    <div className="w-full h-full">
      <CardPreview data={data} />
    </div>
  );
});

HighLevelPreview.displayName = "HighLevelPreview";