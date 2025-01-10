import { BusinessCardData } from "../../BusinessCardForm";
import { CardActions } from "../preview/CardActions";
import { CardHeader } from "../header/CardHeader";
import { ContactInfo } from "../contact/ContactInfo";
import { SocialLinks } from "../SocialLinks";
import { AdditionalLinks } from "../AdditionalLinks";

interface FullCardLayoutProps {
  data: BusinessCardData;
  hasSocialLinks: boolean;
  hasAdditionalLinks: boolean;
  renderLogo: () => React.ReactNode;
}

export const FullCardLayout = ({
  data,
  hasSocialLinks,
  hasAdditionalLinks,
  renderLogo,
}: FullCardLayoutProps) => {
  return (
    <div 
      className="w-full max-w-[28rem] mx-auto rounded-xl overflow-hidden shadow-lg transition-all duration-300" 
      style={{ 
        backgroundColor: 'white'
      }}
    >
      <div className="relative">
        <div 
          className="w-full h-48 bg-[#00674f]"
        >
          <div className="absolute top-4 right-4">
            {data.logo && (
              <div 
                className="w-16 h-16 bg-white rounded-lg p-2 bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${data.logo})` }}
              />
            )}
          </div>
        </div>
      </div>
      <div className="px-8 -mt-16">
        <div className="text-center">
          {data.photo && (
            <div 
              className="w-32 h-32 mx-auto rounded-full bg-cover bg-center relative border-4 border-white shadow-md"
              style={{ 
                backgroundImage: `url(${data.photo})`,
                backgroundPosition: `${data.photoPosition?.x || 50}% ${data.photoPosition?.y || 50}%`
              }}
            />
          )}
          <h1 className="text-[#00674f] text-2xl font-bold mt-4 mb-2">{data.name}</h1>
          {data.company && (
            <h2 className="text-[#326872] text-lg mb-8">{data.company}</h2>
          )}
        </div>
      </div>
      <div className="px-8 space-y-6">
        <ContactInfo data={data} />
        {(hasSocialLinks || hasAdditionalLinks) && (
          <div className="space-y-4">
            {hasSocialLinks && <SocialLinks data={data} />}
            {hasAdditionalLinks && <AdditionalLinks data={data} />}
          </div>
        )}
        <div className="pb-6">
          <CardActions data={data} />
        </div>
      </div>
    </div>
  );
};