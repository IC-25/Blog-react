import { FaUserAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
const Dashboard = ({ blogs }) => {
  const [showModal, setShowModal] = useState(false);

  const { register, handleSubmit, reset } = useForm({});
  const handleShowModal = () => {
    setShowModal(true);
  };
  

  const editBlog = () => {
    console.log("edit");
  };
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

  const handleDelete = async (id) =>{
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
  } 

  return (
    <>
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
            <li className="bardash">Manage</li>
            <li className="bardash" onClick={handleShowModal}>
              New post
            </li>
            <li>
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                {" "}
                <h1 id="myblogdash" >MY BLOG</h1>{" "}
              </Link>
            </li>
          </ul>
          <h1 id="nwposttitle">BLOG MANAGEMENT SYSTEM</h1>
        </div>

        {/* Start of new blog */}

        <div className="new-blog">
          {showModal && (
            // dashoboardmodal
            // <form onSubmit={handleSubmit(onSubmit)}></form>

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

            // end of modal
          )}
        </div>

        {/* end of new blog */}

        <div class="dashpic">
          <div>
            <div class="dashpicCard">
              <table border="0">
                <tr>
                  <td>
                    {" "}
                    <b>Image</b>
                  </td>
                  <td>
                    {" "}
                    <b> Description</b>
                  </td>
                  <td colSpan="2">
                    {" "}
                    <b>Action</b>
                  </td>
                </tr>
                {blogs.map((blog, index) => {
                  return (
                    <tr>
                      <td>
                        <img
                          src={blog.image}
                          className="allow"
                          alt="hjghjkjhgggjhkjgh"
                          style={{ width: "200px", height: "auto" }}
                        />
                      </td>
                      <td>
                        <h3>{blog.title}</h3>
                      </td>
                      <td>
                        {" "}
                        <FaRegEdit id="editicon" onClick={editBlog} />
                      </td>
                      <td>
                        {" "}
                        <FaTrashAlt
                          id="deleteicon"
                          onClick={() => {
                            handleDelete(blog._id);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
