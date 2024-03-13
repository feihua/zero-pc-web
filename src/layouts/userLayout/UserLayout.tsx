import React from "react";
import styles from "./UserLayout.module.css";
import logo from "../../assets/logo.svg";
import {Outlet} from "react-router-dom";


export const UserLayout: React.FC = () => {

    return <>
        <div className={styles.pageContent}>

            <div className={styles.loginTop}>
                <div className={styles.loginTopInner}>
                    <img src={logo} className={styles.logoImg} alt="logo"/>
                    <h1 className={styles.title}>React 购物网</h1>
                </div>
                <div className={styles.desc}>zero mall 电商项目pc-web版本</div>
            </div>
            <div className={styles.childrenForm}>
                <Outlet/>
            </div>
        </div>
    </>
}
