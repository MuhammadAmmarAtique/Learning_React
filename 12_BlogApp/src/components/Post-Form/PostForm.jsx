// Blog post (Form)

import React from "react";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import appwriteService from "../../appwrite/configuration"; //service
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return (
        value
          .trim()
          .toLowerCase()
          // Its regex (Regular Expression) inside .replace() which  is replacing any character that is not a letter, digit, or whitespace with a hyphen -
          .replace(/[^a-zA-Z\d\s]+/g, "-")
          .replace(/\s/g, "-")
      );
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      //value is a object here
      if (name === "title") {
        setValue("slug", slugTransform(value.title), {
          shouldValidate: true,
        });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="content"
          control={control} //we will pass control from here to get all values from RTE component
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
