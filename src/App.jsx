import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import NewsAndResearch from './pages/NewsAndResearch';
import ResourcesAndFacilities from './pages/ResourcesAndFacilities';
import GroupMembers from './pages/GroupMembers';
import Publications from './pages/Publications';
import Memories from './pages/Memories';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news-and-research" element={<NewsAndResearch />} />
          <Route path="/resources-and-facilities" element={<ResourcesAndFacilities />} />
          <Route path="/group-members" element={<GroupMembers />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/memories" element={<Memories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
