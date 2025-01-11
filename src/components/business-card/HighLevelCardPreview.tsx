import { memo } from "react";
import { BusinessCardData } from "../BusinessCardForm";
import { getLogoPosition } from "@/utils/positionUtils";
import { SocialLinks } from "./SocialLinks";
import { AdditionalLinks } from "./AdditionalLinks";
import { ContactInfo } from "./contact/ContactInfo";
import { CardActions } from "./preview/CardActions";

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

  if (data.photoStyle === 'compact') {
    return (
      <div 
        className="flex flex-col w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-xl relative transition-all duration-300" 
        style={{ 
          minHeight: '500px',
          backgroundColor: data.colors.background 
        }}
      >
        <div 
          className="w-full h-48 relative"
          style={{ backgroundColor: data.colors.secondary }}
        >
          {renderLogo()}
        </div>
        <div className="relative px-6">
          <div className="flex flex-col items-start -mt-24">
            <div 
              className="w-48 h-48 rounded-full bg-cover bg-center relative mb-4 border-4 border-white"
              style={{ 
                backgroundImage: `url(${data.photo})`,
                backgroundPosition: `${data.photoPosition?.x || 50}% ${data.photoPosition?.y || 50}%`,
                backgroundSize: 'cover'
              }}
            >
              <div className="absolute inset-0 bg-black/10 rounded-full" />
            </div>
            <div className="w-full">
              <div className="text-left">
                <h1 
                  className="text-3xl font-bold mb-2 font-playfair"
                  style={{ color: data.colors.primary }}
                >
                  {data.name}
                </h1>
                {data.jobTitle && (
                  <p 
                    className="text-xl mb-1 font-playfair"
                    style={{ color: data.colors.secondary }}
                  >
                    {data.jobTitle}
                  </p>
                )}
                {data.company && (
                  <p 
                    className="text-lg font-playfair"
                    style={{ color: data.colors.accent }}
                  >
                    {data.company}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-6">
            <ContactInfo data={data} />
            {hasSocialLinks && <SocialLinks data={data} />}
            {hasAdditionalLinks && <AdditionalLinks data={data} />}
            <CardActions data={data} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-xl relative transition-all duration-300" 
      style={{ 
        minHeight: '500px',
        backgroundColor: data.colors.background 
      }}
    >
      <div className="relative">
        {data.photo && (
          <div 
            className="w-full h-64 bg-cover bg-center relative"
            style={{ 
              backgroundImage: `url(${data.photo})`,
              backgroundPosition: `${data.photoPosition?.x || 50}% ${data.photoPosition?.y || 50}%`
            }}
          >
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-6 left-6 text-left z-10">
              <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-lg font-playfair">
                {data.name}
              </h1>
              {data.jobTitle && (
                <p className="text-xl text-white/90 mb-1 drop-shadow-lg font-playfair">
                  {data.jobTitle}
                </p>
              )}
              {data.company && (
                <p className="text-xl text-white/90 drop-shadow-lg font-playfair">
                  {data.company}
                </p>
              )}
            </div>
          </div>
        )}
        {renderLogo()}
      </div>
      <div className="p-6">
        <ContactInfo data={data} />
        {hasSocialLinks && <SocialLinks data={data} />}
        {hasAdditionalLinks && <AdditionalLinks data={data} />}
        <CardActions data={data} />
      </div>
    </div>
  );
});

HighLevelCardPreview.displayName = "HighLevelCardPreview";