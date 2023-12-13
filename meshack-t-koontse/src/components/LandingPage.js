import classes from "./landingPage.module.css";

import Image from "next/image";

const LandingPage = () => {
  return (
    <div id="home" className="section">
      <div className="container px-0 pt-5">
        <div className={classes.main + " pt-5"}>
          <div className={classes.content + " d-lg-flex d-block"}>
            <div className={classes.textContent + " col-lg-6 col "}>
              <h4 className={classes["sub-heading"]}>
                Creativity is my most important tool
              </h4>
              <h1 className={classes.heading}>
                Hello, my name is <span className="color2">Meshack</span>, and I
                am -a <span className="color">Full-Stack Developer</span>...
              </h1>
              <div className="d-flex">
                <button className="mx-lg-0 mx-auto my-4 my-lg-auto">
                  Download CV <i class="fa-solid fa-download"></i>
                </button>
              </div>
            </div>
            <div className={classes.illustration + " col-lg-6 col  "}>
              <div className={classes.imgContainer}>
                <Image
                  width={380}
                  height={500}
                  src="/images/download.png"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
