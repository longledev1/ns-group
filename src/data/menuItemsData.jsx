export const MENU_ITEMS = [
  {
    id: 1,
    label: "Trang chủ",
    path: "/",
  },
  {
    id: 2,
    label: "Về chúng tôi",
    path: "/about-us",
  },
  {
    id: 3,
    label: "Bất động sản",
    children: [
      {
        id: "3-1",
        label: "Exotel Yen Bay",
        path: "/estate/exotel-yen-bay",
      },
      {
        id: "3-2",
        label: "Yen Bay Retreat",
        path: "/estate/yen-bay-retreat",
      },
    ],
  },
  {
    id: 4,
    label: "Dịch vụ ăn uống",
    children: [
      {
        id: "4-1",
        label: "Saigon Marina",
        path: "/fnb/saigon-marina",
      },
      {
        id: "4-2",
        label: "Trai Mat",
        path: "/fnb/trai-mat",
      },
      {
        id: "4-3",
        label: "KingClam Grill Bar",
        path: "/fnb/kingclam-grill-bar",
      },
    ],
  },
  {
    id: 6,
    label: "Thư viện",
    path: "/gallery",
  },
  {
    id: 5,
    label: "Liên hệ",
    path: "/contact",
  },
];
