import { BrowserRouter, useLocation } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./index.css"; 
import Router from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function AppContent() {
  const location = useLocation();

  // List of paths where Navbar and Footer should be hidden
  const hiddenPaths = [
    "/food-industry/dairy",
    "/food-industry/beverage",
    "/food-industry/meatfish",
    "/food-industry/jamsauce",
    "/food-industry/functionaladditives",
    "/food-industry/bakery",
    "/food-industry/confictionary",



  ];

  const hideNavbarFooter = hiddenPaths.includes(location.pathname);

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <Router />
      {!hideNavbarFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
