import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import Group_362 from "../../Assests/Group_362.png";
import Rectangle_140 from "../../Assests/Rectangle_140.png";
import Group_346 from "../../Assests/Group_346.png";
import Group_372 from "../../Assests/Group_372.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-hand">
        <Header />
        <div className="hero-text">
          <div>
            <span className="pink-text">Discover</span>
            <span>, Collect</span>
          </div>
          <div>
            <span>& Save Playlist</span>
          </div>
        </div>
        <div>
          <span className="hero-sub-text1">
            Explains the topic of your show and what a listener can expect to
          </span>
        </div>
        <div className="hero-sub-text2">
          <span>hear when they press play on one of your episodes.</span>
        </div>
        <div>
          <button className="btn">Explore</button>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>30K&nbsp;+</span>
            <span>Artists</span>
          </div>
          <div>
            <span>120k&nbsp;+</span>
            <span>Albums</span>
          </div>
          <div>
            <span>12k&nbsp;+</span>
            <span>Singers</span>
          </div>
        </div>
        <div>
          <img src={Group_362} alt="" className="arrowimg" />
        </div>
        <div className="Featured-text">
          <span>Featured</span>
        </div>
        <div className="Album-text">
          <span>Album</span>
        </div>
        <div className="Creation-text">
          <span>Collection</span>
        </div>
        <div>
          <img src={Rectangle_140} alt="" className="jazz-day" />
        </div>
        <div className="jazz-daybox">
          <span className="jazz-header">Make a music like jazz day</span>
          <span className="jazz-circle">
            <img src={Group_346} alt="a person photo" className="jazz-dp" />
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

          <button className="playlist-button">Add&nbsp;Playlist</button>
        </div>
        <div className="TopArtist-text">
          <span>Top Artist of The Week</span>
        </div>

        <div className="Artists-Albums">
          <div>
            <span>
              <img src={Group_346} alt="dp of a person" className="dp" />
            </span>

            <span className="Thomas-username">Thomas</span>
            <br />
            <span className="Thomas-twitter">@Thomas</span>
          </div>
          <div className="Join-button">
            <button>Follow</button>
          </div>
        </div>
      </div>
      <div className="right-hand"></div>
    </div>
  );
};

export default Hero;
