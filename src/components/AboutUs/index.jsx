export const AboutUs = () => {
  return (
    <div className="text-primary">
      <div className="container">
        <div className="flex flex-col gap-y-[10px]">
          <div className="border-CTA relative top-[-80px] w-full border">
            <div className="mt-30 p-10 leading-[32px]">
              <h2 className="text-CTA mb-6 text-4xl font-bold">
                CÂU CHUYỆN BẮT ĐẦU
              </h2>

              {/* Image float */}
              <img
                src="/images/cook2.jpg"
                alt=""
                className="float-right mb-6 ml-10 w-[420px]"
              />

              <p className="mb-4">
                <b className="text-xl">NSG</b> được sáng lập bởi ông Trần Anh
                Dũng, người đã có hơn 40 năm kinh nghiệm trên thị trường F&B
                trong và ngoài nước. Ông cũng là con ruột của ông Trần Tương,
                người đã từng rất thành công trong việc xây dựng thương hiệu từ
                những năm 1955.
              </p>

              <p className="mb-4">
                Kể từ khi tham gia vào thị trường ẩm thực, ông Trần Anh Dũng đã
                xây dựng riêng cho mình một chuỗi các nhà hàng hải sản khắp nơi,
                bao gồm 4 nhà hàng tại Pháp và hơn 8 nhà hàng trong nước. Cho
                đến nay, khách hàng đều vẫn ưa chuộng những món ăn do chính ông
                sáng tạo:{" "}
                <b className="text-CTA italic">
                  Gỏi Cá, Nghêu Hấp Vang Pháp, Chả Giò Hải Sản, Cơm Nồi Đất, Tôm
                  Sú Xỉn, Tôm Đút Lò Thermidor...
                </b>
              </p>

              <p>
                Với xu hướng ngày càng phát triển của thị trường ẩm thực đòi hỏi
                sự phát triển của chất lượng ẩm thực. Ông Trần Anh Dũng cùng các
                cộng sự đã cho ra đời nhiều thương hiệu ẩm thực mới, đáp ứng đa
                dạng hơn nhu cầu của thị trường. NSG chính là cái nôi nuôi dưỡng
                nghề nghiệp, con người và tình yêu dành cho ẩm thực. Để từ đó,
                những thương hiệu mới dưới sự dìu dắt của NSG sẽ tìm ra con
                đường đi của riêng mình.
              </p>

              {/* Clear float nếu bên dưới còn section khác */}
              <div className="clear-both" />
            </div>
          </div>
          <div className="flex items-center justify-between gap-10">
            <div className="ml-[120px] max-w-xl text-left text-[18px] leading-[32px] italic">
              Trại Mát Ngọc Sương - tại Ba Ngòi, Cam Ranh - là cái nôi nuôi
              dưỡng tình yêu dành cho ẩm thực. Món ăn dân dã, nụ cười niềm nở
              của chủ nhà cộng với không khí gia đình ấm áp, nơi đây từng là
              điểm thu hút rất nhiều thực khách địa phương và khách du lịch.
            </div>
            <div className="relative h-full w-full overflow-hidden">
              <img
                src="/images/ongTranTuong1.avif"
                className="h-full w-full object-cover"
                alt=""
              />
              <div className="bg-tertiary/90 text-CTA absolute right-0 bottom-0 left-0 p-6">
                <p className="italic">
                  Ảnh chụp ông Trần Tương (phải) và du khách người Hàn Quốc
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
