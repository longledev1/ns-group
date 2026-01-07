import { CultureSection } from "../../components/Home/CultureSection";
import { JourneySection } from "../../components/Home/JourneySection";
import { AboutSection } from "../../components/Home/AboutSection";
import { SlideSection } from "../../components/Home/SlideSection";
import { BrandSection } from "../../components/Home/BrandSection";
import { MapSection } from "../../components/Home/MapSection";
import { ContactForm } from "../../components/Home/ContactForm";
export const HomePage = () => {
  return (
    <div className="text-primary mt-[40px] md:mt-[120px]">
      <div className="container">
        <div className="flex flex-col gap-y-[200px]">
          <CultureSection />
          <JourneySection />
          <MapSection />
          <AboutSection />
          <SlideSection />
          <BrandSection />
          <div className="flex justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
