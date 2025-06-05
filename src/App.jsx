import React from "react";
import './App.css';

import { FaFacebook, FaInstagram, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import  { useState } from 'react';

import myPhoto from './assets/IMG_20220405_040606_3~2.jpg';
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';
function App(){
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const technicalSkills = [
    { name: 'HTML', icon: <FaHtml5 />, level: 95 },
    { name: 'CSS', icon: <FaCss3Alt />, level: 90 },
    { name: 'React', icon: <FaReact />, level: 85 },
    { name: 'Python', icon: <FaPython />, level: 75 },
    { name: 'Other', icon: <FaTools />, level: 70 },
  ];

  const professionalSkills = [
    { name: 'Creativity', level: 90 },
    { name: 'Communication', level: 80 },
    { name: 'Teamwork', level: 85 },
    { name: 'Problem Solving', level: 88 },
  ];
    return(
      
        <div className="portfolio">
          
          <div className="App">
      <nav className="navbar">
        
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>

     
    <section className="home-section">
      <div className="home-container">
        <div className="home-text">
        <div className="home-image">
          <img src={myPhoto} alt="" />
        </div>
      
          <h4>Hi There</h4>
          <h4>
            I Am <span className>Genet Gobie</span>
          </h4>
          <h4>I Am Front-End Developer</h4>
          
          <p>
            I am passionate about creating engaging and<br /> user-friendly interfaces. With a strong foundation<br /> in HTML, CSS, and JavaScript, I bring ideas to life<br /> on the web.
          </p>
          <button className="about-btn">About Me</button>
        </div>
        
      </div>
    </section>

      

   <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p>
          I'm a front-end developer passionate about crafting responsive, user-friendly web interfaces. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building dynamic applications using frameworks like React and Vue.js. My focus is on delivering seamless user experiences through clean, maintainable code and modern design principles.
        </p>
    
        
        
      </div>
    </section>

  
    
    <div className="skills-section">
      <h1 className="skills-title">
        My <span>Skills</span>
      </h1>

      <div className="skills-container">
        {/* Technical Skills Section */}
        <motion.div
          className="technical-skills"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Technical Skills</h2>
          {technicalSkills.map((skill, index) => (
            <div key={index} className="bar-group">
              <label>
                {skill.icon} {skill.name}
              </label>
              <div className="bar">
                <div
                  className="fill"
                  style={{ width: `${skill.level}%`, '--fill-width': `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Professional Skills Section */}
        <motion.div
          className="professional-skills"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Professional Skills</h2>
          {professionalSkills.map((skill, index) => (
            <div key={index} className="circle-skill">
              <div
                className="circle"
                style={{ '--percentage': skill.level }}
              >
                <span>{skill.level}%</span>
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
    
        

                
                
              
      
<section id="services" className="services-section">
<h2>SERVICES</h2>
<div className="service-grid">
  <div className="service-card">
  
    <h3>Web Design</h3>
    <p>creating visually stunning, user-friendly websites.</p>
    
  </div>
  <div className="service-card">
    <h3>Responsive Design</h3>
    <p>designing and developing website that adapt flawlessly to phone, tablet and desktop.</p>
  </div>
  <div className="service-card">
    <h3>Graphic Design</h3>
    <p>Creating a standout graphic design portfolio require a mix of creativity and clarity.</p>
  </div>
  
</div>
</section>
<section id="contact" className="contact-sectoin">

  <div className="contact-content">
  
    <div className="contact-info">
    <h2>CONTACT ME</h2>
      <p>Debre Markos, Ethiopia</p>
      <p>Email: genetgobie@gmail.com</p>
      <p>Phone:  +251941312034</p>
    </div>
    </div>
    <form className="contact-form">
      <input type="text" placeholder="Name"/>
      <input type="email" placeholder="Email"/>
      <input type="tel" placeholder="Number"/>
      <textarea placeholder="Message"></textarea>
      <button className="btn">Send Message</button>
    </form>
  

<footer className="footer">
      <p>© 2025 Genet Gobie. All rights reserved.</p>
      
    </footer>
    </section>
    
    <div className="App">
      
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} color="#4267B2" />
        </a>
      
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} color="#C13584" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} color="#0077B5" />
        </a>
        <a href="https://t.me/YourTelegramUsername" target="_blank" rel="noopener noreferrer">
  <FaTelegramPlane size={30} color="#0088cc" />
</a>
      </div>
    </div>
        </div>
        </div>
    );
}
export default App;