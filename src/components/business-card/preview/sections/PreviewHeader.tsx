import { BusinessCardData } from "@/types/businessCard";

interface PreviewHeaderProps {
  data: BusinessCardData;
  selectedSection: string | null;
  className?: string;
}

export const PreviewHeader = ({ data, selectedSection, className = '' }: PreviewHeaderProps) => {
  return (
    <div 
      className={`header section-highlight ${selectedSection === 'header' ? 'section-selected' : ''} ${className}`}
      data-section="header" 
      onClick={() => window.parent.postMessage({ type: 'sectionClick', section: 'header' }, '*')}
      style={{ backgroundImage: `url('${data.photo}')` }}
    >
      <div className="header-overlay"></div>
      <div className="header-content">
        {data.logo ? <img src={data.logo} alt="Logo" className="header-logo" loading="lazy" /> : null}
        <div className="header-text">
          <h1>{data.name}</h1>
          {data.jobTitle ? <p>{data.jobTitle}</p> : null}
          {data.company ? <p>{data.company}</p> : null}
        </div>
      </div>
    </div>
  );
};
