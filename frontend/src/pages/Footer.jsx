import React, { useState } from "react";
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

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
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
    { name: "Refund Policy", path: "/refund-policy" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, link: "https://facebook.com", label: "Facebook" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaTwitter />, link: "https://twitter.com", label: "Twitter" },
    {
      icon: <FaInstagram />,
      link: "https://instagram.com",
      label: "Instagram",
    },
    { icon: <FaYoutube />, link: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-primary-dark via-gray-900 to-primary-dark text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-light/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl"></div>
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-white/10">
        <div className="container mx-auto px-5 md:px-10 lg:px-20 py-12 md:py-16">
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">
                  Stay Updated with Financial Insights
                </h3>
                <p className="text-white/70 text-base">
                  Subscribe to our newsletter for expert tips, regulatory
                  updates, and industry trends.
                </p>
              </div>

              <form
                onSubmit={handleSubscribe}
                className="flex gap-3 w-full md:w-auto"
              >
                <div className="relative flex-1 md:w-80">
                  <MdEmail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary-light text-primary-dark font-heading font-semibold rounded-full hover:bg-white transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  {isSubscribed ? "Subscribed! ✓" : "Subscribe"}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-5 md:px-10 lg:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="space-y-6">
                {/* <Link to="/">
                  <img
                    src={logo}
                    alt="S T A R S & Co. LLP"
                    className="h-16 md:h-20 w-auto hover:scale-105 transition-transform"
                  />
                </Link> */}
                <p className="text-white/80 leading-relaxed">
                  S T A R S & Co. LLP is a Category I Chartered Accountancy firm
                  committed to delivering reliable, ethical, and forward-looking
                  professional solutions since 2013.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <a
                    href="tel:+919890214990"
                    className="flex items-center gap-3 text-white/80 hover:text-primary-light transition-colors group"
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-primary-light/20 transition-colors">
                      <MdPhone className="text-lg" />
                    </div>
                    <span>+91 98902 14990</span>
                  </a>

                  <a
                    href="mailto:capmc22@gmail.com"
                    className="flex items-center gap-3 text-white/80 hover:text-primary-light transition-colors group"
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-primary-light/20 transition-colors">
                      <MdEmail className="text-lg" />
                    </div>
                    <span>capmc22@gmail.com</span>
                  </a>

                  <a
                    href="https://maps.google.com/?q=306+Linkway+Estate+Premises+Malad+West+Mumbai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-white/80 hover:text-primary-light transition-colors group"
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-primary-light/20 transition-colors flex-shrink-0">
                      <MdLocationOn className="text-lg" />
                    </div>
                    <span className="text-sm leading-relaxed">
                      306, Linkway Estate Premises, Above Greens Restaurant, New
                      Link Road, Malad (West), Mumbai - 400064
                    </span>
                  </a>
                </div>

                {/* Certification Badge */}
                <div className="inline-block bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                      {/* <span className="text-2xl font-bold text-primary-light "> */}
                      <img src={ca_logo} alt="" className="w-full h-full" />
                      {/* </span> */}
                    </div>
                    <div className="text-primary-light">
                      <p className="text-xs font-semibold">Category I</p>
                      <p className="text-xs">RBI Empanelled</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <AnimatedSection animation="fade-up" delay={300}>
              <h3 className="text-xl font-heading font-bold mb-6 text-primary-light">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navigationLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-primary-light transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary-light transition-all"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <AnimatedSection animation="fade-up" delay={400}>
              <h3 className="text-xl font-heading font-bold mb-6 text-primary-light">
                Our Services
              </h3>
              <ul className="space-y-3">
                {serviceLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-primary-light transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary-light transition-all"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          {/* Legal */}
          <div className="lg:col-span-3">
            <AnimatedSection animation="fade-up" delay={500}>
              <h3 className="text-xl font-heading font-bold mb-6 text-primary-light">
                Legal
              </h3>
              <ul className="space-y-3 mb-8">
                {legalLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-primary-light transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary-light transition-all"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Credentials */}
              {/* <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <h4 className="text-sm font-semibold mb-3 text-primary-light">
                  Our Credentials
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-white/60">ICAI Reg:</span>
                    <span className="text-white/90 font-mono">
                      135781W/W100111
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">RBI Code:</span>
                    <span className="text-white/90 font-mono">951335</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">PAN:</span>
                    <span className="text-white/90 font-mono">AAOFP8306J</span>
                  </div>
                </div>
              </div> */}
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="container mx-auto px-5 md:px-10 lg:px-20 py-6">
          <AnimatedSection animation="fade-up" delay={600}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-white/60 text-sm">
                  © {new Date().getFullYear()} S T A R S & Co. LLP. All rights
                  reserved.
                </p>
                <p className="text-white/40 text-xs mt-1">
                  Designed with excellence for financial professionals
                </p>
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
          </AnimatedSection>
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
