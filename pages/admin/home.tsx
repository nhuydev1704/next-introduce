import UploadComponent from '@components/Upload';
import { Button, Card, Col, Form, Input, Row } from 'antd';
import useCallContext from 'hooks/useCallContext';
import LayoutComponent from 'layout';
import React from 'react';

export default function AdminHome() {
    const { state } = useCallContext();
    const bannerImage = React.useRef<any>(null);
    const sectionLeft1 = React.useRef<any>(null);
    const sectionRight1 = React.useRef<any>(null);

    const [form] = Form.useForm();

    React.useEffect(() => {
        form.setFieldsValue({ ...state?.home });
        bannerImage.current = [{ url: state?.home?.image_banner, uid: Math.random(), name: 'demo' }];
        sectionLeft1.current = [{ url: state?.home?.image_left_section1, uid: Math.random(), name: 'demo' }];
        sectionRight1.current = [{ url: state?.home?.image_right_section1, uid: Math.random(), name: 'demo' }];
    }, [state?.home]);

    return (
        <LayoutComponent>
            <section className="bg-gray-100 dark:bg-gray-900">
                <div className="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:py-16 lg:pt-28">
                    <Form form={form} layout="vertical" onFinish={(values) => console.log(values)}>
                        <Card
                            extra={
                                <Button
                                    htmlType="submit"
                                    type="primary"
                                    className="my-3"
                                    style={{ backgroundColor: 'rgb(37 99 235)' }}
                                >
                                    Cập nhật
                                </Button>
                            }
                            style={{ width: '100%' }}
                        >
                            <Card style={{ width: '100%' }}>
                                <Row style={{ width: '100%' }}>
                                    <Col span={16}>
                                        <Form.Item name="title_banner" label="Tiêu đề banner">
                                            <Input />
                                        </Form.Item>
                                        <Form.Item name="description_banner" label="Mô tả banner">
                                            <Input.TextArea rows={4} />
                                        </Form.Item>
                                    </Col>
                                    <Col
                                        span={8}
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '60px',
                                        }}
                                    >
                                        <Form.Item name="image_banner" label="Ảnh banner">
                                            {bannerImage.current && (
                                                <UploadComponent
                                                    isUploadServerWhenUploading
                                                    initialFile={bannerImage.current}
                                                    uploadType="list"
                                                    listType="picture-card"
                                                    maxLength={1}
                                                    onSuccessUpload={(url: any) => {
                                                        console.log('🚀 ~ file: home.tsx:63 ~ AdminHome ~ url', url);
                                                        url && form.setFieldsValue({ image_banner: url.public_url });
                                                    }}
                                                />
                                            )}
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Card>
                            <Card style={{ width: '100%', marginTop: '20px' }}>
                                <Row style={{ width: '100%' }}>
                                    <Col span={16}>
                                        <Form.Item name="title_left_section1" label="Tiêu đề section trái">
                                            <Input />
                                        </Form.Item>
                                        <Form.Item name="description_left_section1" label="Mô tả section trái">
                                            <Input.TextArea rows={4} />
                                        </Form.Item>
                                    </Col>
                                    <Col
                                        span={8}
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '60px',
                                        }}
                                    >
                                        <Form.Item name="image_left_section1" label="Ảnh section trái">
                                            {sectionLeft1.current && (
                                                <UploadComponent
                                                    isUploadServerWhenUploading
                                                    initialFile={sectionLeft1.current}
                                                    uploadType="list"
                                                    listType="picture-card"
                                                    maxLength={1}
                                                    onSuccessUpload={(url: any) => {
                                                        url &&
                                                            form.setFieldsValue({
                                                                image_left_section1: url.public_url,
                                                            });
                                                    }}
                                                />
                                            )}
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row style={{ width: '100%' }}>
                                    <Col span={16}>
                                        <Form.Item name="title_right_section1" label="Tiêu đề section phải">
                                            <Input />
                                        </Form.Item>
                                        <Form.Item name="description_right_section1" label="Mô tả section phải">
                                            <Input.TextArea rows={4} />
                                        </Form.Item>
                                    </Col>
                                    <Col
                                        span={8}
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '60px',
                                        }}
                                    >
                                        <Form.Item name="image_right_section1" label="Ảnh section phải">
                                            {sectionRight1.current && (
                                                <UploadComponent
                                                    isUploadServerWhenUploading
                                                    initialFile={sectionRight1.current}
                                                    uploadType="list"
                                                    listType="picture-card"
                                                    maxLength={1}
                                                    onSuccessUpload={(url: any) => {
                                                        url &&
                                                            form.setFieldsValue({
                                                                image_right_section1: url.public_url,
                                                            });
                                                    }}
                                                />
                                            )}
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Card>
                        </Card>
                    </Form>
                </div>
            </section>
        </LayoutComponent>
    );
}
