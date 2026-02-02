import AboutSGM from "./AboutSGM";
import Section from "../../Section";
import ContentSGM from "./ContentSGM";
import { SGM_DATA } from "../../../data/projectsData";
const SaiGonMarina = () => {
  return (
    <div className="text-primary">
      <div className="container flex flex-col">
        <div className="mt-30">
          <AboutSGM />
          <Section>
            <ContentSGM data={SGM_DATA} />
          </Section>
        </div>
      </div>
    </div>
  );
};

export default SaiGonMarina;
