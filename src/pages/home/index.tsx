// @flow
import * as React from 'react';
import {MainLayout} from "../../layouts/mainLayout";
import {Col, Row, Typography} from "antd";
import {Carousel} from "../../components/carousel";
import {SideMenu} from "../../components/sideMenu";
import {ProductCollection} from "../../components/productCollection";
import {productList1, productList2, productList3} from "../../components/productCollection/mockups";
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';

type Props = {

};
export const HomePage = (props: Props) => {
    return (
        <MainLayout>
            <Row style={{ marginTop: 20 }}>
                <Col span={6}>
                    <SideMenu />
                </Col>
                <Col span={18}>
                    <Carousel />
                </Col>
            </Row>
            <ProductCollection
                title={
                    <Typography.Title level={3} type="warning">
                        爆款推荐
                    </Typography.Title>
                }
                sideImage={sideImage}
                products={productList1}
            />
            <ProductCollection
                title={
                    <Typography.Title level={3} type="danger">
                        新品上市
                    </Typography.Title>
                }
                sideImage={sideImage2}
                products={productList2}
            />
            <ProductCollection
                title={
                    <Typography.Title level={3} type="success">
                        国内游推荐
                    </Typography.Title>
                }
                sideImage={sideImage3}
                products={productList3}
            />
        </MainLayout>
    );
};
