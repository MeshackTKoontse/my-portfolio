import classes from "./AboutMe.module.css";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="section">
      <div className={classes.bg + " py-4"}>
        {" "}
        <div id="About-me" className="container px-0 pt-4 ">
          <div className={classes.main}>
            <div className={classes.content}>
              <h4 className="heading text-center text-lg-start">About Me</h4>
              <div className={" d-lg-flex"}>
                <div
                  className={
                    classes["img-container"] + " col-4 d-none d-lg-block"
                  }
                >
                  <Image
                    src={"/images/meshack-koontse2.jpg"}
                    width={400}
                    height={400}
                    alt="Botswana website creator - an image of a guy to create a website with."
                    className="img-fluid"
                    srcset=""
                    title="web design company leader"
                  />
                </div>
                <div className="col-lg-8 col pe-lg-4 ms-lg-5 mx-2">
                  <p>
                    I am a dedicated full-stack developer based in Botswana.
                    With a passion for creating responsive, visually stunning
                    websites, I began my journey in web design in May 2020.
                    Focusing on my projects, I have honed my skills and
                    abilities to create truly extraordinary designs. Along the
                    way, I reinforced my knowledge by completing a course in
                    April 2022, solidifying my status as a professional
                    designer. My portfolio website showcases my skills and
                    demonstrates my ability to create beautiful, responsive
                    designs that stand out from the rest.
                  </p>
                  <div
                    className={
                      classes["small-img-container"] +
                      " col-lg-4 col-9 d-lg-none my-5 mx-auto"
                    }
                  >
                    <Image
                      src={"/images/meshack-koontse-square.jpg"}
                      width={300}
                      height={300}
                      alt="Image of the best website designer in Botswana for small and big businesses."
                      className="mx-auto profile-picture"
                      srcset=""
                      title="Meshack Koontse"
                    />
                  </div>
                  <h5>My Skills:</h5>
                  <h6 className="text-center">Front-End</h6>
                  <div className=" row text-center justify-content-center skills align-items-center my-lg-5">
                    <div
                      className={
                        classes["skill-card"] +
                        " border-0 shadow-sm me-1 col-4 col-md col-lg-2 mt-2 card"
                      }
                    >
                      <i className="fa-brands fa-html5"></i>
                      <p>HTML</p>
                    </div>
                    <div
                      className={
                        classes["skill-card"] +
                        " border-0 shadow-sm me-1 col-4 col-md col-lg-2 mt-2 card"
                      }
                    >
                      <i className="fa-brands fa-css3"></i>
                      <p>CSS</p>
                    </div>
                    <div
                      className={
                        classes["skill-card"] +
                        " border-0 shadow-sm me-1 col-4 col-md col-lg-2 mt-2 card"
                      }
                    >
                      <i className="fa-brands fa-bootstrap"></i>
                      <p>Bootstrap</p>
                    </div>
                    <div
                      className={
                        classes["skill-card"] +
                        " border-0 shadow-sm me-1 col-4 col-md col-lg-2 mt-2 card"
                      }
                    >
                      <i className="fa-brands fa-js"></i>
                      <p>JavaScript</p>
                    </div>
                    <div
                      className={
                        classes["skill-card"] +
                        " border-0 shadow-sm me-1 col-4 col-md col-lg-2 mt-2 card"
                      }
                    >
                      <i class="fa-brands fa-react"></i>

                      <p>React JS</p>
                    </div>
                  </div>
                  <h6 className="text-center">Back-End</h6>
                  <div className="row text-center justify-content-center skills align-items-center my-lg-5">
                    <div
                      className={
                        classes["skill-card"] +
                        " border-0 shadow-sm me-1 col-4 col-md col-lg-2 mt-2 card"
                      }
                    >
                      <i className="fa-brands fa-git-alt"></i>
                      <p>Git</p>
                    </div>
                    <div
                      className={
                        classes["skill-card"] +
                        " border-0 shadow-sm me-1 col-4 col-md col-lg-2 mt-2 card"
                      }
                    >
                      <i className="fa-brands fa-github"></i>
                      <p>Github</p>
                    </div>
                    <div
                      className={
                        classes["skill-card"] +
                        " border-0 shadow-sm me-1 col-4 col-md col-lg-2 mt-2 card"
                      }
                    >
                      <i className="fa-brands fa-node-js"></i>
                      <p>Node JS</p>
                    </div>
                    <div
                      className={
                        classes["skill-card"] +
                        " border-0 shadow-sm me-1 col-4 col-md col-lg-2 mt-2 card"
                      }
                    >
                      <i className="fa-brands fa-envira"></i>
                      <p>MongoDB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
