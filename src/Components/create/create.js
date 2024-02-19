import React from "react";
import Path_4296 from "../../Assests/Path_4296.png";
import album from "../../Assests/album.png";
import photo from "../../Assests/photo.png";
import { Link as RouterLink } from "react-router-dom";

const create = () => {
  return (
    <div id="/register">
      <section style={{ backgroundColor: "#0E101C" }}>
        <div className="container-create">
          <div className="row">
            <div>
            {/* <RouterLink to="/register">
                    <button
                      className="Get-started-button"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Get Started
                    </button>
                  </RouterLink> */}
              <RouterLink to="/register" onClick={() => window.scrollTo(0, 0)}>
              <span className="create-text">Create and Sell Your Podcast</span>
              </RouterLink>
            </div>
            <div className="col-12 col-lg-8 pink-back-img">
              <div className="create-main">
                <span className="create-para">
                  Explains the topic of your show and what a listener can
                </span>
                <br />
                <span className="create-para">
                  expect to hear when they press play on one of your
                </span>
                <br />
                <span className="create-para">episodes.</span>
                {/* <div>
                  <span>
                    <img
                      src={Path_4295}
                      alt="pink-background"
                      className="pink-background-img"
                    />
                  </span>
                </div> */}
              </div>
              <div className="row ">
                <div className="col-lg-6">
                  <div>
                    <span>
                      <img
                        src={Path_4296}
                        alt="a string "
                        className="string-img"
                      />
                    </span>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div>
                    <span>
                      <img
                        src={album}
                        alt="albumimg"
                        className="collectionimage"
                      />
                    </span>

                    <div className="collection-text-header">
                      <span>Create&nbsp;Collection</span>
                    </div>
                    <div className="collection-text">
                      <span>
                        Explains the topic of your show and what a listener
                      </span>
                      <span>
                        can expect to hear when they press play on one
                      </span>
                      <span> of your episodes.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*    Right-side-container   */}
            <div className="col-12 col-lg-4">
              <div>
                <span>
                  <img src={photo} alt="albumimg" className="Album-img" />
                </span>
                <div className="Album-main">
                  <div>
                    <span className="Album-header">Albums</span>
                  </div>

                  <div className="Album-para">
                    <span>
                      Explains the topic of your show and what a listener{" "}
                    </span>
                    <span>can expect to hear when they press play on one</span>
                    <span> of your episodes.</span>
                  </div>
                </div>
              </div>
              <div >
                <span>
                  <img src={photo} alt="albumimg" className="Artists-img" />
                </span>
                <div className="Artists-main">
                  <div>
                    <span className="Artists-header">Artists</span>
                  </div>

                  <div className="Artists-para">
                    <span>
                      Explains the topic of your show and what a listener{" "}
                    </span>
                    <span>can expect to hear when they press play on one</span>
                    <span> of your episodes.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default create;
