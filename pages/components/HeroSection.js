import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

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
    <div className="relative h-screen ">
      <div className="bg-gray-50 absolute lg:inset-y-0 lg:right-0 top-0 h-full w-full">
        <Image
          className="object-cover lg:object-right aspect-auto h-full lg:h-full lg:w-full"
          src="/Klima-Nrw-Home-Background.webp"
          alt="Klima-Nrw-Home-Background"
          title="Klima-Nrw-Home-Background"
          width={1900}
          height={1100}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pt-52 lg:pt-14 h-screen lg:w-full lg:max-w-2xl">
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
                <div
                  onClick={scrollToSection}
                  className="rounded-full py-1 px-3 text-sm cursor-pointer leading-6 text-white-500 ring-2 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  Bis zum 30 April noch von unserem Winterangebot Profitieren{" "}
                  <div className=" font-semibold " id="s3-text">
                    <span className=" inset-0" aria-hidden="true" />
                    Mehr Erfahren <span aria-hidden="true">&rarr;</span>
                  </div>
                </div>
              </div>

              <div className=" sm:mb-10 sm:hidden">
                <div
                  id="s3"
                  onClick={handleClick}
                  className="sm:block rounded mb-5 text-lg text-white-800 bg-blue-600 px-1.5 py-3.5 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  style={{
                    marginTop: "-80px",
                    textAlign: "center",
                    fontSize: "20px",
                    minWidth: "80px",
                  }}
                >
                  Klima- Angebot Einholen{" "}
                </div>
                <div
                  onClick={scrollToSection}
                  className="relative rounded-full mb-5 py-1 px-3 text-sm leading-6 text-white-500 ring-2 ring-blue-700 hover:ring-gray-900/20"
                >
                  Bis zum 30 April noch von unserem Winterangebot Profitieren{" "}
                  <span
                    className="whitespace-nowrap font-semibold "
                    id="s3-text"
                  >
                    Mehr Erfahren <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white-900 sm:text-6xl">
                <span className="text-red-600">Wärme</span> und{" "}
                <span className="text-blue-600" id="s3-text">
                  Kälte
                </span>{" "}
                mit gutem Gewissen
              </h1>
              <p className="mt-6 text-xl leading-8 text-white-600">
                unsere Klimaanlagen und Wärmepumpen machen es möglich!
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
    </div>
  );
}
