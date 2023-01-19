import { Button, Col, Form, Input, Modal, Row, Space, Table, Tag } from 'antd';
import LayoutComponent from 'layout';
import React from 'react';
import type { ColumnsType } from 'antd/es/table';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import NewsEditor from '@components/introduce/Editor';
import UploadComponent from '@components/Upload';

const columns: any = [
    {
        title: 'STT',
        dataIndex: 'key',
        key: 'key',
        width: '60px',
        align: 'center',
        render: (text: any, r: any, index: any) => index,
    },
    {
        title: 'Tiêu đề',
        dataIndex: 'name',
        key: 'name',
        width: '40%',
    },
    {
        title: 'Mô tả',
        dataIndex: 'description',
        key: 'description',
    },

    {
        title: 'Action',
        key: 'action',
        width: '120px',
        render: (_: any, record: any) => (
            <Space size="middle">
                <Button icon={<EditOutlined />} />
                <Button icon={<DeleteOutlined />} />
            </Space>
        ),
    },
];

const data: any = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
const AdminProductsPage = () => {
    const [openModal, setOpenModal] = React.useState(false);

    return (
        <LayoutComponent>
            <div className="max-w-screen-2xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                <div className="text-center text-3xl font-bold py-2 text-[#2164A5]">QUẢN LÝ SẢN PHẨM</div>
                <Row justify="end" style={{ marginTop: '10px' }}>
                    <Button onClick={() => setOpenModal(true)} className="bg-blue-500" type="primary">
                        Thêm mới
                    </Button>
                </Row>
                <Table pagination={false} style={{ marginTop: '15px' }} bordered columns={columns} dataSource={data} />
            </div>

            <Modal
                onCancel={() => setOpenModal(false)}
                open={openModal}
                width={1000}
                centered
                footer={null}
                destroyOnClose
                title="THÊM SẢN PHẨM"
            >
                <Form
                    style={{ marginTop: '30px' }}
                    //   form={form}
                    onFinish={(values) => {
                        console.log('🚀 ~ file: contact.tsx:26 ~ AdminContactPage ~ values', values);
                    }}
                    layout="vertical"
                >
                    <Row gutter={[30, 0]}>
                        <Col span={24}>
                            <Form.Item label="Tiêu đề" required tooltip="Trường này là bắt buộc">
                                <Input placeholder="Nhập tiêu đề" />
                            </Form.Item>
                        </Col>

                        <Col span={16}>
                            <Form.Item label="Mô tả" required tooltip="Trường này là bắt buộc">
                                <Input.TextArea rows={4} placeholder="Nhập mô tả" />
                            </Form.Item>
                        </Col>
                        <Col className="flex justify-center" span={8}>
                            <Form.Item label="Hình ảnh" required tooltip="Trường này là bắt buộc">
                                <UploadComponent
                                    isUploadServerWhenUploading
                                    // initialFile={sectionRight1.current}
                                    uploadType="list"
                                    listType="picture-card"
                                    maxLength={1}
                                    onSuccessUpload={(url: any) => {
                                        // url &&
                                        //     form.setFieldsValue({
                                        //         image_right_section1: url.public_url,
                                        //     });
                                    }}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <NewsEditor
                                height={400}
                                handleCallbackContent={(value: any) => {
                                    // setContent(value);
                                }}
                                // refContent={state?.home?.introduce}
                            />
                        </Col>
                    </Row>
                    <Form.Item>
                        <Row justify="center">
                            <Button className="bg-blue-500 mt-3" type="primary">
                                Lưu
                            </Button>
                        </Row>
                    </Form.Item>
                </Form>
            </Modal>
        </LayoutComponent>
    );
};

export default AdminProductsPage;
