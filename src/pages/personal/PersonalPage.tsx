import React, {useEffect} from "react";
import {PersonalForm} from "./PersonalForm";
import {useDispatch} from "react-redux";
import {login} from "../../store/user/slice";
import {queryCategories} from "../../store/categories/slice";
import {queryHome} from "../../store/home/slice";

export const PersonalPage: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(login({
            account: "18613030352",
            password: "123456"
        }));

        dispatch(queryCategories())
        dispatch(queryHome())
    }, [])
    return (
        <PersonalForm/>
    );
};
