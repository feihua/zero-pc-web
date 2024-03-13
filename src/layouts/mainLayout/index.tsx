// @flow
import * as React from 'react';
import {Footer, Header} from "../../components";
import styles from "./index.module.css"
import {Outlet} from "react-router-dom";


export const MainLayout = () => {
    return (
        <>
            <Header/>
            <div className={styles.pageContent}>
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
};
