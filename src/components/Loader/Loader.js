// components/Loader/index.js
import React from 'react';
import './Loader.css';
import styled from 'styled-components';
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

const Loader = () => {
    const handleIconClick = (url) => {
      window.open(url, '_blank');
    };

  return (
    <div className="loader-container" id="loader-container">
  <div className="loading-wrapper">
    <div className="image-wrap loader-img-animation" id="loader-animation">
      <img
        src="https://i.ibb.co/WvwNV3j/1718349638750.jpg"
        alt="Ashish Kumar"
      />
    </div>
    <div className="loader-name loader-name-animation " id="loader-name">
      <strong>Ashish Kumar</strong>
    </div>
    <p className="loader-job loader-job-animation" id="loader-job">
      Mern-Stack Developer
    </p>
    
    <div className="social-icons">
    <FaFacebookSquare
        onClick={() => handleIconClick('https://www.facebook.com/profile.php?id=100084189181437')}
        style={{ cursor: 'pointer', margin: '0 10px' }}
        size={32}
      />
      <FaGithub
        onClick={() => handleIconClick('https://github.com/Ashishkumar124/Ashishkumar124')}
        style={{ cursor: 'pointer', margin: '0 10px' }}
        size={32}
      />
      <FaLinkedin
        onClick={() => handleIconClick('https://www.linkedin.com/in/ashish-kumar-124983267/')}
        style={{ cursor: 'pointer', margin: '0 10px' }}
        size={32}
      />
      <IoMdMail
        onClick={() => handleIconClick('mailto:AshishKumararmy121@gmail.com')}
        style={{ cursor: 'pointer', margin: '0 10px' }}
        size={32}
      />
  </div>
</div>
</div>
  );
};

export default Loader;
