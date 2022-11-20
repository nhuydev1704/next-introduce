import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pb-6 sm:pb-8 lg:pb-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <header className="flex justify-between items-center py-4 md:mb-12 md:py-[12px] xl:mb-16">
          <a
            className="inline-flex items-center text-black-800 font-bold gap-2.5 text-xl md:text-2xl"
            href="#"
          >
            <span className="w-6 h-auto text-primary">
              <div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 640 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M640 199.9v54l-320 200L0 254v-54l320 200 320-200.1zm-194.5 72l47.1-29.4c-37.2-55.8-100.7-92.6-172.7-92.6-72 0-135.5 36.7-172.6 92.4h.3c2.5-2.3 5.1-4.5 7.7-6.7 89.7-74.4 219.4-58.1 290.2 36.3zm-220.1 18.8c16.9-11.9 36.5-18.7 57.4-18.7 34.4 0 65.2 18.4 86.4 47.6l45.4-28.4c-20.9-29.9-55.6-49.5-94.8-49.5-38.9 0-73.4 19.4-94.4 49zM103.6 161.1c131.8-104.3 318.2-76.4 417.5 62.1l.7 1 48.8-30.4C517.1 112.1 424.8 58.1 319.9 58.1c-103.5 0-196.6 53.5-250.5 135.6 9.9-10.5 22.7-23.5 34.2-32.6zm467 32.7z"></path>
                </svg>
              </div>
            </span>
            <span className=""> Chai Builder</span>
          </a>
          <nav className="hidden lg:flex gap-12">
            <a
              className="text-lg font-semibold text-primary lg:font-medium lg:text-[16px]"
              href="#"
            >
              Home
            </a>
            <a
              className="hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100 lg:text-[16px] lg:font-normal"
              href="#"
            >
              Features
            </a>
            <a
              className="hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100 lg:text-[16px] lg:font-normal"
              href="#"
            >
              Pricing
            </a>
            <a
              className="hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100 lg:text-[16px] lg:font-normal"
              href="#"
            >
              About
            </a>
          </nav>
        </header>
        <div className="relative px-4 mx-auto pt-[64px] sm:max-w-xl md:px-8 md:max-w-full lg:py-32 lg:pt-[25px] xl:px-20">
          <div className="max-w-xl mx-auto lg:max-w-screen-xl">
            <div className="mb-16 lg:max-w-lg lg:mb-0">
              <div className="max-w-xl mb-6">
                <div className="">
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                    {" "}
                    Brand new{" "}
                  </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Create Websites With Chai Builder Studio
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  {" "}
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae. explicabo.{" "}
                </p>
              </div>
              <div className="flex items-center">
                <div className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 shadow-md hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-sky-400 rounded-xl">
                  {" "}
                  Get started{" "}
                </div>
                <a
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  href="#"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
            <img
              className="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
              alt="No alt"
              src="https://kitwind.io/assets/kometa/full-browser.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
