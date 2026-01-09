import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

      {/* Floating WhatsApp Icon */}
      <WhatsAppFloat />
    </>
  );
};

export default Layout;
