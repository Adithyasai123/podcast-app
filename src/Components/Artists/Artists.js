import React from "react";
import Group_346 from "../../Assests/Group_346.png";
import guitarists_stage_background from "../../Assests/guitarists_stage_background.png";
import Group_356 from "../../Assests/Group_356.png";
import medium_shot_band_performing_concert from "../../Assests/medium_shot_band_performing_concert.png";
import Group_346_1 from "../../Assests/Group_346_1.png";
import medium_shot_musicians_concert from "../../Assests/medium_shot_musicians_concert.png";
import Group_346_2 from "../../Assests/Group_346_2.png";
import close_up_band_concert from "../../Assests/close_up_band_concert.png";

const Artists = () => {
  
  return (
    <div id="Artists" >
      <section style={{ backgroundColor: "#0E101C" }}>
        <div className="container ">
          <div className="row">
          <div className="Top-artists">
                <span>Top  Artists  of  the week</span>
              </div>
            {/*Left side column*/}
            <div className="col-12 col-md-6 ">

              <div className="main-container ">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
               <div className="second-con">
               <div>
                    <img src={Group_346} alt="dp of a person" className="dp" />
                  </div>
                  <div className="Thomas-main">
                    <span className="Thomas-username">Thomas</span>
                    <br />
                    <span className="Thomas-twitter">@Thomas</span>
                  </div>
               </div>
                  <div><span>
                      <button className="join-button">Follow</button>
                    </span></div>

                </div>

                <div>
                  <img
                    src={guitarists_stage_background}
                    alt="guitarbackimg"
                    className="box-img1"
                  />
                </div>
              </div>
            </div>

            {/* Bottom row - First set of columns */}
            <div className="col-12 col-md-6 ">
            <div className="main-container ">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
               <div className="second-con">
               <div>
                    <img src={Group_356} alt="dp of a person" className="dp" />
                  </div>
                  <div className="Thomas-main">
                    <span className="Thomas-username">James</span>
                    <br />
                    <span className="Thomas-twitter">@James</span>
                  </div>
               </div>
                  <div><span>
                      <button className="join-button">Follow</button>
                    </span></div>

                </div>

                <div>
                  <img
                    src={medium_shot_band_performing_concert}
                    alt="guitarbackimg"
                    className="box-img1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom row - Second set of columns */}
      <section style={{ backgroundColor: "#0E101C" }}>
        <div className="container ">
          <div className="row">
            <div className="col-12 col-md-6 ">
            <div className="main-container ">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
               <div className="second-con">
               <div>
                    <img src={Group_346_1} alt="dp of a person" className="dp" />
                  </div>
                  <div className="Thomas-main">
                    <span className="Thomas-username">David</span>
                    <br />
                    <span className="Thomas-twitter">@David</span>
                  </div>
               </div>
                  <div><span>
                      <button className="join-button">Follow</button>
                    </span></div>

                </div>

                <div>
                  <img
                    src={medium_shot_musicians_concert}
                    alt="guitarbackimg"
                    className="box-img1"
                  />
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 ">
            <div className="main-container ">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
               <div className="second-con">
               <div>
                    <img src={Group_346_2} alt="dp of a person" className="dp" />
                  </div>
                  <div className="Thomas-main">
                    <span className="Thomas-username">Mickey</span>
                    <br />
                    <span className="Thomas-twitter">@Mickey</span>
                  </div>
               </div>
                  <div><span>
                      <button className="join-button">Follow</button>
                    </span></div>

                </div>

                <div>
                  <img
                    src={close_up_band_concert}
                    alt="guitarbackimg"
                    className="box-img1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Artists;
