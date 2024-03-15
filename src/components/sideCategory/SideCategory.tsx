import React from "react";
import styles from "./SideCategory.module.css";
import {Menu} from "antd";
import {useSelector} from "../../store/hook";

export const SideCategory: React.FC = () => {

    const data = useSelector(s => s.category.data)
    return (
        <>
            <Menu  className={styles.sideMenu} mode="vertical" items={data} />

        </>

    );
};
