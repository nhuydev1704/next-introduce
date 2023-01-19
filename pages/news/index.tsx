import CardNews from '@components/news';
import { Button } from 'antd';
import LayoutComponent from 'layout';
import React from 'react';

const NewsPage = () => {
    return (
        <LayoutComponent>
            <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                <section className="mb-32 text-gray-800">
                    <h2 className="text-3xl font-bold mb-12 text-center">TIN TỨC</h2>
                    <div className="grid lg:grid-cols-3 gap-6">
                        <CardNews />
                        <CardNews />
                        <CardNews />
                        <CardNews />
                        <CardNews />
                        <CardNews />
                    </div>
                    <div className="flex justify-center">
                        <Button className="bg-blue-500 mt-5" type="primary">
                            Tải thêm
                        </Button>
                    </div>
                </section>
            </div>
        </LayoutComponent>
    );
};

export default NewsPage;
