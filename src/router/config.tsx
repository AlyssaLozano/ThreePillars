import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import About from "../pages/about/page";
import Services from "../pages/services/page";
import Pricing from "../pages/pricing/page";
import Contact from "../pages/contact/page";
import Military from "../pages/military/page";
import OwnerPortal from "../pages/owner-portal/page";

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/contact", element: <Contact /> },
  { path: "/military-owners", element: <Military /> },
  { path: "/owner-portal", element: <OwnerPortal /> },
  { path: "*", element: <NotFound /> },
];

export default routes;