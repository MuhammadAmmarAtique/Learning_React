import React from "react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import service from "../../appwrite/configuration";
import { useNavigate } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";

function PostForm( {post} ) {
    const { register, handleSubmit, watch, setValue, getValues, control } = useForm({
        defaultValues:{
            title: post?.title || '',  //post (object) ka andar agar title hai tooh wo laay loo, warna title empty kardo
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || active

        }
    })

    const navigate = useNavigate()
    const userData = useSelector((state)=> state.userData)  //replace with state.user.userData if error comes


  return <></>;
}

export default PostForm;
 