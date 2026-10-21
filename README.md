# 🌊 NGỌC SƯƠNG GROUP (NSG) — OFFICIAL PORTAL

> **Cổng thông tin chính thức của Tập đoàn Ngọc Sương (NS Group)** — Nơi gìn giữ di sản ẩm thực truyền thống Việt Nam từ năm 1955, kết hợp hệ sinh thái ẩm thực cao cấp (F&B) và bất động sản nghỉ dưỡng sinh thái (Eco-Resorts & Retreats).

---

## 📌 MỤC LỤC
1. [Giới thiệu Tổng quan](#-giới-thiệu-tổng-quan)
2. [Công nghệ Sử dụng (Tech Stack)](#-công-nghệ-sử-dụng-tech-stack)
3. [Cấu trúc Thư mục Dự án (Project Structure)](#-cấu-trúc-thư-mục-dự-án-project-structure)
4. [Các Phân hệ & Trang Chính (Key Modules & Pages)](#-các-phân-hệ--trang-chính-key-modules--pages)
5. [Kiến trúc Dữ liệu (Data Architecture)](#-kiến-trúc-dữ-liệu-data-architecture)
6. [Hệ thống Thiết kế & Bản sắc Thương hiệu (Design System)](#-hệ-thống-thiết-kế--bản-sắc-thương-hiệu-design-system)
7. [Hướng dẫn Cài đặt & Vận hành (Getting Started)](#-hướng-dẫn-cài-đặt--vận-hành-getting-started)

---

## 🏛️ GIỚI THIỆU TỔNG QUAN

Website **Ngọc Sương Group (NSG)** được xây dựng nhằm giới thiệu toàn diện về lịch sử, giá trị văn hóa và hệ sinh thái đa ngành của thương hiệu Ngọc Sương trải dài suốt hơn 6 thập kỷ:

* **Di sản Khởi nguồn từ 1955:** Từ quán ăn *Trại Mát Ngọc Sương* mộc mạc tại Ba Ngòi (Cam Ranh) do cụ Trần Tương sáng lập, đến hành trình phát triển vươn tầm quốc tế dưới sự dẫn dắt của Bếp trưởng / Chủ tịch Trần Anh Dũng.
* **Hệ sinh thái F&B Đa thương hiệu:** Chuỗi nhà hàng hải sản cao cấp và không gian trải nghiệm ẩm thực: *Saigon Marina (SGM), King Clam, Exo Café, Trại Mát, Chợ Cũ...*
* **Bất Động Sản & Nghỉ Dưỡng Sinh Thái:** Những dự án nghỉ dưỡng hòa mình vào thiên nhiên kỳ vĩ tại Vịnh Cam Ranh: *Yen Bay Retreat, Exotel Yến Bay...*

---

## 💻 CÔNG NGHỆ SỬ DỤNG (TECH STACK)

| Thành phần | Công nghệ | Phiên bản | Mô tả chi tiết |
| :--- | :--- | :--- | :--- |
| **Core Framework** | [React](https://react.dev/) | `^19.2.0` | Thư viện giao diện người dùng hiện đại nhất với hiệu năng tối ưu |
| **Build Tool & Bundler** | [Vite](https://vitejs.dev/) | `^7.2.4` | Công cụ đóng gói siêu tốc, hỗ trợ HMR (Hot Module Replacement) |
| **CSS Framework** | [Tailwind CSS](https://tailwindcss.com/) | `^4.1.18` | Tailwind v4 với CSS-first theme configuration (`@theme`) |
| **Routing** | [React Router DOM](https://reactrouter.com/) | `^7.11.0` | Hệ thống định tuyến Router v7 (`createBrowserRouter`) |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) | `^12.23.26` | Xử lý hoạt ảnh, hiệu ứng chuyển trang và tương tác mượt mà |
| **Carousel / Slider** | [Swiper](https://swiperjs.com/) | `^12.1.0` | Trình chiếu slide ảnh, testimonial và timeline responsive |
| **Linting & Formatting** | ESLint & Prettier | `^9.39` / `^3.7` | Chuẩn hóa cú pháp code và sắp xếp class Tailwind tự động |

---

## 📂 CẤU TRÚC THƯ MỤC DỰ ÁN (PROJECT STRUCTURE)

```text
ns-group/
├── public/                       # Tài nguyên tĩnh phục vụ trực tiếp cho web
│   ├── fonts/                    # Font độc quyền (Rische Demo font)
│   ├── images/                   # Hình ảnh tối ưu hóa theo danh mục
│   │   ├── aboutpage/            # Ảnh tư liệu lịch sử cho trang About Us
│   │   ├── estate/               # Ảnh các dự án BĐS (Exotel, Yen Bay)
│   │   ├── fnb/                  # Ảnh món ăn, logo và không gian (SGM, King Clam, Exo Cafe)
│   │   ├── hero/                 # Ảnh nền banner chất lượng cao (Resort, Marina, Yến Bay)
│   │   ├── homepage/             # Ảnh phục vụ các section trang chủ (about, brand, culture, map...)
│   │   └── Villa Image/          # Bộ sưu tập ảnh thực tế các khu biệt thự nghỉ dưỡng
│   └── videos/                   # Video tư liệu & background (exoCafe_video.mp4...)
│
├── src/                          # Mã nguồn ứng dụng chính
│   ├── assets/                   # Tài nguyên xử lý qua bundler (svg, icons...)
│   ├── components/               # Thư viện component tái sử dụng (Shared & Sections)
│   │   ├── AboutUs/              # Component trang Về chúng tôi (Story, Timeline, ImageHistory...)
│   │   ├── ComingSoon.jsx        # Trang thông báo dự án đang phát triển
│   │   ├── Estate/               # Component riêng cho khối BĐS Nghỉ dưỡng
│   │   │   ├── Exotel/           # Sections: ForestVilla, Nature, Overview, SeasonsSlider...
│   │   │   └── YenBayRetreat/    # Sections: ArchitecturePlans, MasterPlan, Vacation...
│   │   ├── FNB/                  # Component riêng cho khối Ẩm thực
│   │   │   ├── ExoCafe/          # Sections: Signature, Space, Tropicana, MenuFood...
│   │   │   ├── KingClam/         # Sections: GrillBar, MenuKingClam, Moment, CardFood...
│   │   │   └── SGM/              # Sections: ContentSGM, FoodSGM, SignatureSGM, SpaceSGM...
│   │   ├── Footer/               # Footer toàn trang chứa thông tin liên hệ & bản quyền
│   │   ├── Header/               # Thanh điều hướng thông minh + SideMenu trượt (Drawer)
│   │   ├── Heading.jsx           # Tiêu đề đồng bộ cho từng phân đoạn nội dung
│   │   ├── Hero/                 # Hero Banner đa biến thể (Home, About, FNB, Estate)
│   │   ├── Home/                 # Các Section chuyên biệt của Trang Chủ:
│   │   │   ├── AboutSection/     # Chuyện sáng lập & Triết lý "Cho đời đẹp hơn"
│   │   │   ├── BrandSection/     # Hệ sinh thái các thương hiệu thành viên
│   │   │   ├── ContactForm/      # Biểu mẫu đăng ký nhận tin & tư vấn
│   │   │   ├── CultureSection/   # Giá trị giao thoa giữa ẩm thực và không gian
│   │   │   ├── JourneySection/   # Hành trình di sản kèm Lightbox phóng to ảnh
│   │   │   ├── MapSection/       # Bản đồ tương tác SVG 3 miền Việt Nam
│   │   │   └── SlideSection/     # Slider giới thiệu dự án nghỉ dưỡng tiêu biểu
│   │   └── Section/              # Layout wrapper chuẩn hóa padding & container
│   │
│   ├── data/                     # Dữ liệu tĩnh tập trung (Single Source of Truth)
│   │   ├── heroData.jsx          # Cấu hình banner tương ứng theo từng URL route
│   │   ├── menuItemsData.jsx     # Cấu trúc menu điều hướng
│   │   ├── projectsData.jsx      # Dữ liệu dự án F&B và BĐS
│   │   ├── provinceData.jsx      # Dữ liệu dấu ấn địa phương theo từng vùng miền
│   │   └── timelineData.jsx      # Dữ liệu mốc thời gian lịch sử (F&B và Du lịch)
│   │
│   ├── layouts/                  # Layout tổng thể bọc các trang
│   │   └── MainLayout.jsx        # Điều phối Header động, Hero tự động & Footer
│   │
│   ├── pages/                    # Các trang hiển thị chính (Route Views)
│   │   ├── Estate/               # Trang YenBayRetreat & Exotel
│   │   ├── FNB/                  # Trang SGM, KingClam, ExoCafe
│   │   ├── HomePage/             # Trang chủ chính
│   │   ├── NotFoundPage.jsx      # Trang lỗi 404
│   │   └── TestPage.jsx          # Trang thử nghiệm tính năng
│   │
│   ├── routes/                   # Cấu hình điều hướng ứng dụng
│   │   └── index.jsx             # Router map toàn bộ đường dẫn website
│   │
│   ├── App.jsx                   # Component khởi tạo chính
│   ├── index.css                 # CSS toàn cục, khai báo font-face và Tailwind @theme
│   └── main.jsx                  # Điểm khởi chạy ứng dụng (DOM mount)
│
├── eslint.config.js              # Cấu hình bộ kiểm tra chất lượng code ESLint
├── index.html                    # File HTML gốc (Template entry)
├── package.json                  # Quản lý dependencies & scripts dự án
└── vite.config.js                # Cấu hình Vite & Tailwind CSS Vite plugin
```

---

## 🎯 CÁC PHÂN HỆ & TRANG CHÍNH (KEY MODULES & PAGES)

### 1. Trang Chủ (`/` — `HomePage`)
Trang chủ đóng vai trò kể lại toàn bộ bức tranh đa chiều về NS Group thông qua mạch câu chuyện liền mạch:
* **Dynamic Hero:** Banner mở đầu ấn tượng với hình ảnh Vịnh Cam Ranh, tiêu đề nghệ thuật cùng khẩu hiệu chào mừng.
* **Culture Section:** Khẳng định 2 trụ cột *"Nơi Ẩm thực gặp gỡ Nghệ thuật"* và *"Nơi Không gian gặp gỡ Cảm xúc"*.
* **Journey Section:** Trưng bày các tư liệu hình ảnh lịch sử từ năm 1955, tích hợp trình xem ảnh toàn màn hình (Lightbox) linh hoạt.
* **Map Section:** Bản đồ Việt Nam SVG tương tác trực quan theo 3 miền Bắc – Trung – Nam, chọn từng miền để xem các cơ sở và dự án tương ứng.
* **Founder's Story (About Section):** Triết lý sáng lập *"Cho đời đẹp hơn"* của Bếp trưởng Trần Anh Dũng.
* **Slide Section:** Slide ảnh trình diễn hai khu nghỉ dưỡng tiêu biểu Exotel Yến Bay và Yen Bay Retreat.
* **Brand Ecosystem:** Danh mục các thương hiệu thành viên: *SGM, King Clam, Exo Café, Trại Mát, Chợ Cũ, Yến, Nom...*

### 2. Trang Về Chúng Tôi (`/about-us` — `AboutUs`)
Tập trung chuyên sâu vào lịch sử và dấu ấn thành tựu của tập đoàn:
* **StoryNSG:** Khởi nguồn từ ông Trần Tương (1955) và hành trình kế nghiệp của ông Trần Anh Dũng (từ 1968), ghi dấu những món ăn làm nên thương hiệu như *Gỏi Cá Ngọc Sương, Nghêu hấp vang Pháp, Tôm đút lò Thermidor...*
* **Timeline Thành Tựu:** Phân loại rõ ràng thành 2 dòng thời gian độc lập:
  * **Ngành F&B (1968 – 2022):** Từ Trại Mát Cam Ranh, cơ sở bánh cưới Le Bucher (1969), chuỗi nhà hàng tại Pháp (1982 - 1987), đến các chi nhánh Sài Gòn, Hà Nội, Nha Trang, Mũi Né...
  * **Ngành Du Lịch & BĐS Nghỉ Dưỡng (1993 – 2013):** Dự án Khu Du Lịch Sinh Thái Ngọc Sương, dấu ấn với hai tác phẩm điện ảnh kinh điển *"Những Nụ Hôn Rực Rỡ"* (2010) và *"Mỹ Nhân Kế"* (2013).

### 3. Phân Hệ F&B (`/fnb/*`)
* **Saigon Marina (`/fnb/saigon-marina`):** Nhà hàng hải sản đẳng cấp lấy cảm hứng từ du thuyền sang trọng.
* **King Clam (`/fnb/kingclam`):** Không gian Grill & Bar thượng hạng với nghệ thuật nướng than củi kết hợp rượu cao cấp.
* **Exo Café (`/fnb/exo-cafe`):** Quán cà phê mang phong cách nhiệt đới, quầy bar mở tương tác và video nền sống động.

### 4. Phân Hệ BĐS & Nghỉ Dưỡng (`/estate/*`)
* **Yen Bay Retreat (`/estate/yen-bay-retreat`):** Lối vào uốn lượn ven vách núi, view biển xanh vô tận, kiến trúc biệt lập.
* **Exotel Yến Bay (`/estate/exotel-yenbay`):** Không gian nghỉ dưỡng hòa mình cùng đá hoa cương và bờ vịnh Cam Ranh tĩnh lặng.

---

## 🗄️ KIẾN TRÚC DỮ LIỆU (DATA ARCHITECTURE)

Toàn bộ dữ liệu nội dung của website được quản lý tập trung tại thư mục `src/data/`, giúp việc bảo trì và cập nhật trở nên dễ dàng:

1. **`heroData.jsx`:** Quản lý dữ liệu Hero Banner tương ứng theo từng route (`image`, `title`, `subtitle`, `video`, `layout`). Layout `MainLayout` tự động đọc đường dẫn URL hiện tại để hiển thị banner phù hợp mà không cần cấu hình thủ công ở từng trang con.
2. **`timelineData.jsx`:** Quản lý toàn bộ biên niên sử thành tựu với hai mảng dữ liệu `TIMELINE_FNB_DATA` và `TIMELINE_ESTATE_DATA`.
3. **`provinceData.jsx`:** Dữ liệu dự án gắn liền với toạ độ và vùng miền trên bản đồ tương tác.
4. **`projectsData.jsx` & `menuItemsData.jsx`:** Lưu trữ danh mục menu và dự án tổng hợp.

---

## 🎨 HỆ THỐNG THIẾT KẾ & BẢN SẮC THƯƠNG HIỆU (DESIGN SYSTEM)

### 1. Bảng màu Nhận diện (Brand Colors)
Được cấu hình chuẩn hóa trong `src/index.css` qua chuẩn Tailwind v4:
* **Primary (`#3D3832`):** Màu nâu trầm cổ điển, đại diện cho đất mẹ, gỗ mộc và sự vững chãi của di sản.
* **Secondary (`#FEFDF4`):** Màu trắng ngà ấm áp, tạo cảm giác sang trọng, trang nhã tựa giấy lụa truyền thống.
* **Tertiary (`#3A332B`):** Màu nâu espresso đậm nét cho các thanh thông tin và điểm nhấn phụ.
* **CTA Accent (`#CFB26E`):** Màu vàng kim vương giả, dùng cho các nút kêu gọi hành động, đường line trang trí và mốc thời gian.

### 2. Hệ Thống Typography
Sự kết hợp tinh tế giữa phong cách cổ điển phương Tây và hồn cốt Việt Nam:
* **Heading Face:** `Rische` *(font riêng nhúng qua `@font-face`)* & `Cormorant Garamond` (Serif uy nghi, quyền quý).
* **Body Face:** `Montserrat` & `Lora` (Thanh thoát, dễ đọc, độ tương phản dịu mắt trên mọi màn hình).
* **Cursive Accent:** `Allura` & `Oooh Baby` (Tạo nét mềm mại, thủ bút cho các trích dẫn và lời chào).

---

## 🚀 HƯỚNG DẪN CÀI ĐẶT & VẬN HÀNH (GETTING STARTED)

### 1. Yêu cầu Môi trường
* **Node.js:** Phiên bản `>= 18.x` trở lên
* **Trình quản lý gói:** `npm` (hoặc `yarn`, `pnpm`)

### 2. Cài đặt Dependencies
Mở terminal tại thư mục gốc của dự án:
```bash
npm install
```

### 3. Chạy Môi trường Phát triển (Development)
Khởi chạy máy chủ phát triển cục bộ với tính năng Hot-Reload:
```bash
npm run dev
```
Mặc định website sẽ chạy tại: `http://localhost:5173/`

### 4. Đóng gói Ứng dụng (Production Build)
Biên dịch và tối ưu hóa mã nguồn cho môi trường thực tế:
```bash
npm run build
```
Thư mục sản phẩm cuối cùng sẽ được tạo tại `dist/`.

### 5. Xem trước Bản Đóng gói (Preview Production)
```bash
npm run preview
```

### 6. Kiểm tra & Chuẩn hóa Mã nguồn (Linting)
```bash
npm run lint
```

---

© 2026 **Ngọc Sương Group (NSG)**. All rights reserved.
