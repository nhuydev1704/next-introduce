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

    React.useEffect(() => {
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
        </LayoutComponent>
    );
}
