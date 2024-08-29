import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'; 
import './Footer.css'
import OmniLogo from "../../assets/omnifood-logo.png";


const socialLinks = [
  { name: 'Instagram', icon: <FaInstagram />, href: '#' },
  { name: 'Facebook', icon: <FaFacebookF />, href: '#' },
  { name: 'Twitter', icon: <FaTwitter />, href: '#' }
];

const contactInfo = {
  heading: 'Contact us',
  address: '623 Harrison St., 2nd Floor, San Francisco, CA 94107',
  phone: '415-201-6370',
  email: 'hello@omnifood.com',
};

const accountLinks = [
  { text: 'Create account', href: '#' },
  { text: 'Sign in', href: '#' },
  { text: 'iOS app', href: '#' },
  { text: 'Android app', href: '#' }
];

const companyLinks = [
  { text: 'About Omnifood', href: '#' },
  { text: 'For Business', href: '#' },
  { text: 'Cooking partners', href: '#' },
  { text: 'Careers', href: '#' }
];

const resourcesLinks = [
  { text: 'Recipe directory', href: '#' },
  { text: 'Help center', href: '#' },
  { text: 'Privacy & terms', href: '#' }
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <a href="#" className="footer-logo">
            <img className="logo" alt="Omnifood logo" src={OmniLogo} />
          </a>

          <ul className="social-links">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a className="footer-link" id="footer-icon" href={link.href}>
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>

          <p className="copyright">
            Copyright &copy; <span className="year">2027</span> by Omnifood,<br /> Inc.
            All rights reserved.
          </p>
        </div>

        <div className="address-col">
          <p className="footer-heading">{contactInfo.heading}</p>
          <address className="contacts">
            <p className="address">{contactInfo.address}</p>
            <p>
              <a className="footer-link" href={`tel:${contactInfo.phone}`}>
                {contactInfo.phone}
              </a>
              <br />
              <a className="footer-link" href={`mailto:${contactInfo.email}`}>
                {contactInfo.email}
              </a>
            </p>
          </address>
        </div>

        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            {accountLinks.map((link) => (
              <li key={link.text}>
                <a className="footer-link" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            {companyLinks.map((link) => (
              <li key={link.text}>
                <a className="footer-link" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            {resourcesLinks.map((link) => (
              <li key={link.text}>
                <a className="footer-link" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
