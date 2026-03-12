import { StoryNSG } from "./StoryNSG";
import { ImageHistory } from "./ImageHistory";
import { Timeline } from "./Timeline";
import { ImageTimeLine } from "./ImageTimeLine";
import {
  TIMELINE_FNB_DATA,
  TIMELINE_ESTATE_DATA,
} from "../../data/timelineData";

export const AboutUs = () => {
  return (
    <div className="text-primary">
      <div className="container">
        <div className="flex flex-col gap-y-16 md:gap-y-24 lg:gap-y-[120px]">
          <StoryNSG />
          <ImageHistory />

          <div>
            <div className="flex justify-center text-center">
              <div className="mb-8 flex flex-col gap-y-2 px-4 md:mb-10 md:px-0 lg:mb-12">
                <h2 className="font-heading text-2xl font-semibold md:text-3xl lg:text-4xl">
                  THÀNH TỰU NS GROUP
                </h2>
                <p className="font-montserrat max-w-xl text-[14px] leading-relaxed text-[#a09494] md:text-[15px]">
                  Những thành tựu nổi bật của NS Group trong ngành F&B và du
                  lịch - bất động sản nghỉ dưỡng qua từng mốc thời gian quan
                  trọng.
                </p>
              </div>
            </div>
            <div className="mb-16 flex flex-col md:mb-20 lg:mb-32 lg:flex-row lg:justify-between lg:gap-x-[80px] xl:gap-x-[140px]">
              {/* Cột Trái: Ảnh */}
              <div className="w-full lg:w-[45%] xl:w-1/2">
                <ImageTimeLine />
              </div>

              {/* Cột Phải: Text */}
              <div className="mt-12 flex w-full flex-col gap-y-12 lg:mt-0 lg:w-[55%] lg:gap-y-16 xl:w-1/2">
                <Timeline title={"NGÀNH F&B"} data={TIMELINE_FNB_DATA} />
                <Timeline
                  title={"NGÀNH DU LỊCH - BĐS NGHỈ DƯỠNG"}
                  data={TIMELINE_ESTATE_DATA}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
