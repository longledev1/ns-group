import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout.jsx";
import { HomePage } from "../pages/HomePage/index.jsx";
import { AboutUs } from "../components/AboutUs/index.jsx";
import { SGM, KingClam } from "../pages/FNB/index.jsx";
import YenBayRetreat from "../pages/Estate/YenBayRetreat/index.jsx";
import Exotel from "../pages/Estate/Exotel/index.jsx";
import ComingSoon from "../components/ComingSoon.jsx";
import NotFound from "../pages/NotFoundPage.jsx";
const router = createBrowserRouter([
  // Main Site Routes
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },

  // About Us Route
  {
    path: "/about-us",
    element: <MainLayout />,
    children: [{ index: true, element: <AboutUs /> }],
  },

  // FNB Routes
  {
    path: "/fnb/saigon-marina",
    element: <MainLayout />,
    children: [{ index: true, element: <SGM /> }],
  },
  {
    path: "/fnb/kingclam",
    element: <MainLayout />,
    children: [{ index: true, element: <KingClam /> }],
  },
  {
    path: "/fnb/exo-cafe",
    children: [{ index: true, element: <ComingSoon /> }],
  },
  {
    path: "/fnb/traimat",
    children: [{ index: true, element: <ComingSoon /> }],
  },
  {
    path: "/fnb/cho-cu",
    children: [{ index: true, element: <ComingSoon /> }],
  },

  // Estate Routes
  {
    path: "/estate/yen-bay-retreat",
    element: <MainLayout />,
    children: [{ index: true, element: <YenBayRetreat /> }],
  },
  {
    path: "/estate/exotel-yenbay",
    element: <MainLayout />,
    children: [{ index: true, element: <Exotel /> }],
  },
  // Gallery
  {
    path: "/gallery",
    children: [{ index: true, element: <ComingSoon /> }],
  },
  // Contact
  {
    path: "/contact",
    children: [{ index: true, element: <ComingSoon /> }],
  },
  // ĐẶT Ở CUỐI CÙNG BẢNG:
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
