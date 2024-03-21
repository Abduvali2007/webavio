import React from "react";
import aboutimg from "../../Assets/Img/aboutimg.png";
import aboutcardimg from "../../Assets/Img/about-card-img.svg";
const About = () => {
  return (
    <div id="about">
      <div className="about">
        <div className="about-text">
          <h1>
            Is this the future of <br />
            3D model?
          </h1>
          <p>
            While it was just a TV show, that little speech at the <br />{" "}
            beginning of the original Star Trek show really did do <br /> a good
            job of capturing our feelings about space.
          </p>
          <p>
            It is those feelings that drive our love of astronomy <br /> and our
            desire to learn more and more about it.
          </p>
          <h3 href="#"> See Case Study</h3>
        </div>
        <div className="about-img">
          <img src={aboutimg} alt="img" />
          <div className="about-card">
            <p>
              “I know they are going to be honest with me. I <br /> am not going
              to get a subpar product; I know it <br /> is going to be good.
              That is the number one <br /> advantage of working with Exhibit
              Systems.
            </p>
            <div className="card-img">
              <img src={aboutcardimg} alt="img" />
              <div className="card-text">
                <h2>Lina Hart</h2>
                <h4>Founder & CEO, Jico</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
