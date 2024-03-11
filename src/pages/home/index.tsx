// @flow
import * as React from 'react';
import {MainLayout} from "../../layouts/mainLayout";
import {Col, Row} from "antd";
import {Carousel} from "../../components/carousel";
import {SideMenu} from "../../components/sideMenu";

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
        </MainLayout>
    );
};
