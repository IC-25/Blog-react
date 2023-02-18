import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState, useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Edit = ({ blogs }) => {
  const [modal, setModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const selected = blogs.find((item) => item._id === id);
  console.log(selected);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: selected?.title,
      description: selected?.description,
    },
  });
  const handleShowModal = () => {
    setShowModal(true);
  };

  // const editBlog = () => {
  //   console.log("edit");
  // };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", data.image[0]);

    try {
      await axios.patch(
        `https://blogapi-wm30.onrender.com/api/v1/blog/${selected._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      reset();
      navigate("/dashboard");
    } catch (err) {
      console.error(err.response);
    }
  };



  return (
    <div>
      {/* <Dashtopbar /> */}

      <div className="containerdash">
        <ul className="headerdash">
          <li>
            <h1>Dashboard</h1>
          </li>
          <li className="user">
            <FaUserAlt id="user-img" /> <p>Admin</p>
          </li>
        </ul>
        <div className="alldash">
          <ul className="side-bardash">
            <li className="bardash">
              <Link to="/dashboard">Manage</Link>
            </li>
            <li className="bardash">
              <Link to="/chart">HOME</Link>
            </li>
            <li className="bardash" onClick={handleShowModal}>
              NEW POST
            </li>
            <li>
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                {" "}
                <h1 id="myblogdash">LOGOUT</h1>{" "}
              </Link>
            </li>
          </ul>
          <h1 id="nwposttitle">
            <form id="modalform" onSubmit={handleSubmit(onSubmit)}>
              <div className="modal-content">
                <div className="modal-header">
                  <h2>Edit a new blog</h2>
                </div>

                <div className="modal-body">
                  <div className="blog-form-control">
                    <label>Choose Image</label>
                    <input type="file" name="image" {...register("image")} />
                  </div>
                  <div className="blog-form-control">
                    <label>Blog Title</label>
                    <input type="text" name="title" {...register("title")} />
                  </div>
                  <div className="blog-form-control">
                    <label>Blog Description</label>
                  </div>
                </div>
                <div className="modal-footer">
                  <ReactQuill {...register("description")} />
                  <button className="add">Update</button>
                </div>
              </div>
            </form>
          </h1>
        </div>

        <div style={{ display: !modal ? "none" : "flex" }}></div>

        <div className="new-blog"></div>

        {/* end of new blog */}

        <div classNam="dashpic c">
          <div></div>
          <div></div>
          <div></div>
          <div className="chart"></div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
