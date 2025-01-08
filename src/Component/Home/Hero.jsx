import React from "react";
import "./Hero.css";
import imgfan from "../../assets/faf.png";
import imgfan2 from "../../assets/faf2.png";
import imgfan3 from "../../assets/faf3.png";
import ReactPlayer from "react-player";

function Hero() {
  return (
    <>
      <div className="hero-div">
        <h1>
          FANS FIT FOR THE FUTURE,
          <br /> ARE ALREADY HERE.
        </h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa sapiente iste repudiandae labore? Necessitatibus at, quia sunt quasi esse fugit officiis facilis illo quo deleniti commodi modi minima, praesentium illum nesciunt mollitia aspernatur odio explicabo quod tempore laborum vel perferendis. Facere qui corrupti dolore quia est saepe libero. Atque, labore.</p>
      </div>

      <div className="tranding-category">
        <h1>Tranding Categories</h1>
        <div className="ul">
          <div className="li">
            <div className="divimg">
              <img src={imgfan} alt="1" />
            </div>
            <h4>Ceiling Fan</h4>
          </div>
          <div className="li">
            <div className="divimg">
              <img src={imgfan2} alt="" />
            </div>
            <h4>Table Fan</h4>
          </div>
          <div className="li">
            <div className="divimg">
              <img src={imgfan} alt="" />
            </div>
            <h4>Wall Fan</h4>
          </div>
          <div className="li">
            <div className="divimg">
              <img src={imgfan} alt="" />
            </div>
            <h4>Stand Fan</h4>
          </div>
          <div className="li">
            <div className="divimg">
              <img src={imgfan3} alt="" />
            </div>
            <h4>Exhaust Fan</h4>
          </div>
        </div>
      </div>

      <div className="innovation">
        <h1 className="demo" >Explore our latest innovations</h1>

        <div className="ul">

        <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url="https://youtube.com/shorts/9Q8zegPYFuc?si=57BAiWozE-_jW1t7"
              width="100%"
             height="535px"
            />
          </div>
             <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url="https://youtube.com/shorts/9Q8zegPYFuc?si=57BAiWozE-_jW1t7"
              width="100%"
            height="535px"
            />
          </div>
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url="https://youtube.com/shorts/9Q8zegPYFuc?si=57BAiWozE-_jW1t7"
              width="100%"
             height="535px"

              loop={true}
              playing={true}
              controls={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
