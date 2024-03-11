// @flow
import * as React from 'react';
import {Header} from "../../components/header";
import {Footer} from "../../components/footer";
import styles from "./index.module.css"

type Props = {
    children: any;

};
export const MainLayout = (props: Props) => {
    return (
        <>
            <Header/>
            <div className={styles.pageContent}>{props.children}</div>
            <Footer/>
        </>
    );
};
