import React from "react";
import logo from "../../Assets/Img/01 Navigation bar.png";
import client from "../../Assets/Img/03 Client.png";
import Oval from "../../Assets/Img/Oval.png";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={logo} alt="img" />
          <div className="header-text">
            <h6>A place where </h6>
            <h1>
              A creative agency <br /> for redemptive <br /> brands
            </h1>
            <p>
              Anteelo is a leading strategic design firm that builds powerful
              digital <br /> solutions for startups and enterprises.
            </p>
            <a href="#"> Get in touch</a>
          </div>
          <div className="header-img">
            <img src={client} alt="img" />
          </div>
          <div className="header-foot">
            <div className="foot-left">
              <h6>What we do for you</h6>
              <h1>
                Strategy. Design <br /> Content. Technology <br /> Development
              </h1>
              <p>
                There’s no secret sauce, no wizard behind the curtain. What
                <br />
                makes Aerolab tick is an interdisciplinary team with a <br />
                framework that fosters candid collaboration.
              </p>
              <h3> More know About us</h3>
            </div>
            <div className="foot-rigth">
              <p>
                With More than 10 Years of <br /> Knowledge and Expertise we{" "}
                <br />
                Design and Code Websites and <br /> Apps, We Build Brands and
                Help <br /> Them Succeed
              </p>
              <div className="right-img">
                <img src={Oval} alt="img    " />
                <div className="rigth-text">
                  <h2>Genevieve Rodriquez</h2>
                  <h4>Founder & CEO, Webovio</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
