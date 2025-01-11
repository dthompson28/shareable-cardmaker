import { memo } from "react";
import { BusinessCardData } from "../BusinessCardForm";
import { generateStyles } from "./embed/utils/styleGenerator";
import { CompactCardLayout } from "./layouts/CompactCardLayout";
import { FullCardLayout } from "./layouts/FullCardLayout";
import { getLogoPosition } from "@/utils/positionUtils";

interface HighLevelCardPreviewProps {
  data: BusinessCardData;
}

export const HighLevelCardPreview = memo(({ data }: HighLevelCardPreviewProps) => {
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
        data-section="header"
      />
    );
  };

  // Add the styles to the document head
  const styleElement = document.createElement('style');
  styleElement.textContent = generateStyles(data);
  document.head.appendChild(styleElement);

  if (data.photoStyle === 'compact') {
    return (
      <div className="business-card-wrapper">
        <CompactCardLayout
          data={data}
          hasSocialLinks={hasSocialLinks}
          hasAdditionalLinks={hasAdditionalLinks}
          renderLogo={renderLogo}
        />
      </div>
    );
  }

  return (
    <div className="business-card-wrapper">
      <FullCardLayout
        data={data}
        hasSocialLinks={hasSocialLinks}
        hasAdditionalLinks={hasAdditionalLinks}
        renderLogo={renderLogo}
      />
    </div>
  );
});

HighLevelCardPreview.displayName = "HighLevelCardPreview";