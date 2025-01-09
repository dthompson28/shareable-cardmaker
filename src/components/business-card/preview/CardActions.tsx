import { Button } from "@/components/ui/button";
import { Download, Share2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface CardActionsProps {
  primaryColor: string;
  backgroundColor: string;
  tertiaryColor: string;
}

export const CardActions = ({ primaryColor, backgroundColor, tertiaryColor }: CardActionsProps) => {
  const { toast } = useToast();

  const handleShare = async () => {
    const shareData = {
      title: 'Business Card',
      text: 'Check out my business card!',
      url: window.location.href
    };

    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copied!",
          description: "The URL has been copied to your clipboard.",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error('Error sharing:', error);
      toast({
        title: "Sharing failed",
        description: "There was an error while trying to share.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <div className="flex gap-4 mt-6">
      <Button 
        className="flex-1"
        style={{ 
          backgroundColor: primaryColor,
          color: backgroundColor
        }}
        onClick={handleShare}
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