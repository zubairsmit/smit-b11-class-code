import "../assets/css/style.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import LoginPage from "./components/LoginPage";
import Details from './pages/Details'
import AdoptedPetContext from "../context/AdoptedPetContext";
const queryClient = new QueryClient();
const App = () => {
  const adoptedPet = useState(null);
  return (
    <div className="p-0 m-0" style={{
      background: "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)"
    }}>
      <React.StrictMode>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <AdoptedPetContext.Provider value={adoptedPet}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </AdoptedPetContext.Provider>
          </QueryClientProvider>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
};

export default App;
