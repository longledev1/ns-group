import AboutExoCafe from "../../../components/FNB/ExoCafe/AboutExoCafe";
import SignatureExoCafe from "../../../components/FNB/ExoCafe/Signature";
import Connection from "../../../components/FNB/ExoCafe/Connection";
import GreenSpace from "../../../components/FNB/ExoCafe/GreenSpace";
import ConnectSlide from "../../../components/FNB/ExoCafe/ConnectSlide";
import Space from "../../../components/FNB/ExoCafe/Space";
import Tropicana from "../../../components/FNB/ExoCafe/Tropicana";
const ExoCafe = () => {
  return (
    <div className="text-primary mb-20">
      <div className="container flex flex-col">
        <div className="mt-[130px] mb-[150px]">
          <AboutExoCafe />
        </div>
        <div className="mb-[150px] flex flex-col gap-y-[150px]">
          <SignatureExoCafe />
          <GreenSpace />
        </div>
      </div>
      <div className="mb-[150px] bg-[#C84928]">
        <div className="container mx-auto">
          <Tropicana />
        </div>
      </div>
      <div className="mb-[150px] bg-[#F1F1E5]">
        <div className="container mx-auto">
          <Connection />
        </div>
        <ConnectSlide />
      </div>
      <div className="mx-aut container">
        <Space />
      </div>
    </div>
  );
};

export default ExoCafe;
