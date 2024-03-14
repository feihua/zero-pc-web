import React, {useEffect} from 'react';
import {Button, Checkbox, Form, type FormProps, Input, message} from 'antd';
import {useDispatch} from 'react-redux';
import {useSelector} from '../../store/hook'
import {login, register, userSlice} from "../../store/user/slice";
import {useNavigate} from "react-router-dom";

type FieldType = {
    account: string;
    password: string;
    remember: string;
};


//会员登录页
export const LoginPage: React.FC = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const token = useSelector(s => s.user.token)
    const error = useSelector(s => s.user.error)

    useEffect(() => {
        if (token !== null) {
            navigate(`/`)
        }
    }, [token])


    useEffect(() => {
        if (error) {
            message.error(error);
            dispatch(userSlice.actions.logOut())
        }
    }, [error]);


    const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
        console.log('Success:', values);
        dispatch(login(values))

    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return <>
        <Form
            name="LoginForm"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="账号"
                name="account"
                rules={[{required: true, message: '请输入昵称或手机!'}]}
            >
                <Input placeholder={"昵称或手机"}/>
            </Form.Item>

            <Form.Item<FieldType>
                label="密码"
                name="password"
                rules={[{required: true, message: '请输入密码!'}]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item<FieldType>
                name="remember"
                valuePropName="checked"
                wrapperCol={{offset: 8, span: 16}}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    注册
                </Button>
            </Form.Item>
        </Form>
    </>
}

