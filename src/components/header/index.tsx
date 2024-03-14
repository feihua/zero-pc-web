// @flow
import {Button, Input, Menu, Typography} from 'antd'
import * as React from 'react';
import {useEffect} from 'react';
import styles from "./index.module.css"
import {useNavigate} from 'react-router-dom';
import logo from '../../assets/logo.svg'
import {useDispatch} from "react-redux";
import {userSlice} from "../../store/user/slice";
import {useSelector} from "../../store/hook";
import {queryBrand} from "../../store/brand/slice";

export const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector(s => s.brand.data)

    const token = useSelector(s => s.user.token)

    useEffect(() => {
        dispatch(queryBrand())
    }, []);

    return (
        <>
            <div className={styles.appHeader}>
                <div className={styles.headerFirst}>
                    <Typography.Text>让购物更愉快</Typography.Text>

                    {token ? (
                        <Button.Group className={styles.buttonGroup}>
                            <Button onClick={() => navigate('/cart')}>
                                购物车
                            </Button>
                            <Button onClick={() => dispatch(userSlice.actions.logOut())}>
                                退出
                            </Button>
                        </Button.Group>
                    ) : (
                        <Button.Group className={styles.buttonGroup}>
                            <Button onClick={() => navigate('/user/register')}>
                                注册
                            </Button>
                            <Button onClick={() => navigate('/user/login')}>
                                登录
                            </Button>
                        </Button.Group>

                    )}

                </div>

                <div className={styles.headerTwo}>
                    <img src={logo} alt="logo" className={styles.AppLogo}/>
                    <Typography.Title level={3} className={styles.title}>React 购物网</Typography.Title>
                    <Input.Search
                        placeholder={'请输入商品名称或关键字'}
                        className={styles['searchInput']}
                        onSearch={(keywords: any) => navigate(`/search/${keywords}`)}
                    ></Input.Search>
                </div>

                <Menu
                    mode={'horizontal'}
                    className={styles.mainMenu}
                    style={{color: "white"}}
                >
                    {data != null && data.map(item => <Menu.Item key={item.id}>{item.name}</Menu.Item>)}
                </Menu>

            </div>
        </>
    );
};
