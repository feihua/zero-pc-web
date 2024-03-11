// @flow
import {Layout, Typography } from 'antd';
import * as React from 'react';

type Props = {

};
export const Footer = (props: Props) => {
    return (
        <Layout.Footer>
            <Typography.Title level={3} style={{textAlign: 'center'}}>
                版权所有 @ React 购物网
            </Typography.Title>
        </Layout.Footer>
    );
};
