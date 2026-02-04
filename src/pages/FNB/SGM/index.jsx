import AboutSGM from "./AboutSGM";
import ContentSGM from "./ContentSGM";
import FoodSGM from "./FoodSGM";
import SpaceSGM from "./SpaceSGM";
import SignatureSGM from "./SignatureSGM";
import Section from "../../../components/Section";
import { SGM_DATA } from "../../../data/projectsData";
const SaiGonMarina = () => {
  return (
    <div className="text-primary">
      <div className="container flex flex-col">
        <div className="mt-20 mb-20">
          <AboutSGM />
          <Section>
            <ContentSGM data={SGM_DATA} />
          </Section>

          <Section>
            <SpaceSGM />
          </Section>

          <Section>
            <FoodSGM />
          </Section>
        </div>
      </div>
    </div>
  );
};

export default SaiGonMarina;
