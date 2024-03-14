// @flow
import * as React from 'react';
import {useEffect} from 'react';
import {Col, Row, Typography} from "antd";
import {BrandPartners, Carousel, ProductCollection, SideMenu,} from "../../components";
import {productList1, productList2, productList3} from "../../components/productCollection/mockups";
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import {useDispatch} from "react-redux";
import {queryHome} from "../../store/home/slice";

export const HomePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(queryHome())
    }, []);

    return (
        <>
            <Row style={{marginTop: 20}}>
                <Col span={6}>
                    <SideMenu/>
                </Col>
                <Col span={18}>
                    <Carousel/>
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
            <BrandPartners/>
        </>
    );
};
