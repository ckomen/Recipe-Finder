import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/SearchPage";
import RecipePage from "./pages/RecipePage";
import FiltersPage from "./pages/FiltersPage";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/search" element={<SearchPage />} />
      <Route path="/recipe/:id" element={<RecipePage />} />
      <Route path="/filters" element={<FiltersPage />} />
    </Routes>
  </Router>
);

export default App;
