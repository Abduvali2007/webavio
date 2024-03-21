import React from "react";
import imagehero from "../../Assets/Img/image-hero.png";
import herocardimg from "../../Assets/Img/herocardimg.svg";

const Hero = () => {
  return (
    <div id="hero">
      <div className="hero">
        <h1>
          We Have Some <br />
          Awesomr Project.
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and <br />{" "}
          typesetting industry. Lorem Ipsum has been the industry's <br />{" "}
          standard dummy text ever since the 1500s,{" "}
        </p>
      </div>
      <div className="hero-img">
        <img className="img" src={imagehero} alt="img" />
        <div className="hero-text">
          <h1>
            The wall new <br />
            Balenciaga.com
          </h1>
          <p>
            This article is floated online with an aim to help you <br /> find
            the best dvd printing solution.
          </p>
          <p>
            Dvd printing is an important feature used by large <br /> and small
            DVD production houses to print <br /> information on DVDs.
          </p>
          <h3 href="#"> See Case Study</h3>
        </div>
        <div className="hero-card">
          <p>
            “In my history of working with trade show <br /> vendors, I can
            honestly say that there is not one <br /> company that I've ever
            worked with that has <br /> better service than Exhibit Systems.”
          </p>
          <div className="hero-card-img">
            <img src={herocardimg} alt="img" />
            <div className="hero-card-text">
              <h3>Angel Armstrong</h3>
              <h4>Founder & CEO, Google</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
