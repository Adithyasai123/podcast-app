import React, { useState } from "react";
import Path_4190 from "../../Assests/Path_4190.png";
import Path_4191 from "../../Assests/Path_4191.png";
import Rectangle_136 from "../../Assests/Rectangle_136.png";
import NumberCounter from "number-counter";
import { Link as ScrollLink } from "react-scroll";
const Topbar = () => {
  return (
    <div>
      <section className="Hero-section" style={{ backgroundColor: "#0E101C" }}>
        <div className="container">
          <div className="row">
            {/*left side column*/}
            <div className="col-12 col-lg-8">
              <div className="Hero-Header">
                <span className="pink-text">Discover,</span>
                <span>Collect</span>
              </div>
              <div>
                <span className="Hero-Header">& Save Playlist</span>
              </div>
              <div className="Hero-para1">
                <span>
                  Explains the topic of your show and what a listener can expect
                </span>
              </div>
              <div className="Hero-para2">
                <span>
                  to hear when they press play on one of your episodes.
                </span>
              </div>

              <div>
                <button type="button" className="exp_btn">
                  Explore <i className="bi bi-arrow-right "></i>
                </button>
              </div>
              {/* figures */}
              <div className="figures">
                <div>
                  <div className="abc">
                    <span>
                      <NumberCounter end={30} start={15} delay={5} />
                    </span>
                    <span>K+</span>
                  </div>
                  <span>Artists</span>
                </div>
                <div>
                  <div className="abc">
                    <span>
                      <NumberCounter end={120} start={90} delay={10} />
                    </span>
                    <span>K+</span>
                  </div>
                  <span>Albums</span>
                </div>
                <div>
                  <div className="abc">
                    <span>
                      <NumberCounter end={12} start={5} delay={5} />
                    </span>
                    <span>K+</span>
                  </div>
                  <span>Singers</span>
                </div>
              </div>
            </div>

            {/*Right side column*/}
            <div className="col-12 col-lg-4">
              {/*Hero images*/}
              <div className="col-lg-6 col-lg-4">
                <div className="d-flex hero-images">
                  <img src={Path_4190} alt="" className="hero-img1" />

                  <img src={Rectangle_136} alt="" className="hero-img2" />
                  <img src={Path_4191} alt="" className="hero-img3 " />
                  {/* <img src={Path_4192} alt="" className="hero-img4 " />*/}
                </div>
                <div className="view-main">
                  <span>
                    <ScrollLink
                      to="Albums"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500} 
                    >
                      <button className="view-button">View Album</button>
                    </ScrollLink>
                  </span>
                  <span>
                    {/* <button className="view-artist-button">View Artist</button> */}
                    <ScrollLink
                      to="Artists"
                      spy={true}
                      smooth={true}
                      offset={-30}
                      duration={500}
                    >
                      <button className="view-artist-button">View Artists</button>
                    </ScrollLink>
                  </span>
                </div>
              </div>
              {/*Hero images*/}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Topbar;
