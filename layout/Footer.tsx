import { Col, Row } from 'antd';
import React from 'react';

const Footer = () => {
    return (
        <>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

            <footer className="bg-white dark:bg-gray-800 w-full">
                <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                    <Row>
                        <Col span={6}>
                            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Company
                            </h3>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className=" hover:underline">
                                        About
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Careers
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Brand Center
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col span={6}>
                            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Help center
                            </h3>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Discord Server
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Twitter
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Facebook
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col span={6}>
                            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Legal
                            </h3>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Licensing
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Terms
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col span={6}>
                            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Company
                            </h3>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className=" hover:underline">
                                        About
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Careers
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Brand Center
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>

                    <iframe
                        nh-lazy="iframe"
                        width="100%"
                        height="240"
                        scrolling="no"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100063485051793&amp;tabs=timeline&amp;width=340&amp;height=500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=387173625269621"
                    ></iframe>
                </div>
            </footer>
        </>
    );
};

export default Footer;
