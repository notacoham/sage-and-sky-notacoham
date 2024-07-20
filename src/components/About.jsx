import React from 'react';
import aboutImg from '../images/sageandsky-about.jpg';
import Title from './Title.jsx';

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>Get The Support you need</h3>
          <p>
            At Sage and Sky Intuitive Coaching, we understand the struggle of
            feeling stuck and unsure of how to move forward. Our certified
            Self-Development Coach provides personalized wellness education,
            tools, and resources to help you feel empowered and capable of
            managing life's pressures. Contact us to start your journey today!
          </p>

          <a href="#about" className="btn">
            learn more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
