import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import type { AppProps } from "next/app";
import "assets/styles/global.scss";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          closeOnClick
          pauseOnHover={false}
          theme="light"
        />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </Provider>
    </>
  );
}

export default MyApp;
