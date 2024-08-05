import React from 'react';
import './Home.css';
// import photo from '../../photos/portfolio1.jpg';
import { FaGithub, FaInstagram, FaTelegramPlane, FaEnvelope } from 'react-icons/fa'; // Import icons

function Home() {
  return (
    <section id="home" className="home">
      <div className="container">
        {/* <img src={photo} alt="Muydinkhon" className="profile-img" /> */}
        <div className='profile-imgg'></div>
        <div className="home-content">
          <h3>Hello, welcome</h3>
          <br />
          <br />
          <h1>I’m Abduvaliev Muydinkhon</h1>
          <br />
          <h4>
            I am a passionate front-end developer with experience in creating responsive and interactive websites. I enjoy solving problems and continuously learning new technologies.
          </h4>
          <br />
          <div className="button-container">
            <a href="#projects" className="home-btn">View Projects</a>
            <a href="#contact" className="home-btn">Contact Me</a>
          </div>
          <div className="social-icons">
            <a href="https://github.com/mikecoderweb" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/muydinkhon1/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://t.me/Muyd1nkhon" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTelegramPlane />
            </a>
            <a href="muydinkhon.abduvaliev04@gmail.com" className="social-icon">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

{/* <h1>this is portfolio</h1> */}
