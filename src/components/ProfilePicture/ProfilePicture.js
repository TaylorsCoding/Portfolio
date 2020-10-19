import React from "react";

import profilePic from "./profpic.jpeg";

import "./ProfilePicture.css";

export default function ProfilePicture() {
  return (
    <section className="profile-picture-container">
      <img id="dogDad" src={profilePic} alt="me" />
    </section>
  );
}
