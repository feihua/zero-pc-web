import React, {useEffect} from 'react';
import {Button, Checkbox, Form, type FormProps, Input, message} from 'antd';
import {useDispatch} from 'react-redux';
import {useSelector} from '../../store/hook'
import {register, userSlice} from "../../store/user/slice";
import {useNavigate} from "react-router-dom";

type FieldType = {
    username: string;
    mobile: string;
    password: string;
    confirmPassword: string;
    remember: string;
};


//会员注册页
export const RegisterPage: React.FC = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const token = useSelector(s => s.user.token)
    const error = useSelector(s => s.user.error)

    useEffect(() => {
        console.log('token', token)
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
        dispatch(register(values))

    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return <>
        <Form
            name="RegisterForm"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="昵称"
                name="username"
                rules={[{required: true, message: '请输入用户名!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item<FieldType>
                label="手机"
                name="mobile"
                rules={[{required: true, message: '请输入手机!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item<FieldType>
                label="密码"
                name="password"
                rules={[{required: true, message: '请输入密码!'}]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item<FieldType>
                label="确认密码"
                name="confirmPassword"
                rules={[{required: true, message: '确认密码!'}]}
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

