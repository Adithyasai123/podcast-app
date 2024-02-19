import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import cheering_crowd from "../../Assests/cheering_crowd.png";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_u0z8q68", "template_0327hc9", form.current, {
        publicKey: "ZjLqsgVb47yaZGlZA",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <section style={{ backgroundColor: "#0E101C" }}>
        <div className="container-music ">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="">
                <img
                  src={cheering_crowd}
                  alt="cheering_crowd"
                  className="cheering_crowd-img position-relative"
                />
              </div>
            </div>

            <div className="col-12 col-lg-6 music-main">
              <div className="right-side-container">
                <span className="Music-band-text">Our Music Band</span>
                <div className="Music-para-main">
                  <span className="Music-band-para">
                    Explains the topic of your show and what a listener can
                    expect to hear when they press play on one of your
                    episodes.Explains the topic of your show and what a listener
                    can expect to hear when they press play on one of your
                    episodes.
                  </span>
                </div>
                <div>
                  <button className="contact-button">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "#0E101C" }}>
        <div className="container">
          <div className="row">
            <div className="ready_button">
              <span style={{ float: "right" }}>
                <span className="Ready-text">Ready to get Started?</span>
                {/* <button id="/Register"className="Get-started-button">Get Started</button> */}
                <span>
                  <RouterLink to="/register">
                    <button
                      className="Get-started-button"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Get Started
                    </button>
                  </RouterLink>
                </span>
              </span>
            </div>
            <div className="col-12 col-lg-4">
              <div>
                <span className="subscribe-text">Subscribe to our Website</span>
              </div>
              <div className="email ">
                <form
                  ref={form}
                  className="email-container"
                  onSubmit={sendEmail}
                >
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    placeholder="Email Address"
                    className="email-box"
                  ></input>
                  <button className="email-btn">
                    <i class="bi bi-chevron-right"></i>
                  </button>
                </form>
              </div>
              <div className="Bottom-text">
                <span>Terms & conditions</span>
                <span className="pp-text">Privacy Policy</span>
              </div>
            </div>
            <div className="col-12 col-lg-2">
              <div>
                <li className="bottom-info">
                  <ul>Services</ul>
                  <ul>Albums</ul>
                  <ul>Artists</ul>
                  <ul>Music bands</ul>
                  <ul>Branding</ul>
                </li>
                <br />
              </div>
            </div>
            <div className="col-12 col-lg-2">
              <div>
                <li className="bottom-info">
                  <ul>Services</ul>
                  <ul>Albums</ul>
                  <ul>Artists</ul>
                  <ul>Music bands</ul>
                  <ul>Branding</ul>
                </li>
              </div>
            </div>
            <div className="col-12 col-lg-2">
              <div>
                <li className="bottom-info">
                  <ul>Services</ul>
                  <ul>Albums</ul>
                  <ul>Artists</ul>
                </li>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
