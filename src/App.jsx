import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./index.css"; // Ensure this points to your tailwind CSS file
import Router from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* <ConnectButton /> */}
      <Navbar/>
      <Router />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
