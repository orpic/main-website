import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TIME__DEFAULT_IN_APP_NOTIFICATION } from "./constants/general";
import {
  AppPlacement,
  FeaturedSection,
  LoadingSpinner,
  NavigationTabBottomItem,
} from "./components";
import { Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  ROUTE_CONTACT,
  ROUTE_EXPERIENCE,
  ROUTE_PRIVACY,
  ROUTE_PROJECTS,
  ROUTE_ROOT,
  ROUTE_USES,
} from "./constants/route";
import { Contact, Experience, Homepage, Projects, Uses } from "./pages";
import { images } from "./assets/images";
import Privacy from "./pages/Privacy";

interface navigationTabItemList {
  name: string;
  activeIcon: string;
  inActiveIcon: string;
  route: string;
}

const navigationTabItemList: navigationTabItemList[] = [
  {
    name: "Home",
    activeIcon: images.homeActive,
    inActiveIcon: images.homeInActive,
    route: ROUTE_ROOT,
  },
  {
    name: "Experience",
    activeIcon: images.experienceActive,
    inActiveIcon: images.experienceInActive,
    route: ROUTE_EXPERIENCE,
  },
  {
    name: "Projects",
    activeIcon: images.projectActive,
    inActiveIcon: images.projectInActive,
    route: ROUTE_PROJECTS,
  },
  {
    name: "Contact",
    activeIcon: images.contactActive,
    inActiveIcon: images.contactInActive,
    route: ROUTE_CONTACT,
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
        <div className="h-full w-full flex flex-col bg-neutral-950">
          <div className="h-full w-full flex flex-col sm:flex-row-reverse ">
            {/* The featured section div start */}
            <FeaturedSection />
            {/* The featured section div end */}
            {/* Main section start */}
            <MainSection />
            {/* Main section end */}
            {/* Bottom navbar section start */}
            <BottomNavbarSection />
            {/* Bottom navbar section end */}
          </div>
        </div>
      </AppPlacement>
    </>
  );
}

export default App;

const BottomNavbarSection = () => {
  const navigate = useNavigate();

  return (
    <div className="h-20 pt-3 pb-2 bg-neutral-800 flex justify-between items-center sm:flex-col sm:pl-2 sm:pr-3 sm:justify-center sm:gap-16 sm:w-24 sm:h-auto ">
      {navigationTabItemList.map((eachItem) => (
        <div
          key={eachItem.name}
          onClick={() => {
            // setSelectedId(eachItem.id);
            toast.dismiss();
            navigate(eachItem.route);
          }}
          className="h-full w-full flex flex-col justify-center items-center gap-2 cursor-pointer sm:h-min "
        >
          <NavigationTabBottomItem
            name={eachItem.name}
            activeIcon={eachItem.activeIcon}
            inActiveIcon={eachItem.inActiveIcon}
            active={eachItem.route === location.pathname}
          />
        </div>
      ))}
    </div>
  );
};

const MainSection = () => {
  return (
    <div className="h-10 w-full sm:w-10 flex-grow sm:h-full">
      <div className={`h-full w-full overflow-y-auto no-scrollbar`}>
        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center w-full h-full">
              <LoadingSpinner height={"h-8"} />
            </div>
          }
        >
          <Routes>
            {/* All pages are lazzily imported. See index.ts for exports */}
            <Route path={ROUTE_ROOT} element={<Homepage />} />
            <Route path={ROUTE_EXPERIENCE} element={<Experience />} />
            <Route path={ROUTE_PROJECTS} element={<Projects />} />
            <Route path={ROUTE_CONTACT} element={<Contact />} />
            <Route path={ROUTE_PRIVACY} element={<Privacy />} />
            <Route path={ROUTE_USES} element={<Uses />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};
