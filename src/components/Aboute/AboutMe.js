import React from 'react';
import './AboutMe.css';
// import profilePic from '../../photos/portfolio 2.jpg'; // Ensure the path is correct

const AboutMe = () => {
    return (
        <section id="aboutme" className="aboutme">
            <div className="container">
                {/* <img src={profilePic} alt="Abduvaliev Muydinkhon" className="profile-img" /> */}
                <div className='profile-img'></div>
                <div className="about-content">
                    <h2>About Me</h2>
                    <h4>
                        Hello! I'm Abduvaliev Muydinkhon, a dedicated front-end developer with a keen interest in creating engaging and responsive web experiences. My journey in tech has been shaped by a strong desire to solve problems and continuously evolve with new technologies.
                        <br /><br />
                        I am fluent in multiple languages and always eager to learn from diverse perspectives. Participating in conferences and meetups is a significant part of my professional growth. Engaging in forums, Telegram discussions, and Stack Overflow has enriched my knowledge and expanded my network.
                        <br /><br />
                        In my spare time, I delve into browser principles, page rendering, and the DOM model, striving to understand how the web works at its core. I also value learning from people across the globe, as it broadens my understanding and inspires me to innovate.
                        <br /><br />
                        Feel free to connect with me, whether it's to discuss front-end development, share insights, or explore new opportunities together.
                    </h4>
                    <div className="info-cards">
                        <div className="info-card">
                            <div className="info-icon">🎂</div>
                            <div className="info-text">
                                <h4>Age</h4>
                                <p>20</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="info-icon">💼</div>
                            <div className="info-text">
                                <h4>Work</h4>
                                <p>Front-End Developer</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="info-icon">🌍</div>
                            <div className="info-text">
                                <h4>Nation</h4>
                                <p>Uzbekistan</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="info-icon">🗣️</div>
                            <div className="info-text">
                                <h4>Languages</h4>
                                <p>Uzbek, English</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
