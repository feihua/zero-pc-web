import React from "react";
import styles from "./UserLayout.module.css";
import logo from "../../assets/logo.svg";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import {LoginPage} from "../../pages/login";
import {RegisterPage} from "../../pages/register";
import {DetailPage} from "../../pages/detail";
import {SearchPage} from "../../pages/search";
import {CartPage} from "../../pages/cart";
import {HomePage} from "../../pages/home";

interface UserLayoutProps {
    children?: React.JSX.Element
}

export const UserLayout: React.FC<UserLayoutProps> = (props) => {

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
