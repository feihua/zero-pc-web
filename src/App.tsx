import React from 'react';
import 'antd/dist/reset.css';
import styles from './App.module.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {LoginPage} from "./pages/login";
import {RegisterPage} from "./pages/register";
import {HomePage} from "./pages/home";
import {CartPage} from "./pages/cart";
import {DetailPage} from "./pages/detail";
import {SearchPage} from "./pages/search";

const App: React.FC = () => (
    <div className={styles.App}>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/detail/:productId" element={<DetailPage/>}/>
                <Route path="/search/:keywords" element={<SearchPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/*" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    </div>
);

export default App;
