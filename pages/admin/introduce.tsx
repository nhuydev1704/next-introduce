import NewsEditor from '@components/introduce/Editor';
import { Button, Row } from 'antd';
import useCallContext from 'hooks/useCallContext';
import LayoutComponent from 'layout';
import React from 'react';

const AdminIntroducePage = () => {
    const { state } = useCallContext();

    const [content, setContent] = React.useState();
    console.log('🚀 ~ file: introduce.tsx:10 ~ AdminIntroducePage ~ content', content);

    return (
        <LayoutComponent>
            <div className="pt-24">
                <div className="flex justify-center">
                    <Button>Cập nhật</Button>
                </div>
                <NewsEditor
                    handleCallbackContent={(value: any) => {
                        setContent(value);
                    }}
                    refContent={state?.home?.introduce}
                />
            </div>
        </LayoutComponent>
    );
};

export default AdminIntroducePage;
