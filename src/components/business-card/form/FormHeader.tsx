import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface FormHeaderProps {
  onClear: () => void;
}

export const FormHeader = ({ onClear }: FormHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between">
      <Button 
        variant="outline"
        onClick={onClear}
      >
        Clear Form
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