import HeroAll from '@/components/HeroAll'
import Navbar from '@/components/Navbar'
import React from 'react'
import "../styles/about/about.scss";
import "../styles/contact/contact.scss"
import { ContactForm, ContactGallery } from '@/components/contact';
import { Map } from '@/components/homes';
import FooterBottom from '@/components/FooterBottom';
import OnlineBooking from '@/components/OnlineBooking';

const ContactUs = () => {
  return (
    <div>
      <Navbar eLogo={"eLogo"}/>
      <HeroAll cls={"contact-hero"} title={"КОНТАКТИ"} />
      <ContactForm />
      <Map elogo={"elogo"} />
      <ContactGallery />
      <FooterBottom />
    </div>
  )
}

export default ContactUs