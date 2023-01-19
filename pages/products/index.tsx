import ProductCard from '@components/products';

import LayoutComponent from 'layout';
import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Row, Skeleton } from 'antd';

interface DataType {
    gender?: string;
    name: {
        title?: string;
        first?: string;
        last?: string;
    };
    email?: string;
    picture: {
        large?: string;
        medium?: string;
        thumbnail?: string;
    };
    nat?: string;
    loading: boolean;
}

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const ProductsPage = () => {
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<DataType[]>([]);
    const [list, setList] = useState<DataType[]>([]);

    useEffect(() => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                setInitLoading(false);
                setData(res.results);
                setList(res.results);
            });
    }, []);

    const onLoadMore = () => {
        setLoading(true);
        setList(data.concat([...new Array(count)].map(() => ({ loading: true, name: {}, picture: {} }))));
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                const newData = data.concat(res.results);
                setData(newData);
                setList(newData);
                setLoading(false);
                // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
                // In real scene, you can using public method of react-virtualized:
                // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
                window.dispatchEvent(new Event('resize'));
            });
    };

    const loadMore =
        !initLoading && !loading ? (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px',
                }}
            >
                <Button onClick={onLoadMore}>loading more</Button>
            </div>
        ) : null;

    return (
        <LayoutComponent>
            <div className="max-w-screen-2xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                <Row>
                    <div className="w-[300px] pt-3">
                        <h2 className="text-xl font-bold tracking-tight text-gray-900">BÀI VIẾT MỚI</h2>

                        <List
                            className="demo-loadmore-list"
                            loading={initLoading}
                            itemLayout="horizontal"
                            loadMore={loadMore}
                            dataSource={list}
                            renderItem={(item) => (
                                <List.Item>
                                    <Skeleton avatar title={false} loading={item.loading} active>
                                        <List.Item.Meta
                                            avatar={<Avatar src={item.picture.large} />}
                                            title={<a href="https://ant.design">{item.name?.last}</a>}
                                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                        />
                                    </Skeleton>
                                </List.Item>
                            )}
                        />
                    </div>
                    <div style={{ flex: 1 }}>
                        <div className="bg-white">
                            <div className="mx-auto max-w-2xl px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
                                <h2 className="text-xl font-bold tracking-tight text-gray-900">DANH SÁCH SẢN PHẨM</h2>
                                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                </div>
                                <div className="flex justify-center">
                                    <Button className="bg-blue-500" type="primary">
                                        Tải thêm
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </div>
        </LayoutComponent>
    );
};

export default ProductsPage;
