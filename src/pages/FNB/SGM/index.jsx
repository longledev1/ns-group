import AboutSGM from "../../../components/FNB/SGM/AboutSGM";
import ContentSGM from "../../../components/FNB/SGM/ContentSGM";
import FoodSGM from "../../../components/FNB/SGM/FoodSGM";
import SpaceSGM from "../../../components/FNB/SGM/SpaceSGM";
import Section from "../../../components/Section";
import { SGM_DATA } from "../../../data/projectsData";
const SaigonMarinaPage = () => {
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

export default SaigonMarinaPage;
