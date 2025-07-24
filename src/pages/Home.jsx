import React from 'react';
import '../App.css';
import { GitBranch, Linkedin, Mail, Mails, MonitorCheck, MoveRightIcon, Phone, MapIcon, PhoneIcon,BookAIcon, BookDown, BookDownIcon, Clock1Icon, GitCommitVertical, Microscope} from 'lucide-react';
import css from '../assets/css-3.png';
import mongo from '../assets/database.png';
import html from '../assets/html.png';
import react from '../assets/physics.png';
import js from '../assets/js.png';
import node from '../assets/node-js.png';
import redux from '../assets/redux.png';
import express from '../assets/express.png';
import api from '../assets/api.png';
import github from '../assets/github.png';
import code from '../assets/code.png';
import git from '../assets/git.png';
import profile from '../assets/profile.jpg';
import eCommerce from '../assets/e-commerce.png';
import portfolio from '../assets/portfolio.png';
import authPage from  '../assets/authPage.png';
import movieTicket from '../assets/movieTicket.png';

const Home = () => {
    const skills = [
            {
                name: "HTML",
                description: "Markup language used to structure content on the web.",
                images: html
            },
            {
                name: "CSS",
                description: "Style sheet language used to style and layout HTML elements.",
                images: css
            },
            {
                name: "JavaScript",
                description: "Programming language used to add interactivity and logic to websites.",
                images: js
            },
            {
                name: "React",
                description: "A JavaScript library for building user interfaces using a component-based architecture.",
                images: react
            },
            {
                name: "Redux",
                description: "A state management tool commonly used with React for predictable state updates.",
                images: redux
            },
            {
                name: "Node.js",
                description: "A JavaScript runtime that allows server-side development using JavaScript.",
                images: node
            },
            {
                name: "Express.js",
                description: "A minimal and flexible Node.js web application framework.",
                images: express
            },
            {
                name: "MongoDB",
                description: "A NoSQL database that stores data as flexible, JSON-like documents.",
                images: mongo
            },
            {
                name: "Mongoose",
                description: "An ODM library that provides schema-based modeling for MongoDB in Node.js.",
                images: mongo
            },
            {
                name: "REST API",
                description: "A set of rules that allows communication between client and server using HTTP requests.",
                images: api
            },
            {
                name: "Git",
                description: "A version control system to track code changes and collaborate with others.",
                images: git
            },
            {
                name: "GitHub",
                description: "A platform for hosting and collaborating on Git repositories.",
                images: github
            },
            {
                name: "VS Code",
                description: "A lightweight and powerful source code editor for web development.",
                images: code
            },
        ];
        const projects = [
                  {
                      name: "E-Commerce Website",
                      description: "A full-stack MERN e-commerce app with product listing, cart.",
                      image: eCommerce,
                      link: "https://e-commerce-ten-livid-88.vercel.app/"
                  },
                  {
                      name: "Movie Ticket Booking",
                      description: "This is a movie ticket booking website for helping users book their favorite show online.",
                      image: movieTicket,
                      link: "https://https://ticket-booking-teal.vercel.app/-website-iota-two-13.vercel.app/"
                  },
                  {
                      name:"Auth-App",
                      description:"Note: this app is in the  making sometime soon this will end",
                      image:authPage,
                      link:"https://auth-page-three.vercel.app/"
                  }
              ];
    return (
        <>
            <div className='home-container'>
                <div className="background">MERNSTACK</div>
                <div className="left">
                    <div className="helloText">
                        Hey there!
                    </div>
                    <div className="introText">
                        I'm Dhananjay Kumar
                    </div>
                    <div className="titleText">
                        Mern Stack Developer
                    </div>
                    <div className="contactText">
                        <button className='btns'><Phone fill='white' color='black' /></button>
                        <button className='btns'><Mails fill='white' color='black' /></button>
                        <button className='btns'><Linkedin fill='white' color='black' /></button>
                        <button className='btns'><GitBranch fill='white' color='black' /></button>
                    </div>
                </div>
                <div className="right">
                    <div className="icon">
                        {/* <img src= {profile} alt=''/> */}
                    </div>
                </div>
            </div>


            {/* About section Starts */}
            <div className="about">
                <div className="aboutHead">
                    About Me
                    <MoveRightIcon color='royalblue' height={45} width={45} />
                </div>
                <div className="aboutSubHead">
                    I am a motivated and detail-oriented <span className='higlight'>Full-Stack Web Developer</span> with strong foundational skills in front-end and back-end <span className='fade1'>technologies. Passionate about building responsive web applications and continuously learning new tools and frameworks. Eager to</span><span className='fade2'> contribute toreal-world projects and grow as a developer in a collaborative team environment.</span>
                </div>
            </div>




            {/* skills sections Starts */}

                <div className='wrapperSkills'>

                <div className="skillHead">Skills & Tools <MoveRightIcon color='royalblue' height={45} width={45} /></div>
                <div className="cards-container">
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <img src={skill.images} alt={skill.name} className="skill-image" />
                            <h3>{skill.name}</h3>
                            <p>{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>



{/* about section */}
<div className="projectHead"><Microscope height={36} width={36} color='white'/> Projects</div>
            <div className="projectsWrapper" id='projects'>
                {projects.map((project, index) => (
                    <div className="projectCard" key={index}>
                        <div className="projectImage">
                            <img src={project.image} alt={project.name} />
                        </div>
                        <div className="projectInfo">
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                            <div className="links"><a href={project.link} target='_blank'>Go to Website</a></div>
                        </div>
                    </div>
                ))}
            </div>







            {/* contact section */}
            <div className='contactContainer'>
      <div className="contactHead">
         <Phone height={56} width={56} fill='royalblue'/> Contact
      </div>
      <div className="contactSubHead">
        Feel free to contact me — I’m always open to new opportunities, collaborations, or just a friendly chat. Whether you have a project in mind, need assistance, or simply want to connect, don’t hesitate to reach out. I’ll be happy to respond as soon as possible!
        {/* <div className="hline">
          ___________________________________________________________________________________________________________________
        </div> */}
      </div>
      <div className="iconContainer">
        <div className="mail">
          <div><Mail height={70} width={70} color='royalblue'/></div>
          <div className="ContactText">
            <div>Gmail</div>
            bhargavdhananjaix501@gmail.com
            
          </div>
        </div>
        <div className="mail">
          <div><PhoneIcon height={70} width={70} color='royalblue'/></div>
          <div className="ContactText">
            <div>Whatsapp</div>
            +91 9145807743
            
          </div>
        </div>
        <div className="mail">
          <div><MapIcon height={70} width={70} color='royalblue'/></div>
          <div className="ContactText">
            <div>Address</div>
            Murlipura Scheme, Jaipur
            
          </div>
        </div>
      </div>
    </div>

        </>
    )
}

export default Home