import React, {useEffect} from "react";
import {UserLayout} from "../../layouts/userLayout";
import {RegisterForm} from "./RegisterForm";
import {useDispatch} from "react-redux";
import {signIn} from "../../store/user/slice";
import {queryCategories} from "../../store/categories/slice";

export const RegisterPage: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(signIn({
        //     email: "alex1234@163.com",
        //     password: "Fake123$"
        // }));

        dispatch(queryCategories({}))
    }, [])
    return (
        <UserLayout>
            <RegisterForm/>
        </UserLayout>
    );
};
