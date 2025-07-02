import React from 'react';
import boy from '../assets/boy.png';
import { ContactIcon, Phone, SmilePlus, UserIcon } from 'lucide-react';
import "../styles/header.css";
import { useNavigate } from 'react-router-dom';
import resume from '../assets/resume.pdf';

const Header = () => {
    //hooks used

    const navigate = useNavigate();
    return (
        <nav className='navBar'>
            <div className="container">
                <div className="img-container"  onClick={()=>{navigate("/"); scrollTo(0,0)}} >
                    <img src={boy} alt='' />
                </div>
                <div className="userIcon" onClick={()=>{navigate("/about"); scrollTo(0,0)}}>
                    <UserIcon height={25} width={25} />
                </div>
                <div className="Contact" onClick={()=>{navigate("/contact"); scrollTo(0,0)}}>
                    <Phone height={25} width={25} />
                </div>
                <div className="resume">
                    <a href={resume} download className="resume-btn">Hire Me!</a>
                </div>
            </div>
        </nav>
    )
}

export default Header;