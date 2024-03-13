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
import {UserLayout} from "./layouts/userLayout";
import {PersonalPage} from "./pages/personal";

const App: React.FC = () => (
    <div className={styles.App}>
        <BrowserRouter>
            <Routes>
                <Route path="/user" element={<UserLayout/>}>
                    <Route path="register" element={<RegisterPage/>}/>
                    <Route path="login" element={<LoginPage/>}/>
                </Route>
                <Route path="/personal" element={<PersonalPage/>}/>
                <Route path="/detail/:productId" element={<DetailPage/>}/>
                <Route path="/search/:keywords" element={<SearchPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    </div>
);

export default App;
