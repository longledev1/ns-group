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
        <div className="flex flex-col gap-y-[150px]">
          <StoryNSG />
          <ImageHistory />
          <div>
            <div className="mb-10 flex flex-col gap-y-2">
              <p className="text-3xl font-semibold italic">
                NHỮNG THÀNH TỰU TRONG 20 NĂM
              </p>
              <div className="bg-CTA h-1 w-45"></div>
            </div>
            <div className="grid grid-cols-2 gap-x-[140px]">
              <ImageTimeLine />
              <div className="flex flex-col gap-y-4">
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
