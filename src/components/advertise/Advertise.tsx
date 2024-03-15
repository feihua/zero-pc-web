import React from "react";
import styles from "./Advertise.module.css";
import {Carousel as AntCarousel, Image} from 'antd';
import {useSelector} from "../../store/hook";

// 轮播广告
export const Advertise: React.FC = () => {
    const data = useSelector(s => s.home.data)
    return (
        <AntCarousel autoplay className={styles.slider}>
            {data.advertiseList.map((item) => <Image src={item.pic}/>)}
        </AntCarousel>
    );
}
