import React from 'react';
import '../styles/Persion.scss';
import avatar from '../assets/avatar.jpg';

//user的头像、hello和个人名字介绍 以及横线

function Persion() {
  return (
    <div className="Persion">
      <img className="User" src={avatar} alt="user" />
      <h1>HELLO,</h1>
      <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h2>
      <hr></hr>
    </div>
  );
}

export default Persion;
