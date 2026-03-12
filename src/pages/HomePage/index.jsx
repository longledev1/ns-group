import { CultureSection } from "../../components/Home/CultureSection";
import { JourneySection } from "../../components/Home/JourneySection";
import { AboutSection } from "../../components/Home/AboutSection";
import { SlideSection } from "../../components/Home/SlideSection";
import { BrandSection } from "../../components/Home/BrandSection";
import { MapSection } from "../../components/Home/MapSection";
import { ContactForm } from "../../components/Home/ContactForm";
import Section from "../../components/Section";
export const HomePage = () => {
  return (
    <div className="text-primary mt-[40px] md:mt-[80px] lg:mt-[120px]">
      <CultureSection />
      <div className="container">
        <div className="flex flex-col">
          <div className="mt-[-20px]">
            <Section>
              <JourneySection />
            </Section>
          </div>
          <Section>
            <MapSection />
          </Section>
          <Section>
            <AboutSection />
          </Section>
          <Section>
            <SlideSection />
          </Section>
          <div className="mb-[60px] md:mb-[80px] lg:mb-[120px]">
            <Section>
              <BrandSection />
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};
