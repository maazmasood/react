import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  DevicePhoneMobileIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const navigation = [
  //  { name: "Klimaanlagen", href: "/klimaanlagen" },
  //{ name: "Wärmepumpen", href: "/Waermepumpen" },
  { name: "Produkte", href: "/shop" },
  { name: "Service", href: "/Service" },
  { name: "Über Uns", href: "/Ueber-uns" },
  { name: "Galerie", href: "/Galerie" },
  { name: "Kontakt", href: "/Kontakt" },
];

export default function Navbar() {
  const router = useRouter();

  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // State for checking if the page is about to unload
  const [isPageUnloading, setIsPageUnloading] = useState(false);

  // Close mobile menu on page unload
  useEffect(() => {
    function handleBeforeUnload() {
      setIsPageUnloading(true);
    }

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (isPageUnloading) {
      setMobileMenuOpen(false);
      setIsPageUnloading(false);
    }
  }, [router]);
  return (
    <div>
      <div className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl">
          <div className="px-6 pt-6 lg:max-w-7xl lg:pl-8 lg:pr-0">
            <nav
              className="flex items-center justify-between"
              aria-label="Global"
              style={{ padding: "0px 25px 25px 25px" }} // Increased padding
            >
              <Link href="/" className="-m-1 p-1">
                <span className="sr-only">KlimaNRW</span>
                <Image
                  className="aspect-auto"
                  src="/Klima-Nrw-Logo-Clean.webp"
                  alt="Klima-Nrw-Logo-Clean.webp"
                  title="Klima-Nrw-Logo-Clean.webp"
                  width={120} // Increased logo size
                  height={75} // Increased logo size
                />
              </Link>
              <button
                type="button"
                className="-m-2 rounded-md p-2 lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-8 w-8" aria-hidden="true" />{" "}
                {/* Increased icon size */}
              </button>
              <div className="hidden lg:ml-8 lg:flex lg:gap-x-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-xl font-semibold leading-6 text-black" // Increased text size
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="hidden lg:block lg:justify-end">
                <a
                  href="tel:023694049939"
                  title="Klima-Nrw-Telefon"
                  className="lg:relative lg:inline-flex items-center p-4 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <DevicePhoneMobileIcon
                    className="h-8 w-8" // Increased icon size
                    aria-hidden="true"
                  />
                  <span className="sr-only">Notifications</span>
                  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-white rounded-full -top-1 -right-1 dark:border-gray-900">
                    1
                  </div>
                </a>
              </div>
            </nav>
          </div>
        </div>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50 " />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-1.5 p-1.5"
              >
                <span className="sr-only">Your Company</span>
                <Image
                  className="aspect-auto"
                  src="/Klima-Nrw-Logo-Clean.webp"
                  alt="Klima-Nrw-Logo-Clean.webp"
                  title="Klima-Nrw-Logo-Clean.webp"
                  width={80}
                  height={60}
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root ">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </div>
  );
}
