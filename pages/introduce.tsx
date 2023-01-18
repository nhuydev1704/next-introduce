import NewsEditor from '@components/introduce/Editor';
import useCallContext from 'hooks/useCallContext';
import LayoutComponent from 'layout';
import React from 'react';

const IntroducePage = () => {
    const { state } = useCallContext();

    return (
        <LayoutComponent>
            <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                <div
                    dangerouslySetInnerHTML={{
                        __html: state?.home?.introduce,
                    }}
                />
            </div>
        </LayoutComponent>
    );
};

export default IntroducePage;
