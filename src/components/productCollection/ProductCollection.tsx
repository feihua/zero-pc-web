import React from "react";
import styles from "./ProductCollection.module.css";
import {Col, Divider, Row} from "antd";
import {ProductImage} from "./ProductImage";

interface PropsType {
    title: JSX.Element;
    sideImage: string;
    products: any[];
}

export const ProductCollection: React.FC<PropsType> = ({title, sideImage, products}) => {
    return (
        <div className={styles.content}>
            <Divider orientation="left">{title}</Divider>
            <Row>
                <Col span={4}>
                    <img src={sideImage} className={styles.sideImage} alt=""/>
                </Col>
                <Col span={20}>
                    <Row>
                        <Col span={12}>
                            <ProductImage
                                id={products[0].id}
                                size={"large"}
                                title={products[0].title}
                                imageSrc={products[0].touristRoutePictures[0].url}
                                price={products[0].price}
                            />
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Col span={12}>
                                    <ProductImage
                                        id={products[1].id}
                                        size="small"
                                        title={products[1].title}
                                        imageSrc={products[1].touristRoutePictures[0].url}
                                        price={products[1].price}
                                    />
                                </Col>
                                <Col span={12}>
                                    <ProductImage
                                        id={products[2].id}
                                        size="small"
                                        title={products[2].title}
                                        imageSrc={products[2].touristRoutePictures[0].url}
                                        price={products[2].price}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <ProductImage
                                        id={products[3].id}
                                        size="small"
                                        title={products[3].title}
                                        imageSrc={products[3].touristRoutePictures[0].url}
                                        price={products[3].price}
                                    />
                                </Col>
                                <Col span={12}>
                                    <ProductImage
                                        id={products[4].id}
                                        size="small"
                                        title={products[4].title}
                                        imageSrc={products[4].touristRoutePictures[0].url}
                                        price={products[4].price}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <ProductImage
                                id={products[5].id}
                                size="small"
                                title={products[5].title}
                                imageSrc={products[5].touristRoutePictures[0].url}
                                price={products[5].price}
                            />
                        </Col>
                        <Col span={6}>
                            <ProductImage
                                id={products[6].id}
                                size="small"
                                title={products[6].title}
                                imageSrc={products[6].touristRoutePictures[0].url}
                                price={products[6].price}
                            />
                        </Col>
                        <Col span={6}>
                            <ProductImage
                                id={products[7].id}
                                size="small"
                                title={products[7].title}
                                imageSrc={products[7].touristRoutePictures[0].url}
                                price={products[7].price}
                            />
                        </Col>
                        <Col span={6}>
                            <ProductImage
                                id={products[8].id}
                                size="small"
                                title={products[8].title}
                                imageSrc={products[8].touristRoutePictures[0].url}
                                price={products[8].price}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}
