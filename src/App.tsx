import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SavedCards from "./pages/SavedCards";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/saved-cards" element={<SavedCards />} />
      </Routes>
    </Router>
  );
}

export default App;