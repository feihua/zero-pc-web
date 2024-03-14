import React from "react";
import {Col, Divider, Row, Typography} from "antd";
import styles from "./BusinessPartners.modules.css";

import image1 from '../../assets/images/microsoft-80658_640.png';
import image2 from '../../assets/images/icon-720944_640.png';
import image3 from '../../assets/images/follow-826033_640.png';
import image4 from '../../assets/images/facebook-807588_640.png';
import {useSelector} from "../../store/hook";

const companies = [
    {src: image1, title: "Microsoft"},
    {src: image2, title: "Youtube"},
    {src: image3, title: "Ins"},
    {src: image4, title: "Facebook"}
]

export const BusinessPartners: React.FC = (props) => {

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
