import { memo } from "react";
import { BusinessCardData } from "../BusinessCardForm";
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

  const getLogoPosition = () => {
    const { x = 50, y = 50 } = data.logoPosition || {};
    if (x === 0 && y === 0) return 'top-4 left-4';
    if (x === 100 && y === 0) return 'top-4 right-4';
    if (x === 0 && y === 100) return 'bottom-4 left-4';
    if (x === 100 && y === 100) return 'bottom-4 right-4';
    return 'top-4 right-4';
  };

  const isLogoBottomLeft = () => {
    const { x = 50, y = 50 } = data.logoPosition || {};
    return x === 0 && y === 100;
  };

  const renderLogo = () => {
    if (!data.logo) return null;
    return (
      <div 
        className={`absolute w-16 h-16 bg-contain bg-center bg-no-repeat ${getLogoPosition()}`}
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
        isLogoBottomLeft={isLogoBottomLeft}
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