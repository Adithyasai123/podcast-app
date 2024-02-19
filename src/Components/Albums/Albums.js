import React from "react";
import Group_362 from "../../Assests/Group_362.png";
import Rectangle_140 from "../../Assests/Rectangle_140.png";
import Group_346 from "../../Assests/Group_346.png";
import Group_372 from "../../Assests/Group_372.png";
import Rectangle_137 from "../../Assests/Rectangle_137.png";
const Albums = () => {
  return (
    <div id="Albums">
      <section style={{ backgroundColor: "#0E101C" }}>
        <div className="container-Albums">
          <div className="row">
            {/*Left side column*/}
            <div className="col-12 col-md-8 ">
              <div className="row">
                <div className="col-md-6">
                  <img src={Rectangle_140} alt="" className="jazz-day" />
                  <div className="jazz-daybox">
                    <span className="jazz-header">
                      Make a music live like jazz day
                    </span>{" "}
                    <br />
                    <span className="jazz-circle">
                      <img
                        src={Group_346}
                        alt="a person photo"
                        className="jazz-dp"
                      />
                    </span>
                    <span className="jazz-text">Satish&nbsp;kumar</span>
                    <div className="start-time">
                      <span>
                        <span>Start</span>
                        <br />
                        <span>0.01</span>
                        <br />
                      </span>
                      <span>
                        <img src={Group_372} alt="" className="play-time" />
                        <br />
                      </span>
                      <span className="end-time">
                        <span>End</span>
                        <br />
                        <span>5:15</span>
                      </span>
                    </div>
                    <span>
                      <button className="playlist-button">
                        Add&nbsp;Playlist
                      </button>
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-center">
                    <img src={Group_362} alt="" className="arrowimg" />
                  </div>
                  <div className="text-right pr-4">
                    <div className="Featured-text">
                      <span>Featured</span>
                    </div>
                    <div className="Album-text">
                      <span>Album</span>
                    </div>
                    <div className="Creation-text">
                      <span>Collection</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4  ellipse-back ">
              {/*Heroin images*/}
             <div className="row">
             <div className="col-md-12">
                <div>
 
                  {/* <img src={ Ellipse_36} alt="" className="ellipse-img" /> */}
 
                  <div>  
                    <img src={Rectangle_137} alt="" className="jazz-day2 " />
                  </div>
                  <div className="jazz-daybox2">
                    <span className="jazz-header">Best music Live Concert</span>
                    <br />
                    <span className="jazz-circle">
                      <img
                        src={Group_346}
                        alt="a person photo"
                        className="jazz-dp2"
                      />
                    </span>
                    <span className="jazz-text">James Thomas</span>
                    <div className="start-time2">
                      <span>
                        <span>Start</span>
                        <br />
                        <span>0.01</span>
                        <br />
                      </span>
                      <span>
                        <img src={Group_372} alt="" className="play-time2" />
                        <br />
                      </span>
                      <span className="end-time2">
                        <span>End</span>
                        <br />
                        <span>5:15</span>
                      </span>
                    </div>
                    <span>
                      <button className="playlist-button2">
                        Add&nbsp;Playlist
                      </button>
                    </span>
                  </div>
                </div>
              </div>

             </div>
              {/*Heroin images*/}
              <div>
                <span className="heroin-text">
                  Explains the topic of your show and what a listener can expect
                  to hear when they press play on one of your episodes.
                </span>
              </div>
              <div>
                <button className="explore-button">
                  {" "}
                  Explore <i className="bi bi-arrow-right "></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Albums;
