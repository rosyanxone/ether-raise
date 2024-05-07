import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import FundDetail from "./pages/FundDetail";

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
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
