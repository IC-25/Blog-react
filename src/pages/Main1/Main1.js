import "./Main.css";
import { Link } from "react-router-dom";
const Main1 = ({blogs}) => {

  return (
    <div>
      <h2 class="Maintitle">Here Are Blogs</h2>
      <section id="blog">
        <div class="container portfolio">
          {blogs.map((blog, index) => {
            return (
              <div class="portfolioCard">
                <img
                  src={blog.image}
                  className="allow"
                  alt="hjghjkjhgggjhkjgh"
                />
                <h3>{blog.title}</h3>
                <Link className="view" to={`${blog._id}`}>
                  <li className="view">View more</li>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section id="footer">
        <div class="container footer">
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            {" "}
            <h1>MY BLOG</h1>{" "}
          </Link>
        </div>
        <div class="container footer">
          <p>
            Quality Service Makes Different <br></br>
            Terms Of Service <br></br>
            Privacy Policy <br></br>
            <p>&copy;IC-25</p>
          </p>
        </div>
        <div class="container footer">
          <p>
            <b> NOT QUITE READY FOR BLOG</b> <br></br>
            Join our online blog no-code community for free.No spam.Ever{" "}
            <br></br>
            <input
              id="footerinput"
              type="Email"
              placeholder="Enter your Email"
            />
            <button id="footerbutton">Subscribe</button> <br></br>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Main1;
