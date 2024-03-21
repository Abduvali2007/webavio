import React from "react";
import footerhead from "../../Assets/Img/footer-head.png";
import iconmedia from "../../Assets/Img/Social Media icon.png";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <img src={footerhead} alt="img  " />
          <div className="footer-text">
            <div className="text1">
              <h3>Phone</h3>
              <h4>+32 50 31 28 32</h4>
            </div>
            <div className="text1">
              <h3>Addres</h3>
              <h4>491 Merlin Crest Suite 963</h4>
            </div>
          </div>
          <hr />
          <div className="footer-bet">
            <div className="bet-texts">
              <div className="bet-text">
                <h3>Services</h3>
                <p>Strategy Design</p>
                <p>Product Design</p>
                <p>Content Strategy</p>
                <p>Brand Strategy </p>
                <p>Development </p>
              </div>
              <div className="bet-text">
                <h3>Help And Advice</h3>
                <p>How it works</p>
                <p>Contact Support</p>
                <p>Privacy Policy</p>
                <p>FAQ </p>
                <p> </p>
              </div>
              <div className="bet-text">
                <h3>Company </h3>
                <p>About</p>
                <p>Blog</p>
                <p>Contact</p>
                <p>Jobs</p>
                <p> </p>
              </div>
            </div>
            <div className="get-text">
              <h2>Get in Touch</h2>
              <h3>
                Feel free to get in touch with us <br /> vai email
              </h3>
              <h1>info.webovio@gmail.com</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
