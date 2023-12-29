import "@/styles/globals.css";
import "@/styles/FormStyling.css";
import "@/styles/Slider.css";
import "@/styles/product.module.css";
import "@/styles/gallery_styling.css";
import Footer from "@/pages/components/Footer";
import Navbar from "@/pages/components/Navbar";
import PrivacySlider from "@/pages/components/slider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head></Head>
      <a
        href="tel:023694049939"
        title="Klima-Nrw-Telefon"
        className="lg:hidden fixed bottom-6 right-4 z-50 inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <DevicePhoneMobileIcon className="h-7 w-6 " aria-hidden="true" />
        <span className="sr-only">Notifications</span>
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  border-white rounded-full -top-2 -right-2 dark:border-gray-900">
          1
        </div>
      </a>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
      <PrivacySlider />
    </div>
  );
}
