import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/WarrenS.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Warren Spencer</div>
            <div className="brief_description">
              Hello!
              My name is Warren Spencer and I am a Computer Science student at the University of Alabama at Birmingham. 
              I am also a participant in IBM Accelerate in the Software Developer Track. My interests include Video Games and Drawing. 
              One fun fact about me is that I have been working on computers since I was 12-13 years old. I have always had a passion for 
              technology growing up. I aspire for a career as a Software Engineer after I graduate from college.  
            </div>
          </div>
        </div>
      </div>
    );
  }
}
