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
    <div className="text-primary mt-[40px] md:mt-[120px]">
      <div className="container">
        <div className="flex flex-col">
          <CultureSection />

          <Section>
            <JourneySection />
          </Section>

          <Section>
            <MapSection />
          </Section>

          <Section>
            <AboutSection />
          </Section>

          <Section>
            <SlideSection />
          </Section>

          <Section>
            <BrandSection />
          </Section>

          <div className="mt-[200px] mb-[120px] flex justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
