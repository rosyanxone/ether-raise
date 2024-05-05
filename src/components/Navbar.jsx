import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <nav className="p-4 sm:p-6">
        <div className="flex justify-between">
          <button
            className="relative inline-flex items-center justify-center rounded-md p-3 text-gray-400 ring-1 ring-gray-400 hover:bg-gray-100 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset active:ring-white sm:hidden"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
          <div className="flex items-center justify-between sm:w-[40%]">
            <a href="#" className="text-2xl font-semibold text-primary sm:mr-5">
              EtherRaise
            </a>
            <ul className="hidden items-center gap-5 text-nowrap sm:flex">
              <li>
                <a href="#" className="text-body-medium text-dark">
                  Galang Dana
                </a>
              </li>
              <li>
                <a href="#" className="text-body-medium text-dark">
                  Donasi Saya
                </a>
              </li>
              <li>
                <a href="#" className="text-body-medium text-dark">
                  Akun
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center rounded-md bg-primary p-3">
            <a
              href="#"
              className="text-button lexend-deca text-balance text-center text-white"
            >
              Connect Wallet
            </a>
          </div>
        </div>

        {isOpen ? (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 pt-2">
              <a
                href="#"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                aria-current="page"
              >
                Galang Dana
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Donasi Saya
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Akun
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </section>
  );
}