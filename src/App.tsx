import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TIME__DEFAULT_IN_APP_NOTIFICATION } from "./constants/general";

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
      <h1 className="text-3xl font-bold underline">Hello Shobhit test 4</h1>
    </>
  );
}

export default App;
