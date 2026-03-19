import React from 'react';

const LocationSection = () => {
  return (
    // Sử dụng màu nền nhạt tương đồng với các section trước
    <section className="relative mt-[130px] mb-[130px] w-full overflow-hidden py-16 md:py-24">
      {/* TRANG TRÍ CHIẾC LÁ GÓC PHẢI */}
      {/* Bạn thay "/images/leaf-decor.png" bằng đường dẫn ảnh chiếc lá thật của bạn nhé */}
      <img
        src="/images/estate/exotel/shape.png"
        alt=""
        className="pointer-events-none absolute top-20 right-0 w-32 translate-x-1/4 opacity-60 md:w-64"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center">
        {/* TIÊU ĐỀ */}
        <h2 className="font-heading mb-8 text-center text-4xl font-bold text-[#3d3832] md:mb-12 md:text-5xl">
          Di chuyển tới Exotel Yenbay
        </h2>

        {/* NỘI DUNG VĂN BẢN */}
        <div className="font-montserrat mx-auto max-w-5xl space-y-6 text-center text-sm leading-[1.8] text-gray-600 md:text-sm">
          <p>
            <span className="font-semibold text-[#3d3832]">Exotel Yen Bay</span>{" "}
            tọa lạc tại thôn Bình Lập, xã Cam Lập, thành phố Cam Ranh – một khu
            nghỉ dưỡng yên bình ven biển nổi bật của Khánh Hòa, cách sân bay
            quốc tế{" "}
            <span className="font-semibold text-[#3d3832]">
              Cam Ranh (CXR) khoảng 13–14 km
            </span>{" "}
            theo tuyến đường bộ.
          </p>
          <p>
            Từ các thành phố lớn của Việt Nam, du khách có thể dễ dàng tiếp cận
            vùng đất này bằng các chuyến bay nội địa đến sân bay Cam Ranh. Các
            chuyến bay từ{" "}
            <span className="font-semibold text-[#3d3832]">
              TP. Hồ Chí Minh đến Cam Ranh thường chỉ mất khoảng 1 giờ 30 phút
            </span>{" "}
            trên máy bay, và{" "}
            <span className="font-semibold text-[#3d3832]">
              Hà Nội thì thời gian bay đến Cam Ranh vào khoảng 1 giờ 50 phút – 2
              giờ
            </span>
            , tùy hãng và lịch bay.
          </p>
          <p>
            Sau khi hạ cánh tại sân bay Cam Ranh, bạn có thể di chuyển bằng
            taxi, dịch vụ xe riêng hoặc xe đưa đón để đến Exotel Yen Bay trong
            khoảng{" "}
            <span className="font-semibold text-[#3d3832]">
              20–30 phút lái xe
            </span>{" "}
            — một quãng đường ngắn để bắt đầu khám phá vẻ đẹp biển xanh, cát
            trắng và không gian nghỉ dưỡng thanh bình của vùng đất này.
          </p>
          <p>
            Đội ngũ của Exotel Yen Bay luôn sẵn sàng hỗ trợ du khách trong việc
            lựa chọn phương tiện di chuyển phù hợp và lập kế hoạch khám phá để
            hành trình của bạn đến Cam Lập thêm phần trọn vẹn.
          </p>
        </div>

        {/* BẢN ĐỒ (MAP PLACEHOLDER) */}
        {/* Aspect-video giúp duy trì tỷ lệ 16:9 chuẩn cho bản đồ trên mọi thiết bị */}
        <div className="mt-16 flex aspect-video w-full items-center justify-center bg-[#dcdcdc] md:aspect-auto md:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.5807500292544!2d109.1753360745309!3d11.864592538181844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3170ed3f0279d72f%3A0xab8682926f312eef!2sExotel%20Yen%20Bay!5e0!3m2!1svi!2s!4v1773393274689!5m2!1svi!2s"
            className="h-full w-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;