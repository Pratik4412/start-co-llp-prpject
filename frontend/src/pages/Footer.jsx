import React, { useState, useEffect } from "react";
import logo from "../assets/logo-preview.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import AnimatedSection from "../components/AnimatedSection";
import ca_logo from "../assets/ca-logo.svg";
import class_co_1 from "../assets/class-co2.svg";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const navigate = useNavigate();
  const navigateAndScroll = (sectionId) => {
    navigate("/");

    // wait for LandingPage to render
    setTimeout(() => {
      if (!sectionId) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };
  const navigationLinks = [
    { name: "Home", sectionId: null },
    { name: "About Us", sectionId: "About-Us" },
    { name: "Services", sectionId: "services" },
    { name: "Team", sectionId: "team" },
    { name: "Contact Us", path: "/contact" },
  ];

  const serviceLinks = [
    { name: "Audit & Assurance", path: "/services#audit" },
    { name: "Taxation Services", path: "/services#taxation" },
    { name: "Bank Audits", path: "/services#bank-audits" },
    { name: "Corporate Finance", path: "/services#corporate-finance" },
    { name: "FEMA Advisory", path: "/services#fema" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-of-service" },
    { name: "Legal Disclaimer", path: "/legal-disclaimer" },
    {
      name: "Download our E-brochure",
      path: "https://drive.google.com/file/d/1TilNMw57fSHJworKw4-uDmdiO70LinaR/view",
    },
  ];

  const socialLinks = [
    // { icon: <FaFacebookF />, link: "https://facebook.com", label: "Facebook" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com", label: "LinkedIn" },
    // { icon: <FaTwitter />, link: "https://twitter.com", label: "Twitter" },
    // {
    //   icon: <FaInstagram />,
    //   link: "https://instagram.com",
    //   label: "Instagram",
    // },
    // { icon: <FaYoutube />, link: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-primary-dark via-gray-900 to-primary-dark text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            src={class_co_1}
            alt="Background Model Icon"
            className="
    w-[600px] h-[600px]
    md:w-[700px] md:h-[700px]
    lg:w-[850px] lg:h-[850px]
    object-contain
    opacity-20
    mix-blend-soft-light
  "
          />
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-light/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-5 md:px-10 lg:px-20 py-12 md:py-16">
        <div className="flex items-start lg:justify-between flex-col lg:flex-row gap-6">
          {/* Brand Section */}
          <div className="lg:col-span-4 w-full ">
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="space-y-6">
                <p className="text-white/80 leading-relaxed font-body">
                  S T A R S & Co. LLP is a Category I Chartered Accountancy firm
                  committed to delivering reliable, ethical, and forward-looking
                  professional solutions since 2013.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <a
                    href="tel:+919819082799"
                    className="flex items-center gap-3 text-white/80 hover:text-primary-light transition-colors group font-body"
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-primary-light/20 transition-colors">
                      <MdPhone className="text-lg" />
                    </div>
                    <span>+91 9819082799</span>
                  </a>

                  <a
                    href="mailto:info@starsca.co.in"
                    className="flex items-center gap-3 text-white/80 hover:text-primary-light transition-colors group font-body"
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-primary-light/20 transition-colors">
                      <MdEmail className="text-lg" />
                    </div>
                    <span>info@starsca.co.in</span>
                  </a>

                  <a
                    href="https://maps.app.goo.gl/J4PwDYf3UaMqBkbe7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-white/80 hover:text-primary-light transition-colors group"
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-primary-light/20 transition-colors flex-shrink-0">
                      <MdLocationOn className="text-lg" />
                    </div>
                    <span className="text-sm leading-relaxed font-body">
                      1201-A, Lotus Arc One, New Link Road, Opp. Tanishq
                      Showroom, Andheri West, Mumbai- 400013,
                    </span>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 w-full flex lg:justify-center">
            <AnimatedSection animation="fade-up" delay={300}>
              <h3 className="text-xl font-heading font-bold mb-6 text-primary-light">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navigationLinks.map((link, i) => (
                  <li key={i}>
                    {link.path ? (
                      // Contact (normal route)
                      <Link
                        to={link.path}
                        className="text-white/70 hover:text-primary-light transition-colors inline-flex items-center gap-2 group font-body"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-primary-light transition-all"></span>
                        {link.name}
                      </Link>
                    ) : (
                      // Landing page section scroll
                      <button
                        onClick={() => navigateAndScroll(link.sectionId)}
                        className="text-white/70 hover:text-primary-light transition-colors inline-flex items-center gap-2 group font-body"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-primary-light transition-all"></span>
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
          <div className="lg:col-span-3 w-full flex lg:justify-center">
            <AnimatedSection animation="fade-up" delay={500}>
              <h3 className="text-xl font-heading font-bold mb-6 text-primary-light">
                Other
              </h3>
              <ul className="space-y-3 mb-8">
                {legalLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      target="_blank"
                      className="text-white/70 hover:text-primary-light transition-colors inline-flex items-center gap-2 group font-body"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary-light transition-all"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
          {/* Certification Badge */}
          <div className="inline-block bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                {/* <span className="text-2xl font-bold text-primary-light "> */}
                <img src={ca_logo} alt="" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="container mx-auto px-5 md:px-10 lg:px-20 py-6">
          {/* <AnimatedSection animation="fade-up" delay={600}> */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} S T A R S & Co. LLP. All rights
                reserved.
              </p>
              {/* <p className="text-white/40 text-xs mt-1">
                  Designed with excellence for financial professionals
                </p> */}
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3">
              <span className="text-white/60 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-light hover:text-primary-dark transition-all hover:scale-110 hover:-translate-y-1 group"
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          {/* </AnimatedSection> */}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-light text-primary-dark rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center z-50 group"
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6 group-hover:-translate-y-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
