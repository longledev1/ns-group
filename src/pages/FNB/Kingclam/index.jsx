import AboutKingClam from "../../../components/FNB/KingClam/AboutKingClam";
import CardFood from "../../../components/FNB/KingClam/CardFood";
import SpaceInspiration from "../../../components/FNB/KingClam/SpaceInspiration";
import MenuKingClam from "../../../components/FNB/KingClam/MenuKingClam";
import GrillBar from "../../../components/FNB/KingClam/GrillBar";
import Moment from "../../../components/FNB/KingClam/Moment";
import Video from "../../../components/FNB/KingClam/Video";
import Section from "../../../components/Section";
const KingClam = () => {
  return (
    <div className="text-primary mb-20">
      <div className="container flex flex-col">
        <div className="mt-20 mb-20">
          <AboutKingClam />
        </div>
      </div>

      <CardFood></CardFood>

      <div className="container">
        <Section>
          <SpaceInspiration />
        </Section>

        <Section>
          <MenuKingClam />
        </Section>

        <Section>
          <GrillBar />
        </Section>
      </div>

      <div className="">
        <Video></Video>
      </div>

      <div className="container">
        <Section>
          <Moment />
        </Section>
      </div>
    </div>
  );
};

export default KingClam;
