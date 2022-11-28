import Header from '@components/home/Header';
import React from 'react';
import Footer from './Footer';

const LayoutComponent = ({ children }: { children: any }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default LayoutComponent;
