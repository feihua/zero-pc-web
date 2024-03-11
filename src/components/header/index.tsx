// @flow
import {Button, Input, Menu, Typography} from 'antd'
import * as React from 'react';
import styles from "./index.module.css"
import {useNavigate} from 'react-router-dom';
import logo from '../../assets/logo.svg'

type Props = {};
export const Header = (props: Props) => {
    const navigate = useNavigate();

    const data1 = [
        {
            "id": 1,
            "name": "万和",
            "firstLetter": "W",
            "sort": 0,
            "factoryStatus": 1,
            "showStatus": 1,
            "productCount": 100,
            "productCommentCount": 100,
            "logo": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/timg(5).jpg",
            "bigPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221108/huawei_banner_01.png",
            "brandStory": "Victoria's Secret的故事"
        },
        {
            "id": 2,
            "name": "三星",
            "firstLetter": "S",
            "sort": 100,
            "factoryStatus": 1,
            "showStatus": 1,
            "productCount": 100,
            "productCommentCount": 100,
            "logo": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20200607/57201b47N7bf15715.jpg",
            "bigPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221108/sanxing_banner_01.png",
            "brandStory": "三星的故事"
        },
        {
            "id": 3,
            "name": "华为",
            "firstLetter": "H",
            "sort": 100,
            "factoryStatus": 1,
            "showStatus": 1,
            "productCount": 100,
            "productCommentCount": 100,
            "logo": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20200607/5abf6f26N31658aa2.jpg",
            "bigPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221108/huawei_banner_01.png",
            "brandStory": "Victoria's Secret的故事"
        },
        {
            "id": 4,
            "name": "格力",
            "firstLetter": "G",
            "sort": 30,
            "factoryStatus": 1,
            "showStatus": 1,
            "productCount": 100,
            "productCommentCount": 100,
            "logo": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/timg (3).jpg",
            "bigPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221108/huawei_banner_01.png",
            "brandStory": "Victoria's Secret的故事"
        },
        {
            "id": 5,
            "name": "方太",
            "firstLetter": "F",
            "sort": 20,
            "factoryStatus": 1,
            "showStatus": 1,
            "productCount": 100,
            "productCommentCount": 100,
            "logo": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/timg (4).jpg",
            "bigPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221108/huawei_banner_01.png",
            "brandStory": "Victoria's Secret的故事"
        },
        {
            "id": 6,
            "name": "小米",
            "firstLetter": "M",
            "sort": 500,
            "factoryStatus": 1,
            "showStatus": 1,
            "productCount": 100,
            "productCommentCount": 100,
            "logo": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20200607/5565f5a2N0b8169ae.jpg",
            "bigPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221108/xiaomi_banner_01.png",
            "brandStory": "小米手机的故事"
        },
        {
            "id": 21,
            "name": "OPPO",
            "firstLetter": "O",
            "sort": 0,
            "factoryStatus": 1,
            "showStatus": 1,
            "productCount": 88,
            "productCommentCount": 500,
            "logo": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/timg(6).jpg",
            "bigPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221108/huawei_banner_01.png",
            "brandStory": "string"
        },
        {
            "id": 49,
            "name": "七匹狼",
            "firstLetter": "S",
            "sort": 200,
            "factoryStatus": 1,
            "showStatus": 1,
            "productCount": 77,
            "productCommentCount": 400,
            "logo": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180518/1522738681.jpg",
            "bigPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221108/huawei_banner_01.png",
            "brandStory": "BOOB的故事"
        },
        {
            "id": 50,
            "name": "海澜之家",
            "firstLetter": "H",
            "sort": 200,
            "factoryStatus": 1,
            "showStatus": 1,
            "productCount": 66,
            "productCommentCount": 300,
            "logo": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20200607/5a5c69b9N5d6c5696.jpg",
            "bigPic": "http://img10.360buyimg.com/cms/jfs/t1/133148/4/1605/470028/5edaf5ccEd7a687a9/e0a007631361ff75.jpg",
            "brandStory": "海澜之家的故事"
        },
        {
            "id": 51,
            "name": "苹果",
            "firstLetter": "A",
            "sort": 200,
            "factoryStatus": 1,
            "showStatus": 1,
            "productCount": 55,
            "productCommentCount": 200,
            "logo": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20200607/49b30bb0377030d1.jpg",
            "bigPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221108/apple_banner_01.png",
            "brandStory": "苹果的故事"
        }
    ]

    return (
        <>
            <div className={styles.appHeader}>
                <div className={styles.headerFirst}>
                    <Typography.Text>让购物更愉快</Typography.Text>

                    <Button.Group className={styles.buttonGroup}>
                        <Button onClick={() => navigate('/register')}>
                            注册
                        </Button>
                        <Button onClick={() => navigate('/login')}>
                            登录
                        </Button>
                    </Button.Group>
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

                <Menu mode={'horizontal'} className={styles.mainMenu} style={{color: "white"}}>
                    {data1.map(item => <Menu.Item key={item.id}>{item.name}</Menu.Item>)}
                </Menu>

            </div>
        </>
    );
};
