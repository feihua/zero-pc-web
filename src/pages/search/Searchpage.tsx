import styles from "./SearchPage.module.css";
import React from "react";
import {ProductList} from "../../components/productList";

interface MatchParams {
    keywords: string;
}

export const SearchPage: React.FC = () => {
    return (
        <>
            {/* 分类过滤器 */}
            {/* 产品列表  */}
            <div className={styles["product-list-container"]}>
                <ProductList

                />
                SearchPage
            </div>
        </>
    );
};
