import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TIME__DEFAULT_IN_APP_NOTIFICATION } from "./constants/general";
import { AppPlacement, LoadingSpinner } from "./components";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  ROUTE_CONTACT,
  ROUTE_EXPERIENCE,
  ROUTE_PROJECTS,
  ROUTE_ROOT,
} from "./constants/route";
import { Contact, Experience, Homepage, Projects } from "./pages";
import { GoHome, GoHomeFill } from "react-icons/go";
import { BsFillGearFill, BsGear } from "react-icons/bs";

const bottomTab = [
  {
    name: "Home",
    activeIcon: <GoHomeFill />,
    inactiveIcon: <GoHome />,
  },
  {
    name: "Experience",
    activeIcon: <BsFillGearFill />,
    inactiveIcon: <BsGear />,
  },
  {
    name: "Projects",
    activeIcon: <BsFillGearFill />,
    inactiveIcon: <BsGear />,
  },
  {
    name: "Contact",
    activeIcon: <BsFillGearFill />,
    inactiveIcon: <BsGear />,
  },
];

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={TIME__DEFAULT_IN_APP_NOTIFICATION}
        hideProgressBar={false}
        newestOnTop={true}
        transition={Slide}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
      <AppPlacement>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* All pages are lazzily imported. See index.ts for exports */}
            <Route path={ROUTE_ROOT} element={<Homepage />} />
            <Route path={ROUTE_EXPERIENCE} element={<Experience />} />
            <Route path={ROUTE_PROJECTS} element={<Projects />} />
            <Route path={ROUTE_CONTACT} element={<Contact />} />
          </Routes>
        </Suspense>
        {/* <BottomTab */}
      </AppPlacement>
    </>
  );
}

export default App;
