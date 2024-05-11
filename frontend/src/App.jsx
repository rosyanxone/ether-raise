import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import FundDetail from "./pages/Fund/Detail";
import FundCreate from "./pages/Fund/Create";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail" element={<FundDetail />} />
          <Route path="/create" element={<FundCreate />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
