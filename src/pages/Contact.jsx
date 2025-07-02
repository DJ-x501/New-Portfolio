import React from 'react';
import '../styles/contact.css';
import { Mail, MapIcon, Phone, PhoneIcon } from 'lucide-react';

const Contact = () => {
  return (
    <div className='contactContainer'>
      <div className="contactHead">
         <Phone height={56} width={56} fill='royalblue'/> Contact
      </div>
      <div className="contactSubHead">
        Feel free to contact me — I’m always open to new opportunities, collaborations, or just a friendly chat. Whether you have a project in mind, need assistance, or simply want to connect, don’t hesitate to reach out. I’ll be happy to respond as soon as possible!
        <div className="hline">
          ___________________________________________________________________________________________________________________
        </div>
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
  )
}

export default Contact