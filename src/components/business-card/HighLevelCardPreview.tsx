import { memo } from "react";
import { BusinessCardData } from "../BusinessCardForm";
import { generateStyles } from "./embed/utils/styleGenerator";
import { generateHeaderHTML, generateContactHTML, generateSocialHTML, generateActionButtonsHTML } from "./embed/utils/htmlGenerator";

interface HighLevelCardPreviewProps {
  data: BusinessCardData;
}

export const HighLevelCardPreview = memo(({ data }: HighLevelCardPreviewProps) => {
  // Generate the same HTML structure as the embed code
  const headerHtml = generateHeaderHTML(data);
  const contactHtml = generateContactHTML(data);
  const socialHtml = generateSocialHTML(data);
  const actionButtonsHtml = generateActionButtonsHTML(data);
  const styles = generateStyles(data);

  return (
    <div className="w-full h-full">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="business-card-wrapper">
        <div className="business-card">
          <div dangerouslySetInnerHTML={{ __html: headerHtml }} />
          <div className="content">
            <div dangerouslySetInnerHTML={{ __html: contactHtml }} />
            <div dangerouslySetInnerHTML={{ __html: socialHtml }} />
            <div dangerouslySetInnerHTML={{ __html: actionButtonsHtml }} />
          </div>
        </div>
      </div>
    </div>
  );
});

HighLevelCardPreview.displayName = "HighLevelCardPreview";