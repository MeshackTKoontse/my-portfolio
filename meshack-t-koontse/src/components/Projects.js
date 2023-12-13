import Image from "next/image";
import classes from "./Projects.module.css";

const Projects = () => {
  const rik = "/images/rik.png";
  const drwada = "/images/drwada.png";
  const yelp = "/images/yelp.png";
  const thabeng = "/images/thabeng1.png";
  const vt = "/images/vt.png";

  return (
    <>
      <div id="projects" className="container section">
        <h4 className="pt-5 heading text-center text-lg-start">Projects</h4>
        <div className="d-flex row px-3 justify-content-between">
          <a
            href="https://www.webworld.co.bw"
            target="_blank"
            className={classes["img-container"]}
          >
            <Image
              width="400"
              height="200"
              src="/images/webworld.png"
              alt="web developers in Botswana | webworld can help"
              className={classes.image + " img-fluid  me-auto"}
            />
            <div className={classes.overlay}>
              <div className={classes.text}>Click me!</div>
            </div>
          </a>
          <a
            href="https://richinknowledge.cyclic.app/"
            target="_blank"
            className={classes["img-container"]}
          >
            <Image
              width="400"
              height="200"
              src="/images/rik.png"
              alt="affordable website designers in Botswana | webworld"
              title="Meshack is a website designer/creator/developer for tuitions in Botswana"
              className={classes.image + " img-fluid "}
            />
            <div className={classes.overlay}>
              <div className={classes.text}>Click me!</div>
            </div>
          </a>
          <a
            href="https://www.wheels-adventures.com/"
            target="_blank"
            className={classes["img-container"]}
          >
            <Image
              width="400"
              height="200"
              src="/images/wheels-adventures.png"
              alt="website designers in botswana"
              className={classes.image + " img-fluid "}
            />
            <div className={classes.overlay}>
              <div className={classes.text}>Click me!</div>
            </div>
          </a>

          <a
            href="https://skateonclouds.vercel.app"
            target="_blank"
            className={classes["img-container"]}
          >
            <Image
              width="400"
              height="200"
              src="/images/skateonclouds.vercel.app_.png"
              alt="website designer | webworld"
              className={classes.image + " img-fluid  me-auto"}
            />
            <div className={classes.overlay}>
              <div className={classes.text}>Click me!</div>
            </div>
          </a>
          <a
            href="https://drwadastutorials.up.railway.app/"
            target="_blank"
            className={classes["img-container"]}
          >
            <Image
              width="400"
              height="200"
              src="/images/drwada.png"
              alt="website designers | webworld"
              className={classes.image + " img-fluid  "}
            />
            <div className={classes.overlay}>
              <div className={classes.text}>Click me!</div>
            </div>
          </a>
          <a
            href="http://"
            target="_blank"
            className={classes["img-container"]}
          >
            <Image
              width="400"
              height="200"
              src="/images/yelp.png"
              alt="webworld image"
              className={classes.image + " img-fluid "}
            />
            <div className={classes.overlay}>
              <div className={classes.text}>Click me!</div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
