import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Cấu trúc dữ liệu mới: Gộp Slider và Menu Items lại với nhau
const categoriesData = [
  {
    id: 1,
    title: "Bánh Lạnh",
    image: "https://images.unsplash.com/photo-1708175313856-8573b2bf8a3a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Ảnh bánh mousse/cake
    items: [
      { name: "Summer forest (Khu rừng mùa hè)", image: "/images/fnb/exocafe/exomenu_2.png" },
      { name: "Humming bird (Bánh phô mai vị chuối và hạt)", image: "https://cdn.tgdd.vn/Files/2020/06/01/1260018/cach-lam-banh-muffin-chuoi-kem-pho-mai-16.png" },
      { name: "Tropical notes (Opera phiên bản xoài + chanh dây)", image: "https://instagram.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/435508948_821494839999529_3279018980380416976_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzM0MzcxOTI4ODA1MzMzMzcwMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjIwNDh4MjA0OC5zZHIuQzMifQ%3D%3D&_nc_ohc=-iEMupiUf6IQ7kNvwEBBjfX&_nc_oc=AdpEl81qF7UrTeRaOXO-HJc0MgpJTHUkqqJwMpLhmYW1HvG6LbMQFyi-xpMPDWp1OVhMwho4A5Zu7VHrAr8PTY_i&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fsgn5-15.fna&_nc_gid=fEt7ifCepjmgJmIvR_VRPQ&_nc_ss=8&oh=00_Afyo2NcwD1fqojZFIbWptkjEo6HDJC2QBkPcjGFI1ga9iQ&oe=69C1FB04" },
      { name: "Passion fruit cheese cake", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=500&auto=format&fit=crop" },
      { name: "Orange & chocolate mousse cake", image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=500&auto=format&fit=crop" },
      { name: "Mango & lychee mousse cake", image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=500&auto=format&fit=crop" },
    ],
  },
  {
    id: 2,
    title: "Bánh Nướng",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1920&auto=format&fit=crop", // Ảnh bánh nướng/tart
    items: [
      { name: "Bánh phô mai trứng muối", image: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=500&auto=format&fit=crop" },
      { name: "Bánh tart kiểu Creme Brulee, vị chanh dây", image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=500&auto=format&fit=crop" },
      { name: "Bánh Choux vị dulce caramel", image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=500&auto=format&fit=crop" },
      { name: "Bánh Choux vị phô mai kèm dâu tươi", image: "https://images.unsplash.com/photo-1612201142855-7873bc1661b4?q=80&w=500&auto=format&fit=crop" },
      { name: "Bánh cookies nhân trái cây khô", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=500&auto=format&fit=crop" },
      { name: "Bánh socola nóng, dùng với kem tự chọn", image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=500&auto=format&fit=crop" },
    ],
  },
  {
    id: 3,
    title: "Cà Phê Việt Nam Biến Tấu",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1920&auto=format&fit=crop", // Ảnh cà phê hiện đại
    items: [
      { name: "Cà phê vị tiramisu", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=500&auto=format&fit=crop" },
      { name: "Cà phê vị sốt Dulce caramel", image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=500&auto=format&fit=crop" },
      { name: "Cà phê sữa ngâm với hạnh nhân nướng", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=500&auto=format&fit=crop" },
      { name: "Sữa đậu nành cà phê", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=500&auto=format&fit=crop" },
      { name: "Cà phê ba màu", image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=500&auto=format&fit=crop" },
    ],
  },
  {
    id: 4,
    title: "Cà Phê Việt Nam Truyền Thống",
    image: "/images/fnb/exocafe/imgtropislide1.png", // Ảnh cà phê phin
    items: [
      { name: "Cà phê đen đá", image: "https://images.unsplash.com/photo-1568644396922-5c3bfae12521?q=80&w=500&auto=format&fit=crop" },
      { name: "Cà phê sữa đá", image: "https://images.unsplash.com/photo-1558584672-c7f7690623f9?q=80&w=500&auto=format&fit=crop" },
    ],
  },
  {
    id: 5,
    title: "Thức Uống Pha Chế Đặc Biệt",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=1920&auto=format&fit=crop", // Ảnh nước trái cây/soda
    items: [
      { name: "Trà ô long ngâm trái cây", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=500&auto=format&fit=crop" },
      { name: "Trà trái vải ngâm lá bạc hà, chanh", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500&auto=format&fit=crop" },
      { name: "Nước soda pha cam, đào, lá bạc hà", image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=500&auto=format&fit=crop" },
      { name: "Nước dừa tươi kèm khóm nướng, mứt tắc", image: "https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?q=80&w=500&auto=format&fit=crop" },
      { name: "Trà ngâm vỏ cam, topping đào & xoài", image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=500&auto=format&fit=crop" },
      { name: "Trà chanh dây với lớp kem phô mai", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=500&auto=format&fit=crop" },
    ],
  },
  {
    id: 6,
    title: "Kem",
    image: "https://images.unsplash.com/photo-1557142046-c704a3adf364?q=80&w=1920&auto=format&fit=crop", // Ảnh kem
    items: [
      { name: "Kem Vani & Caramel", image: "https://images.unsplash.com/photo-1563805042-7684c8a9e9ce?q=80&w=500&auto=format&fit=crop" },
      { name: "Kem Socola nguyên chất", image: "https://images.unsplash.com/photo-1570197783639-08709503fae8?q=80&w=500&auto=format&fit=crop" },
      { name: "Kem Trái cây nhiệt đới", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=500&auto=format&fit=crop" },
    ],
  },
];

const MenuFood = () => {
  // Thay vì lưu boolean, ta lưu luôn Object của Category đang được chọn
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="relative w-full mt-[50px] mb-[120px]">
      {/* ================= KHỐI SWIPER SLIDER ================= */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".custom-next-btn",
          prevEl: ".custom-prev-btn",
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        // loop={true}
        // speed={800}
        className="h-[400px] w-full md:h-[500px] lg:h-[650px]"
      >
        {categoriesData.map((category) => (
          <SwiperSlide key={category.id}>
            <div className="relative h-full w-full rounded-md overflow-hidden">
              <img
                loading="lazy"
                src={category.image}
                alt={category.title}
                className="h-full w-full object-cover"
              />
              
              <div className="absolute inset-0 bg-black/60"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                <h2 className="uppercase mb-10 text-3xl font-montserrat font-bold tracking-wide text-white md:text-5xl lg:text-6xl">
                  {category.title}
                </h2>
                
                <button
                  // Khi click, truyền data của category hiện tại vào State
                  onClick={() => setActiveCategory(category)}
                  className="border font-montserrat cursor-pointer border-white bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black md:px-10 md:py-3.5 md:text-base"
                >
                  XEM MENU
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Nút điều hướng */}
        <button className="custom-prev-btn absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 text-white transition-all hover:bg-white/20 md:left-8 md:h-12 md:w-12">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="h-5 w-5 md:h-6 md:w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
        <button className="custom-next-btn absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 text-white transition-all hover:bg-white/20 md:right-8 md:h-12 md:w-12">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="h-5 w-5 md:h-6 md:w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </Swiper>

      {/* ================= MODAL XEM MENU ================= */}
      {/* Chỉ hiển thị khi activeCategory có dữ liệu */}
      {activeCategory && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setActiveCategory(null)} 
        >
          <div 
            className="relative w-full max-w-5xl overflow-hidden rounded-xl bg-[#FDFBF7] shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Header Modal - Hiển thị Tên Danh Mục Đang Xem */}
            <div className="flex items-center justify-between border-b border-gray-200 bg-[#FDFDF6] px-6 py-4">
              <h3 className="font-montserrat text-xl font-bold text-[#3A332B] uppercase tracking-wider md:text-2xl">
                Thực đơn: {activeCategory.title}
              </h3>
              <button 
                onClick={() => setActiveCategory(null)}
                className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-black"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Body Modal - Render các món của danh mục đó */}
            <div className="max-h-[75vh] overflow-y-auto p-4 md:p-6 lg:p-8">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
                {activeCategory.items.map((item, index) => (
                  <div key={index} className="group flex flex-col items-center overflow-hidden rounded-lg bg-white p-3 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="relative w-full overflow-hidden rounded-md aspect-square bg-gray-100">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    {/* Tên món tự động căn giữa và xuống dòng mượt mà */}
                    <p className="font-montserrat mt-4 min-h-[40px] text-center text-[13px] font-semibold text-[#3A332B] md:text-sm">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuFood;