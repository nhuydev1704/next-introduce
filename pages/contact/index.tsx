import { Button, Col, Form, Input, Row } from 'antd';
import LayoutComponent from 'layout';
import React from 'react';

const ContactPage = () => {
    return (
        <LayoutComponent>
            <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                <div className="text-center text-3xl font-bold py-2 text-[#2164A5]">LIÊN HỆ</div>
                <Form
                    style={{ marginTop: '30px' }}
                    //   form={form}
                    onFinish={(values) => {
                        console.log('🚀 ~ file: contact.tsx:26 ~ AdminContactPage ~ values', values);
                    }}
                    layout="vertical"
                >
                    <Row gutter={[30, 0]}>
                        <Col span={12}>
                            <Form.Item label="Họ và tên" required tooltip="Trường này là bắt buộc">
                                <Input size="large" placeholder="Nhập họ và tên" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Số điện thoại" required tooltip="Trường này là bắt buộc">
                                <Input size="large" placeholder="Nhập số điện thoại" />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label="Tiêu đề" required tooltip="Trường này là bắt buộc">
                                <Input size="large" placeholder="Nhập tiêu đề" />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label="Nội dung" required tooltip="Trường này là bắt buộc">
                                <Input.TextArea size="large" rows={6} placeholder="Nhập nội dung" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item>
                        <Row justify="center">
                            <Button size="large" className="bg-blue-500" type="primary">
                                Gửi yêu cầu
                            </Button>
                        </Row>
                    </Form.Item>
                </Form>
            </div>
        </LayoutComponent>
    );
};

export default ContactPage;
