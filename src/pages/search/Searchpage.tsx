import styles from "./SearchPage.module.css";
import React, { useEffect } from "react";
import { ProductList } from "../../components/productList";
import { useParams, useLocation } from "react-router-dom";
import { Spin } from "antd";
import { MainLayout } from "../../layouts/mainLayout";

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
