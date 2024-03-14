import React from "react";
import styles from "./SideMenu.module.css";
import {sideMenuList} from "./mockup";
import {Menu} from "antd";
import {GifOutlined} from "@ant-design/icons";
import {useSelector} from "../../store/hook";

export const SideMenu: React.FC = () => {
    const data = useSelector(s => s.home.data)
    return (
        <Menu mode="vertical" className={styles.sideMenu}>
            {sideMenuList.map((m, index) => (
                <Menu.SubMenu
                    key={`side-menu-${index}`}
                    title={
                        <span>
              <GifOutlined/>
                            {m.title}
            </span>
                    }
                >
                    {m.subMenu.map((sm, smindex) => (
                        <Menu.SubMenu
                            key={`sub-menu-${smindex}`}
                            title={
                                <span>
                  <GifOutlined/>
                                    {sm.title}
                </span>
                            }
                        >
                            {sm.subMenu.map((sms, smsindex) => (
                                <Menu.Item key={`sub-sub-menu-${smsindex}`}>
                  <span>
                    <GifOutlined/>
                      {sms}
                  </span>
                                </Menu.Item>
                            ))}
                        </Menu.SubMenu>
                    ))}
                </Menu.SubMenu>
            ))}
        </Menu>
    );
};
