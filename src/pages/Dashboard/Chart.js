import React from "react";


import { useState} from "react";
import { FaUserAlt } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { BarChart, Bar,XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AreaChart, Area,  } from 'recharts';
import {
  ComposedChart,
  Line,
} from "recharts";

import {
  LineChart,
} from "recharts";



export default function Charts() {
  const [modal, setModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {},
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

  const handleDelete = async (id) => {
    try {
      await axios({
        method: "DELETE",
        url: `https://blogapi-wm30.onrender.com/api/v1/blog/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      window.location.reload(true);
    } catch (error) {
      console.log(error.response);
    }
  };

  const myData = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 4,
      year: 2019,
      userGain: 4300,
      userLost: 245,
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
    },
  ];
  const [userData, setUserData] = useState({
    labels: myData.map((data) => data.year),
    datasets: [
      {
        label: "User Gained",
        data: myData.map((data) => data.year),
        backgroundcolor: ["teal", "tomato", "black"],
      },
    ],
  });

  const data = [
    {
      name: "Post A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Post B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Post C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Post D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Post E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "PostF",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Post G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <>
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
              <Link to="/chart">HOME</Link>

            </li>
            <li className="bardash">
              <Link to="/dashboard">Manage</Link>
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
          {/* <h1 id="nwposttitle">BLOG MANAGEMENT SYSTEM</h1> */}
          <br />
          <div style={{ marginTop: "9rem", marginLeft: "8cm" }}>
            {/* <Bar data={userData} /> */}
          </div>
          <div className="chart2">
            {/* <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="pv" stackId="a" fill="#8884d8" />
              <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
              <Bar dataKey="uv" fill="#ffc658" />
            </BarChart> */}
            <BarChart
              width={300}
              height={250}
              data={data}
              margin={{
                top: 40,
                right: 30,
                left: 5,
                bottom: 5,
              }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" stackId="a" fill="#8884d8" />
              <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
            </BarChart>
          </div>
          <div className="chart2">
            <AreaChart
              width={300}
              height={250}
              data={data}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </div>
          <div className="bar3">
            <ComposedChart
              width={300}
              height={250}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="uv" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
          </div>

          <div className="BAR4">
            <LineChart
              width={380}
              height={230}
              data={data}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </LineChart>
            <p>Maybe some other content</p>
            <LineChart
              width={400}
              height={230}
              data={data}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
            </LineChart>
          </div>
        </div>

        <div style={{ display: !modal ? "none" : "flex" }}>
          <form id="modalform" onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>
                &times;
              </span>
              <div className="modal-header">
                <h2>Update The Blog</h2>
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
                <ReactQuill />
                <button className="add">Add</button>
                <button className="cancel" onClick={() => setModal(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="new-blog">
          {showModal && (
            <form id="modalform" onSubmit={handleSubmit(onSubmit)}>
              <div className="modal-content">
                <span className="close" onClick={handleCloseModal}>
                  &times;
                </span>
                <div className="modal-header">
                  <h2>Add a new blog</h2>
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
                    {/* <textarea ty pe="text" colspan="10" /> */}
                  </div>
                </div>
                <div className="modal-footer">
                  <ReactQuill />
                  <button className="add">Add</button>
                  <button className="cancel" onClick={handleCloseModal}>
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* end of new blog */}

        <div classNam="dashpic c">
          <div></div>
          <div></div>
          <div></div>
          <div className="chart"></div>
        </div>
      </div>
    </>
  );
}
