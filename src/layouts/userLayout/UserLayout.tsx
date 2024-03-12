import React from "react";
import styles from "./UserLayout.module.css";
import logo from "../../assets/logo.svg";

interface UserLayoutProps {
    children: React.JSX.Element
}

export const UserLayout: React.FC<UserLayoutProps> = (props) => {

    return <>
        <div className={styles.pageContent}>

            <div className={styles.loginTop}>
                <div className={styles.loginTopInner}>
                    <img src={logo} className={styles.logoImg} alt="logo"/>
                    <h1 className={styles.title}>React 购物网</h1>
                </div>
                <text className={styles.desc}>zero mall 电商项目pc-web版本</text>
            </div>
            <div className={styles.childrenForm}>
                {props.children}
            </div>
        </div>
    </>
}

