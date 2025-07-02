import React from 'react'
import '../styles/about.css';
import { BookAIcon, BookDown, BookDownIcon, Clock1Icon, GitCommitVertical, Microscope } from 'lucide-react';

const About = () => {
  const projects = [
          {
              name: "E-Commerce Website",
              description: "A full-stack MERN e-commerce app with product listing, cart.",
              // image: eCommerce,
              link: "https://e-commerce-ten-livid-88.vercel.app/"
          },
          {
              name: "Portfolio Website",
              description: "Personal portfolio built with React showcasing skills, projects, and contact details.",
              // image: portfolio,
              link: "https://portfolio-website-iota-two-13.vercel.app/"
          },
          {
              name:"Auth-App",
              description:"Note: this app is still in progress.......",
              // image:authPage,
              link:"not ready yet"
          }
      ];
      
  return (
    <>
      <div className="education">
        <div className="eduHead">
          <BookAIcon height={36} width={36}  color='white' />    Education
        </div>
        <div className="eduContent">


          {/* college section */}
          <div className="college">
            <GitCommitVertical width={62} height={62} fill='yellowgreen' color='yellowgreen' />
            <div className="clgDeatils">
              <div className="clgName"> Vivekananda Insititute of Technology</div>
              <div className="degName">
                Bachlore of Technology, Computer Science
              </div>
              <div className="time">
                <Clock1Icon fill='royalblue' color='white' height={18} width={18} />2019-2024
              </div>
            </div>
          </div>
          {/* school section */}
          <div className="college">
            <GitCommitVertical width={62} height={62} fill='yellowgreen' color='yellowgreen' />
            <div className="clgDeatils">
              <div className="clgName"> GR Global Academey</div>
              <div className="degName">
                Senior Seconday Education, Science & Math
              </div>
              <div className="time">
                <Clock1Icon fill='royalblue' color='white' height={18} width={18} />2018-2019
              </div>
            </div>
          </div>
          {/* another school section */}
          <div className="college">
            <GitCommitVertical width={62} height={62} fill='yellowgreen' color='yellowgreen' />
            <div className="clgDeatils">
              <div className="clgName">Shanti Asiatic School</div>
              <div className="degName">
                Secondary Education , 10th
              </div>
              <div className="time">
                <Clock1Icon fill='royalblue' color='white' height={18} width={18} />2016-2017
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* intership section */}

      <div className="education">
        <div className="eduHead">
          <BookDownIcon height={36} width={36} color='white' />    Internship
        </div>
        <div className="eduContent">


          {/* intership section */}
          <div className="college">
            <GitCommitVertical width={62} height={62} fill='yellowgreen' color='yellowgreen' />
            <div className="clgDeatils">
              <div className="clgName"> DevHub Tech & Traning Center</div>
              <div className="degName">
                Full Stack Developer , MERN
              </div>
              <div className="time">
                <Clock1Icon fill='royalblue' color='white' height={18} width={18} />Dec, 2024 - present
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* project section */}

      {/* project section Starts */}

                <div className="projectHead"><Microscope height={36} width={36} color='white'/> Projects</div>
            <div className="projectsWrapper" id='projects'>
                {projects.map((project, index) => (
                    <div className="projectCard" key={index}>
                        <div className="projectImage">
                            {/* <img src={project.image} alt={project.name} /> */}
                        </div>
                        <div className="projectInfo">
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                            <div className="links"><a href={project.link} target='_blank'>Go to Website</a></div>
                        </div>
                    </div>
                ))}
            </div>
    </>
  )
}

export default About