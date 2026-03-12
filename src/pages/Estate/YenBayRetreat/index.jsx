import Overview from "../../../components/Estate/YenBayRetreat/Overview";
import Location from "../../../components/Estate/YenBayRetreat/Location";
import MasterPlan from "../../../components/Estate/YenBayRetreat/MasterPlan";
import Arch from "../../../components/Estate/YenBayRetreat/Arch";
import Partner from "../../../components/Estate/YenBayRetreat/Partner";
import Vacation from "../../../components/Estate/YenBayRetreat/Vacation";
import Buisness from "../../../components/Estate/YenBayRetreat/Business";

const YenBayRetreat = () => {
  return (
    <div className="text-primary overflow-x-hidden">
      {/* 1. Xóa bỏ mb-20 ở các thẻ con vì flex gap-y đã làm thay nhiệm vụ đó. 
          2. Scale khoảng cách dọc mượt mà: Mobile 64px (16) -> Tablet 96px (24) -> Desktop 150px 
      */}
      <div className="container mx-auto flex flex-col gap-y-16 md:gap-y-24 lg:gap-y-[150px]">
        {/* Giảm margin top trên mobile để nội dung sát với header hơn */}
        <div className="mt-8 md:mt-16 lg:mt-20">
          <Overview />
        </div>

        <div>
          <Location />
        </div>

        <div>
          <MasterPlan />
        </div>

        <div>
          <Arch />
        </div>

        <div>
          <Partner />
        </div>
      </div>

      {/* Vacation Section (Nghỉ dưỡng nội khu) nằm ngoài container vì nó có thể chứa ảnh full-width
          Responsive mt: trên mobile là mt-16 để giãn cách bình thường, lên Desktop mới dùng margin âm (mt-[-50px]) để tạo hiệu ứng đè 
      */}
      <div className="mt-16 md:mt-24 lg:mt-[-50px]">
        <Vacation />
      </div>

      {/* Business Section (Chính sách bán hàng) */}
      <div className="container mx-auto">
        <div className="mt-16 mb-16 md:mt-24 md:mb-20 lg:mt-[150px] lg:mb-[120px]">
          <Buisness />
        </div>
      </div>
    </div>
  );
};

export default YenBayRetreat;
