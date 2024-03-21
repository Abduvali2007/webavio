import React from "react";
import section3 from "../../Assets/Img/section3-img.png";
import section3cardimg from "../../Assets/Img/section3-card-img.svg";

const Section3 = () => {
  return (
    <div id="section3">
      <div className="section3">
        <img src={section3} alt="img " />
        <div className="section3-card">
          <p>
            “Exhibit Systems is not a provider. They are not a <br />
            supplier. They are a partner with expertise in <br /> making trade
            shows effective.”
          </p>
          <div className="card-img">
            <img src={section3cardimg} alt="img" />
            <div className="card-text">
              <h2>Eunice Oliver</h2>
              <h4>Founder & CEO, Zeem</h4>
            </div>
          </div>
        </div>
        <div className="section3-text">
          <h1>
            Is this the future of <br /> Online Booking
          </h1>
          <p>
            You should be able to find several indispensable <br /> facts about
            motivation in the following paragraphs.{" "}
          </p>
          <p>
            If there’s at least one fact you didn’t know before, <br /> imagine
            the difference it might make.{" "}
          </p>
          <h3> See Case Study</h3>
        </div>
      </div>
    </div>
  );
};

export default Section3;
