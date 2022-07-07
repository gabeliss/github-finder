import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GithubProvider } from "./components/context/GithubContext";

function App() {
  return (
    <GithubProvider>
      <BrowserRouter>
        <Header />
          <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
      </BrowserRouter>
    </GithubProvider>
  );
}

export default App;
