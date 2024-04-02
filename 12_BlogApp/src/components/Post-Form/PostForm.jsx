// Blog post (Form)

import React from "react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import appwriteService from "../../appwrite/configuration"; //service
import { useNavigate } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, getValues, control } =
    useForm({
      defaultValues: {
        title: post?.title || "", //post (object) ka andar agar title hai tooh wo laay loo, warna title empty kardo
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || active,
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData); //replace with state.user.userData if error comes

  // Here now during submission 2 "CASES" comes
  // 1) If values in post is present, then update it.
  // 2) If there is no post, then create a post.

  const submit = async (data) => {
    // CASE 1:
    //Here "data" comes from appwrite + (data mai agar image hai tooh usaay upload krdo warna kuch na kro)
    if (post) {
      const file = (await data.image[0])
        ? appwriteService.uploadFile(data.image[0])
        : null;

      if (file) {
        appwriteService.deleteFile(post.featuredImage); // In appwrite database we called it as featured Image
      } //agar post hai tooh file upload bhi hogaee hai aur delete bhi hogai hai

      const dbPost = appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`post/${dbPost.$id}`);
      }

    // CASE 2:
    } else {
      const file = (await data.image[0])
        ? appwriteService.uploadFile(data.image[0])
        : null;

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId; //getting id & udating data's featured Image

        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id, //userData will come from store
        });
        if (dbPost) {
          navigate(`post/${dbPost.$id}`);
        }
      }
    }
  };

  return <></>;
}

export default PostForm;
