import { BusinessCardData } from "../../BusinessCardForm";
import { CardActions } from "../preview/CardActions";

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
      className="w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-xl relative transition-all duration-300" 
      style={{ 
        minHeight: '500px',
        backgroundColor: data.colors.background 
      }}
    >
      <div className="relative">
        {data.photo && (
          <div 
            className="w-full h-48 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${data.photo})`,
              backgroundPosition: `${data.photoPosition?.x || 50}% ${data.photoPosition?.y || 50}%`
            }}
          />
        )}
        {renderLogo()}
      </div>
      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold" style={{ color: data.colors.primary }}>{data.name}</h1>
          {data.jobTitle && (
            <p className="text-lg" style={{ color: data.colors.secondary }}>{data.jobTitle}</p>
          )}
          {data.company && (
            <p className="text-lg" style={{ color: data.colors.secondary }}>{data.company}</p>
          )}
        </div>
        <div className="space-y-2">
          {data.phone && (
            <p style={{ color: data.colors.primary }}>{data.phone}</p>
          )}
          {data.email && (
            <p style={{ color: data.colors.primary }}>{data.email}</p>
          )}
          {data.website && (
            <p style={{ color: data.colors.primary }}>{data.website}</p>
          )}
          {data.address && (
            <p style={{ color: data.colors.primary }}>{data.address}</p>
          )}
        </div>
        {(hasSocialLinks || hasAdditionalLinks) && (
          <div className="space-y-4">
            {/* Social links and additional links components would go here */}
          </div>
        )}
        <CardActions data={data} />
      </div>
    </div>
  );
};