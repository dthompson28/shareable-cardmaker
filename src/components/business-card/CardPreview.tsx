import { memo } from "react";
import { BusinessCardData } from "@/types/businessCard";
import { CompactCardLayout } from "./layouts/CompactCardLayout";
import { FullCardLayout } from "./layouts/FullCardLayout";

interface CardPreviewProps {
  data: BusinessCardData;
}

export const CardPreview = memo(({ data }: CardPreviewProps) => {
  const hasAdditionalLinks = data.social.additionalLinks?.length > 0;
  const hasSocialLinks = Object.values(data.social).some(value => 
    typeof value === 'string' && value.length > 0
  );

  const renderLogo = () => {
    if (!data.logo) return null;
    return (
      <div 
        className="absolute top-4 right-4 w-16 h-16 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${data.logo})` }}
        data-section="header"
      />
    );
  };

  if (data.photoStyle === 'compact') {
    return (
      <CompactCardLayout
        data={data}
        selectedSection={null}
        onSectionClick={() => {}}
        renderLogo={renderLogo}
      />
    );
  }

  return (
    <FullCardLayout
      data={data}
      hasSocialLinks={hasSocialLinks}
      hasAdditionalLinks={hasAdditionalLinks}
      renderLogo={renderLogo}
    />
  );
});

CardPreview.displayName = "CardPreview";