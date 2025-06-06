import React from "react";
import './App.css';

import { FaFacebook, FaInstagram, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import  { useState } from 'react';

import { FaCode,FaPaintBrush, FaLaptopCode, FaTabletAlt, FaPalette } from "react-icons/fa";

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

  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Building responsive websites using modern frameworks like React.",
    },
    
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description: "Designing clean, user-friendly interfaces for the best user experience.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Web Design",
      description: "Creating modern and visually appealing web layouts using HTML/CSS & Figma.",
    },
    {
      icon: <FaTabletAlt />,
      title: "Responsive Design",
      description: "Ensuring websites work seamlessly on all devices, including mobile and tablets.",
    },
    {
      icon: <FaPalette />,
      title: "Graphic Design",
      description: "Designing logos, banners, and visuals that align with your brand identity.",
    },
  ];
  const experiences = [
    {
      role: "Front-End Developer",
      
      period: "2024 - Present",
      description: "Built websites and web apps for clients using React, HTML, CSS, and JavaScript.",
    },
    {
      role: "Front-End Developer (Intern)",
      period: "2021 - 2022",
      description: "Assisted in building and styling front-end components using HTML, CSS, and JavaScript. Gained experience in responsive design, version control (Git), and collaborating with design teams to implement user-friendly UIs.",
    }
    
  ];
    return(
      
        <div className="portfolio">
          
          <div className="App">
      <nav className="navbar">
        
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
        
          <a href="#contact">Contact</a>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>

        </div>
      </nav>

     
    <section id="home" className="home-section">
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
  I am passionate about creating engaging and user-friendly interfaces. <br />
   With a strong foundation in HTML, CSS, and JavaScript, <br />I bring ideas to life on the web.
</p>

        </div>
        
      </div>
    </section>

      

   <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="text">
          I'm a front-end developer passionate about crafting responsive,
           user-friendly web interfaces. With a strong foundation in HTML, CSS, 
           and JavaScript, I specialize in building dynamic applications using frameworks 
           like React and Vue.js. My focus is on delivering seamless user experiences through clean, 
           maintainable code and modern design principles.
        </p>
    
        
        
      </div>
    </section>

  
    <section id="skills" className="skills-section">
    <div className="skills-section">
      <h2 className="skills-title">
        My Skills
      </h2>

      <div className="skills-container">
        
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
    </section>
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3>{exp.role} - <span>{exp.company}</span></h3>
            <p className="experience-period">{exp.period}</p>
            <p className="experience-desc">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
        
    <section id="services" className="services-section">
      <h2 className="section-title">My Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
          </div>
        ))}
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