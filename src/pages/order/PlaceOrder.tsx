import React from "react";
import {CheckOutCard, PaymentForm} from "../../components";
import {Col, Row} from "antd";

export const PlaceOrderPage: React.FC = (props) => {

    return (
        <div>
            <Row>
                <Col span={12}>
                    <PaymentForm/>
                </Col>
                <Col span={12}>
                    <CheckOutCard

                    />
                </Col>
            </Row>
        </div>
    );
};
