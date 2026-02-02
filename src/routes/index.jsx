import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout.jsx";
import { HomePage } from "../pages/HomePage/index.jsx";
import { AboutUs } from "../components/AboutUs/index.jsx";
import { SGM } from "../components/Projects/index.jsx";
const router = createBrowserRouter([
  // Main Site Routes
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/about-us",
    element: <MainLayout />,
    children: [{ index: true, element: <AboutUs /> }],
  },
  {
    path: "/fnb/saigon-marina",
    element: <MainLayout />,
    children: [{ index: true, element: <SGM /> }],
  },
]);

export default router;
