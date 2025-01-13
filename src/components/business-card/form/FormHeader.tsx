import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface FormHeaderProps {
  onNewCard: () => void;
}

export const FormHeader = ({ onNewCard }: FormHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between">
      <Button 
        variant="outline"
        onClick={onNewCard}
      >
        Create New Card
      </Button>
      <Button 
        variant="outline"
        onClick={() => navigate('/saved-cards')}
      >
        View Saved Cards
      </Button>
    </div>
  );
};