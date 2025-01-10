import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HighLevelPreview from "./pages/HighLevelPreview";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/highlevel-preview" element={<HighLevelPreview />} />
      </Routes>
    </Router>
  );
}

export default App;