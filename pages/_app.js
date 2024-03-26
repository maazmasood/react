import "@/styles/globals.css";
import "@/styles/FormStyling.css";
import "@/styles/Slider.css";
import "@/styles/product.module.css";
import "@/styles/gallery_styling.css";
import Footer from "@/pages/components/Footer";
import Navbar from "@/pages/components/Navbar";
import PrivacySlider from "@/pages/components/slider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PhoneIcon } from "@heroicons/react/24/outline";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-308056398"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-308056398');
            `,
          }}
        />
      </Head>
      <a
        href="tel:023694049939"
        title="Klima-Nrw-Telefon"
        id="s3"
        className="lg:hidden fixed bottom-6 right-4 z-50 inline-flex items-center p-3 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300  dark:focus:ring-blue-800"
      >
        <PhoneIcon className="h-7 w-6" aria-hidden="true" />
      </a>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
      <PrivacySlider />
    </div>
  );
}
