import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
export const MainLayout = () => {
  return (
    <div className="bg-secondary min-h-screen text-white">
      {/* <Header /> */}
      <Hero />
      <Outlet />
      <Footer />
    </div>
  );
};
