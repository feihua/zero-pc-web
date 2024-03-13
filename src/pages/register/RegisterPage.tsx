import React, {useEffect} from "react";
import {UserLayout} from "../../layouts/userLayout";
import {RegisterForm} from "./RegisterForm";
import {useDispatch} from "react-redux";
import {login} from "../../store/user/slice";
import {queryCategories} from "../../store/categories/slice";

export const RegisterPage: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(login({
            mobile: "18613030352",
            password: "123456"
        }));

        dispatch(queryCategories())
    }, [])
    return (
        <UserLayout>
            <RegisterForm/>
        </UserLayout>
    );
};
