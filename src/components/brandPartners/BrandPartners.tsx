import React from "react";
import {Col, Divider, Row, Typography} from "antd";
import styles from "./BrandPartners.modules.css";

import {useSelector} from "../../store/hook";


export const BrandPartners: React.FC = (props) => {

    const data = useSelector(s => s.home.data)

    return (
        <div className={styles.content}>
            <Divider orientation="left">
                <Typography.Title level={3}>合作品牌</Typography.Title>
            </Divider>
            <Row>
                {data.brandList.map((c, index) => (
                    <Col span={4} key={"bussiness-partner-" + index}>
                        <img
                            alt="bussiness-partner"
                            src={c.bigPic}
                            style={{
                                width: "80%",
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                            }}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
};
