import React from "react";
import ReactQuill from "react-quill";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useForm } from "react-hook-form";

function Create() {
  // const [description, setDescription] = useState("");
  const { register, handleSubmit, reset } = useForm({});
  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", data.image[0]);

    try {
      await axios.post(
        "https://blogapi-wm30.onrender.com/api/v1/blog",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      reset();
      alert("Successfully");
    } catch (err) {
      console.error(err.response);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="title"
        {...register("title")}
        placeholder={"Enter Title"}
      />
      <textarea
        {...register("description")}
        id=""
        name="description"
        cols="30"
        rows="10"
      ></textarea>
      <label htmlFor="">Image</label>
      <input type="file" name="image" id="file" {...register("image")} />
      <button type="submit" style={{ marginTop: "80px" }}>
        Create post
      </button>
    </form>
  );
}

export default Create;
