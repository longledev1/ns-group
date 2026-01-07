export const MENU_ITEMS = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    label: "About Us",
    path: "/about-us",
  },
  {
    id: 3,
    label: "Projects",
    children: [
      {
        id: "3-1",
        label: "Exotel Yen Bay",
        path: "/projects/exotel-yen-bay",
      },
      {
        id: "3-2",
        label: "Yen Bay Retreat",
        path: "/projects/yen-bay-retreat",
      },
    ],
  },
  {
    id: 4,
    label: "Food & Beverage",
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
      {
        id: "4-2",
        label: "Trai Mat",
        path: "/fnb/trai-mat",
      },
    ],
  },
  {
    id: 6,
    label: "Gallery",
    path: "/gallery",
  },
  {
    id: 5,
    label: "Contact",
    path: "/contact",
  },
];
