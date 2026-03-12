import OverviewSection from "../../../components/Estate/Exotel/OverviewSection";
import MountDecorate from "../../../components/Estate/Exotel/MountDecorate";
import NatureSection from "../../../components/Estate/Exotel/NatureSection";
import ResortSlider from "../../../components/Estate/Exotel/ResortSlider";
import ForestVillaSection from "../../../components/Estate/Exotel/ForestVillaSection";
import MomentsSection from "../../../components/Estate/Exotel/MomentSection";
import { SeashellDecorate } from "../../../components/Estate/Exotel/SeashellDecorate";
const Exotel = () => {
  return (
    <div className="overflow-x-hidden text-black">
      <div className="container mx-auto flex flex-col gap-y-16 md:gap-y-24 lg:gap-y-[130px]">
        <div className="mt-8 md:mt-16 lg:mt-20">
          <OverviewSection />
        </div>
      </div>
      <div className="mt-16 md:mt-24 lg:mt-[-132px]">
        <MountDecorate />
      </div>
      <div className="container mx-auto flex flex-col gap-y-16 md:gap-y-24 lg:gap-y-[130px]">
        <NatureSection />
      </div>
      <ResortSlider></ResortSlider>
      <div className="m container mx-auto">
        <ForestVillaSection />
      </div>
      <SeashellDecorate />
    </div>
  );
};

export default Exotel;
