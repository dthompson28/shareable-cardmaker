import { memo } from "react";
import { BusinessCardData } from "../BusinessCardForm";
import { CompactCardLayout } from "./layouts/CompactCardLayout";
import { FullCardLayout } from "./layouts/FullCardLayout";
import { getLogoPosition, isLogoBottomLeft } from "@/utils/positionUtils";

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
        className={`absolute w-16 h-16 bg-contain bg-center bg-no-repeat ${getLogoPosition(data.logoPosition)}`}
        style={{ backgroundImage: `url(${data.logo})` }}
      />
    );
  };

  if (data.photoStyle === 'compact') {
    return (
      <CompactCardLayout
        data={data}
        hasSocialLinks={hasSocialLinks}
        hasAdditionalLinks={hasAdditionalLinks}
        renderLogo={renderLogo}
        isLogoBottomLeft={() => isLogoBottomLeft(data.logoPosition)}
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