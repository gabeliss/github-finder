import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UserPage from "./pages/UserPage";
import NotFoundPage from "./pages/NotFoundPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GithubProvider } from "./components/context/GithubContext";
import { AlertProvider } from "./components/context/AlertContext";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <BrowserRouter>
          <Header />
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="about" element={<AboutPage />} />
                  <Route path="user/:login" element={<UserPage />} />
                  <Route path="*" element={<NotFoundPage />} />
              </Routes>
        </BrowserRouter>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
