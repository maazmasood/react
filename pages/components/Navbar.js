import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  PhoneIcon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const navigation = [
  { name: "Service", href: "/Service" },
  { name: "Über Uns", href: "/Ueber-uns" },
  { name: "Galerie", href: "/Galerie" },
  { name: "Planer", href: "/planer" },
  { name: "Kontakt", href: "/Kontakt" },
];

const navigation_mobile = [
  { name: "Service", href: "/Service" },
  { name: "Über Uns", href: "/Ueber-uns" },
  { name: "Galerie", href: "/Galerie" },
  { name: "Planer", href: "/planer" },
  { name: "Kontakt", href: "/Kontakt" },
  { name: "Checkout", href: "/checkout" },
];

export default function Navbar() {
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPageUnloading, setIsPageUnloading] = useState(false);

  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    // Function to update cart item count
    const updateCartItemCount = () => {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartItemCount(cartItems.length);
    };

    // Update cart item count on component mount
    updateCartItemCount();

    // Add event listener to update cart item count when cart changes
    const cartChangeListener = () => {
      updateCartItemCount();
    };

    window.addEventListener("storage", cartChangeListener);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("storage", cartChangeListener);
    };
  }, []);

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

  const gtag_report_conversion = () => {
    window.gtag("event", "conversion", {
      send_to: "AW-308056398/5rQ0CJygoJsZEM6i8pIB",
    });
  };

  return (
    <div>
      <div className="absolute inset-x-0 top-0 z-50 ">
        <div className="mx-auto max-w-7xl ">
          <div className="px-6 pt-6 lg:max-w-7xl lg:pl-8 lg:pr-0">
            <nav
              className="flex items-center justify-between"
              aria-label="Global"
              style={{ padding: "0px 25px 10px 25px" }} // Increased padding
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
                {cartItemCount > 0 && (
                  <div
                    className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white top-10 border-white rounded-full dark:border-gray-900"
                    id="s3"
                  >
                    {cartItemCount}
                  </div>
                )}
                {/* Increased icon size */}
              </button>
              <div className="hidden lg:flex lg:gap-x-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-2xl font-bold leading-8 text-[#2c4587]" // Increased text size
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="hidden lg:flex lg:justify-end items-center">
                <Link
                  id="s3"
                  key="checkout"
                  href="/checkout"
                  onClick={gtag_report_conversion}
                  className={`lg:relative lg:inline-flex items-center ${
                    cartItemCount === 0 ? "p-3" : "p-2"
                  } text-white font-medium text-center border rounded-lg border-indigo-600 bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  <span className="hidden md:inline  text-center text-2xl">
                    <sup>
                      <sup>{cartItemCount > 0 ? cartItemCount : ""}</sup>
                    </sup>
                  </span>
                </Link>
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
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto  bg-[#DEE2EC] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                  {navigation_mobile.map((item) => (
                    <div key={item.name} className="relative">
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                      {item.name === "Checkout" && cartItemCount > 0 && (
                        <div
                          className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white top-3 right-0 border-white rounded-full dark:border-gray-900"
                          id="s3"
                        >
                          {cartItemCount}
                        </div>
                      )}
                    </div>
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
