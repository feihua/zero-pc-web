import styles from "./SearchPage.module.css";
import React from "react";
import {ProductList} from "../../components/productList";
import {MainLayout} from "../../layouts/mainLayout";

interface MatchParams {
    keywords: string;
}

export const SearchPage: React.FC = () => {
    return (
        <MainLayout>
            {/* 分类过滤器 */}
            {/* 产品列表  */}
            <div className={styles["product-list-container"]}>
                <ProductList

                />
            </div>
        </MainLayout>
    );
};
