import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import MainForm from "./form_mainpage";

const navigation = [
  { name: "Klimaanlagen", href: "#" },
  { name: "Wärmepumpen", href: "#" },
  { name: "Service", href: "#" },
  { name: "Kontakt", href: "#" },
];

function scrollToSection(e) {
  const section = document.querySelector(".scrolldiv");
  const isExcludedElement = e.target.classList.contains("whitespace-nowrap");

  if (section && !isExcludedElement) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

export default function HeroSection() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/planer");
  };

  return (
    <div>
      <div className="relative flex">
        <div className="bg-gray-50 absolute lg:inset-y-0 lg:right-0 top-0 h-full w-full main_screen bg-[#DEE2EC]"></div>

        <div className="mx-auto max-w-7xl flex justify-end items-center md:mt-0">
          <div className="md:w-1/2 w-full p-2 ">
            <div className="relative z-20 pt-36 pb-10 md:pt-14 lg:w-full lg:max-w-2xl">
              <div className="relative  px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0 sm:mb-2 sm:mt-2 lg:mt-6">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  <div className="hidden sm:mb-10 sm:block">
                    <div
                      id="s3"
                      onClick={handleClick}
                      className="sm:block rounded mb-5 text-lg cursor-pointer text-white-800 bg-blue-600 px-1.5 py-3.5 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      style={{
                        marginTop: "-120px",
                        textAlign: "center",
                        fontSize: "30px",
                        minWidth: "80px",
                      }}
                    >
                      Klima- Angebot Einholen{" "}
                    </div>
                  </div>

                  <h1 className="text-4xl font-bold tracking-tight text-white-900 sm:text-6xl">
                    <span className="text-red-600">Wärme</span> und{" "}
                    <span className="text-blue-600" id="s3-text">
                      Kälte
                    </span>{" "}
                    mit gutem Gewissen
                  </h1>
                  <p className="mt-8 text-2xl leading-8 text-white-800">
                    Wir sind Problemlöser, nicht nur Produktverkäufer
                  </p>
                  <p className="mt-6 text-xl leading-8 text-white-800">
                    Unsere innovativen Klimaanlagen und Wärmepumpen können Ihre
                    Umgebung verändern!
                  </p>

                  <div className="mt-10 flex items-center gap-x-6">
                    <Link
                      id="s3"
                      href="/planer"
                      className="rounded-md bg-blue-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      <p className="text-white">
                        Jetzt Beratungstermin vereinbaren (kostenlos)
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 hidden md:block z-20 flex justify-center items-center md:pl-20">
            <div className=" rounded-lg shadow-lg max-w-3xl w-full  ">
              <div className="flex justify-center md:p-10">
                <MainForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full block md:hidden z-60 flex flex-col" // Added flex-col class
      >
        <div className="rounded-lg shadow-lg max-w-3xl w-full">
          <div className="flex justify-center p-4">
            <MainForm />
          </div>
        </div>
      </div>
    </div>
  );
}
