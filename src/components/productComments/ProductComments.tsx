import {List} from "antd";
import React from "react";

interface PropsType {
    data: {
        author: string;
        avatar: string;
        content: string;
        createDate: string;
    }[];
}

export const ProductComments: React.FC<PropsType> = ({data}) => {
    return (
        <List
            dataSource={data}
            itemLayout="horizontal"
            renderItem={(item) => {
                return (
                    <li>
                        {item.author}
                    </li>
                );
            }}
        ></List>
    );
}
