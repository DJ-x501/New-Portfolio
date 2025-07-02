import React from 'react'
import '../styles/footer.css';
import { Copyright, Heart } from 'lucide-react';
import resume from '../assets/resume.pdf';

const Footer = () => {
    return (
        <>
        <div className='footer-container'>
            <div className="textHead">
                Have a project in mind or looking for a dedicated developer?
            </div>
            <div className="textSubHead">
                Let’s work together to craft seamless and intuitive web solutions. Available for full-time, part-time, or freelance opportunities—let’s make it happen! ✨
            </div>
            <div className="resume1">
                <a href={resume} download className="resume-btn">Hire Me!</a>
            </div>
        </div>
        <div className="copyright">
            <Copyright fill='white' color='black'/><div className="name"> Dhananjay, Made with</div><Heart fill='red'/><div className="name">and dedication.</div>
        </div>
        </>
    )
}

export default Footer