import { BusinessCardData } from "@/components/BusinessCardForm";

interface PreviewActionsProps {
  data: BusinessCardData;
  selectedSection: string | null;
}

export const PreviewActions = ({ data, selectedSection }: PreviewActionsProps) => {
  return (
    <div 
      className={`action-buttons section-highlight ${selectedSection === 'actions' ? 'section-selected' : ''}`}
      data-section="actions" 
      onClick={() => window.parent.postMessage({ type: 'sectionClick', section: 'actions' }, '*')}
    >
      <button onClick={() => window.shareCard()} className="action-button share-button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <circle cx="18" cy="5" r="3"/>
          <circle cx="6" cy="12" r="3"/>
          <circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </svg>
        Share
      </button>
      <button onClick={() => window.saveContact()} className="action-button save-button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Save Contact
      </button>
    </div>
  );
};