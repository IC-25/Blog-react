import { FaUserAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const Dashboard = ({ blogs }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };
  const deleteBlog = () => {
    console.log("delete");
  };

  const editBlog = () => {
    console.log("edit");
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
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
          </ul>
          <h1 id="nwposttitle">BLOG MANAGEMENT SYSTEM</h1>
        </div>
        <div className="new-blog">
          {showModal && (
            <div className="modal">
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
                    <input type="file" />
                  </div>
                  <div className="blog-form-control">
                    <label>Blog Title</label>
                    <input type="text" />
                  </div>
                  {/* <div className="blog-form-control">
                    <label>blog description</label>
                    <input type="text" />
                  </div> */}
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
            </div>
          )}
        </div>
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
                        <FaTrashAlt id="deleteicon" onClick={deleteBlog} />
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
