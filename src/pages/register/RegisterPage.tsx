import React, {useEffect} from "react";
import {RegisterForm} from "./RegisterForm";
import {useDispatch} from "react-redux";
import {login, register} from "../../store/user/slice";
import {queryCategories} from "../../store/categories/slice";
import {queryHome} from "../../store/home/slice";
import {queryBrand} from "../../store/brand/slice";

export const RegisterPage: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(login({
            mobile: "18613030352",
            password: "123456"
        }));

        dispatch(register({
            mobile: "18613030352",
            password: "123456", confirmPassword: "123456", username: "test"
        }));
        dispatch(queryCategories())
        dispatch(queryHome())
        dispatch(queryBrand())
    }, [])
    return (
        <RegisterForm/>
    );
};
