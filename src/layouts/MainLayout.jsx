import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { HERO_DATA } from "../data/heroData";

export const MainLayout = () => {
  const { pathname } = useLocation();
  const heroData = HERO_DATA[pathname];
  return (
    <div className="bg-secondary min-h-screen text-white">
      <Header variant={heroData ? "hero" : "overlay"} />

      {heroData && (
        <Hero
          image={heroData.image}
          title={heroData.title}
          subtitle={heroData.subtitle}
          layout={heroData.layout}
        />
      )}

      <Outlet />
      <Footer />
    </div>
  );
};
