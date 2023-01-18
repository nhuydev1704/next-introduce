import NewsEditor from '@components/introduce/Editor';
import { Button, notification, Row } from 'antd';
import { adminService } from 'apis/service';
import useCallContext from 'hooks/useCallContext';
import LayoutComponent from 'layout';
import React from 'react';

const AdminIntroducePage = () => {
    const { state } = useCallContext();

    const [content, setContent] = React.useState();

    return (
        <LayoutComponent>
            <div className="pt-24">
                <div className="flex justify-center">
                    <Button
                        onClick={() => {
                            console.log('🚀 ~ file: introduce.tsx:25 ~ AdminIntroducePage ~ content', content);
                            adminService
                                .updateHome({
                                    _id: state?.home?._id,
                                    introduce: content,
                                })
                                .then((res) => {
                                    notification.open({
                                        message: 'Thông báo',
                                        description: 'Cập nhật thành công giới thiệu',
                                    });
                                });
                        }}
                    >
                        Cập nhật
                    </Button>
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
