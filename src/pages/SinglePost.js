
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

  const SinglePost = ({blogs}) => {
    const { blogId } = useParams();
    console.log(blogId);

    const single = blogs.find((blog) => blog._id === blogId);
    const { title, image } = single;
    return (
      <>
        <div className="insidepost">
          <img src={image} alt={title} />
          <h2>{title}</h2>
          <p>
            installation and configuration of <br /> cisco Routers Can be indoor
            or outdoor With wired and wireless cameras. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p>{single.id}</p>
        </div>

        <div className="comments">
          <h1 className="commenttop">COMMENTS</h1> <br />
          <input type="text" id="names" placeholder="Enter your Name" /> <br />
          <textarea
            type="text"
            id="Comments"
            placeholder="Enter your Comment"
          />
          <br />
          <button id="commentbuton">SUBMIT</button>
        </div>

        <section id="footer">
          <div class="container footer">
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
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
      </>
    );
  };

export default SinglePost;
