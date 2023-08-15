import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TIME__DEFAULT_IN_APP_NOTIFICATION } from "./constants/general";
import { AppPlacement, LoadingSpinner } from "./components";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTE_ROOT } from "./constants/route";
import { Homepage } from "./pages";

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
            <Route path={ROUTE_ROOT} element={<Homepage />} />
          </Routes>
        </Suspense>
        {/* <BottomTagv */}
      </AppPlacement>
    </>
  );
}

export default App;
