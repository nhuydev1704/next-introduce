import Header from '@components/home/Header';
import Section1 from '@components/home/Section1';
import Section2 from '@components/home/Section2';
import Section3 from '@components/home/Section3';
import Section4 from '@components/home/Section4';
import hero from '@images/hero.png';
import useCallContext from 'hooks/useCallContext';
import LayoutComponent from 'layout';
import React from 'react';

export default function Home() {
    const { state } = useCallContext();

    React.useLayoutEffect(() => {
        document.documentElement.classList.add('light');
    }, []);

    return (
        <LayoutComponent>
            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white pr-4">
                            {state?.home?.title_banner}
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            {state?.home?.description_banner}
                        </p>
                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                            <a
                                href="https://github.com/themesberg/landwind"
                                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            >
                                123
                            </a>
                            <a
                                href="https://www.figma.com/community/file/1125744163617429490"
                                className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                45
                            </a>
                        </div>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={hero.src} alt="hero image" />
                    </div>
                </div>
            </section>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <section className="bg-gray-50 dark:bg-gray-800">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                    <div className="max-w-screen-sm mx-auto text-center">
                        <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                            Start your free trial today
                        </h2>
                        <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                            Try Landwind Platform for 30 days. No credit card required.
                        </p>
                        <a
                            href="#"
                            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
                        >
                            Free trial for 30 days
                        </a>
                    </div>
                </div>
            </section>
        </LayoutComponent>
    );
}
