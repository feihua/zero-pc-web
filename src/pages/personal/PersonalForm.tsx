import React from 'react';
import {type FormProps} from 'antd';


type FieldType = {
    username?: string;
    password?: string;
    cpassword?: string;
    remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
export const PersonalForm: React.FC = () => {

    return <>

        PersonalForm

    </>
}

