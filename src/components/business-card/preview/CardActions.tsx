import { Button } from "@/components/ui/button";
import { Download, Share2 } from "lucide-react";

interface CardActionsProps {
  primaryColor: string;
  backgroundColor: string;
  tertiaryColor: string;
}

export const CardActions = ({ primaryColor, backgroundColor, tertiaryColor }: CardActionsProps) => {
  return (
    <div className="flex gap-4 mt-6">
      <Button 
        className="flex-1"
        style={{ 
          backgroundColor: primaryColor,
          color: backgroundColor
        }}
      >
        <Share2 className="w-4 h-4 mr-2" />
        Share
      </Button>
      <Button
        className="flex-1 transition-colors duration-200"
        variant="outline"
        style={{ 
          borderColor: tertiaryColor,
          borderWidth: '2px',
          color: tertiaryColor,
          '--hover-bg': tertiaryColor,
          '--hover-color': backgroundColor,
        } as React.CSSProperties}
        onMouseEnter={(e) => {
          const target = e.currentTarget;
          target.style.backgroundColor = tertiaryColor;
          target.style.color = backgroundColor;
        }}
        onMouseLeave={(e) => {
          const target = e.currentTarget;
          target.style.backgroundColor = 'transparent';
          target.style.color = tertiaryColor;
        }}
      >
        <Download className="w-4 h-4 mr-2" />
        Save Contact
      </Button>
    </div>
  );
};