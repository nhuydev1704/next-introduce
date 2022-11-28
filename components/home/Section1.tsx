import React from 'react';
import feature1 from '@images/feature-1.png';
import feature2 from '@images/feature-2.png';
import useCallContext from 'hooks/useCallContext';

const Section1 = () => {
    const { state } = useCallContext();

    return (
        <section className="bg-gray-50 dark:bg-gray-800">
            <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                    <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                            {state?.home?.title_left_section1}
                        </h2>
                        <p className="mb-8 font-light lg:text-xl">{state?.home?.description_left_section1}</p>

                        <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                            {state?.home?.feature_left_section1?.map((item: string, index: any) => (
                                <li key={index} className="flex space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <img
                        className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                        src={feature1.src}
                        alt="dashboard feature image"
                    />
                </div>

                <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16" style={{ marginTop: '20px' }}>
                    <img
                        className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                        src={feature2.src}
                        alt="feature image 2"
                    />
                    <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                            {state?.home?.title_right_section1}
                        </h2>
                        <p className="mb-8 font-light lg:text-xl">{state?.home?.description_right_section1}</p>

                        <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                            {state?.home?.feature_right_section1?.map((item: string, index: any) => (
                                <li key={index} className="flex space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1;
