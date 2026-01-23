import React, { useState, useEffect, useRef } from "react";
import AnimatedSection from "../components/AnimatedSection";
import MapValue from "../components/homeSection/MapValue";
// import { FaAward, FaHandshake, FaChartLine, FaShieldAlt } from "react-icons/fa";
import {
  FaShieldAlt,
  FaAward,
  FaBalanceScale,
  FaGavel,
  FaBookOpen,
  FaChartLine,
} from "react-icons/fa";
const LandingPage = () => {
  const stats = [
    {
      value: 45,
      suffix: "+",
      label: "Years Combined Experience",
      type: "number",
    },
    { value: 500, suffix: "+", label: "Clients Served", type: "number" },
    {
      value: "Category I",
      suffix: "",
      label: "RBI Empanelled Firm",
      type: "text",
    },
    { value: "ISO", suffix: "", label: "Compliant Systems", type: "text" },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="hero-section relative">
        <div className="w-full h-full bg-[linear-gradient(100deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.7)_33%,rgba(30,30,30,0.1)_53%)]">
          <div className="container mx-auto flex flex-col items-start gap-4 justify-end w-full h-full py-5 md:py-10 lg:py-20 px-5 md:px-10">
            <AnimatedSection animation="fade-up" delay={200}>
              <h1 className="text-white text-3xl md:text-7xl font-bold">
                S T A R S & Co. LLP <br className="hidden md:block" />
                <span className="text-primary-light">
                  Chartered Accountants
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <p className="text-lg md:text-xl text-primary-light font-body">
                Chartered Accountants | Auditors | Advisors | Consultants
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <p className="text-white text-base md:text-lg max-w-2xl font-body italic">
                "ENVISION. LEAD. EXECUTE"
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={500}>
              <div className="flex gap-4 flex-wrap">
                <button className="border border-white py-3 px-8 transition-all duration-300 ease-in-out bg-transparent text-white text-base font-heading rounded-full hover:text-primary-dark hover:bg-white">
                  Explore Our Services
                </button>
                <button className="py-3 px-8 transition-all duration-300 ease-in-out bg-primary-light text-primary-dark text-base font-heading rounded-full hover:bg-white">
                  Schedule Consultation
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-primary-dark py-6 md:py-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-light/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-5 md:px-10 lg:px-20 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={100 + index * 100}
              >
                <TrustCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  type={stat.type}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-bg">
        <div className="container mx-auto px-5 md:px-10 lg:px-20 py-10 md:py-20 flex items-center md:flex-row flex-col gap-8 md:gap-12">
          <div className="w-full flex flex-col gap-6 justify-center">
            <AnimatedSection
              animation="fade-down"
              delay={200}
              className="flex items-center gap-2"
            >
              <div className="w-12 h-[3px] rounded-lg bg-primary-dark"></div>
              <h6 className="font-body font-semibold text-primary-dark text-lg uppercase tracking-wide">
                About Us
              </h6>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-primary-dark mb-4">
                Excellence in Financial & Regulatory Services Since 2013
              </h2>
              <p className="text-base md:text-lg text-gray-700 font-body leading-relaxed">
                M/s. S T A R S & Co. LLP (Previously known as Prashant Mittal
                and Co. LLP) is a multi-disciplinary professional firm providing
                comprehensive financial and regulatory services, including Audit
                & Assurance, US GAAP Restatement, Taxation, Foreign Exchange &
                Regulatory Consulting, Corporate Finance, and Management
                Advisory.
              </p>
              {/* <p className="text-base md:text-lg text-gray-700 font-body leading-relaxed">
                M/s. S T A R S & Co. LLP (Previously known as Prashant Mittal
                and Co. LLP) is a multi-disciplinary professional firm providing
                comprehensive financial and regulatory services, including Audit
                & Assurance, US GAAP Restatement, Taxation, Foreign Exchange &
                Regulatory Consulting, Corporate Finance, and Management
                Advisory. Led by experienced partners and supported by a dynamic
                team, the firm operates with an unwavering commitment to
                quality, ethics, and professionalism.
              </p>{" "}
              <br />
              <p className="text-base md:text-lg text-gray-700 font-body leading-relaxed">
                Our operations are built on integrity, innovation, and
                client-centricity. We are empanelled with various leading
                nationalized and private sector banks and hold RBI, IBA, and CAG
                empanelments, signifying our credibility and professional
                capability in handling high-value assignments.
              </p> */}
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-down" delay={400} className="w-full">
            <div className="flex flex-col gap-6 bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <p className="text-base md:text-lg text-gray-700 font-body leading-relaxed">
                Led by experienced partners and supported by a dynamic team, we
                operate with an unwavering commitment to quality, ethics, and
                professionalism. We are empanelled with leading nationalized and
                private sector banks and hold RBI, IBA, and CAG empanelments.
              </p>
              <button className="w-fit py-3 px-8 bg-primary-dark text-white text-base font-heading rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-all">
                Learn More About Us
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Built on integrity, innovation, and client-centricity
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="bg-light-bg p-6 rounded-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary-dark">
                <div className="w-14 h-14 bg-primary-dark rounded-full flex items-center justify-center mb-4">
                  <FaShieldAlt className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">
                  Integrity
                </h3>
                <p className="text-gray-600">
                  Unwavering commitment to ethical practices and transparency in
                  all engagements
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className="bg-light-bg p-6 rounded-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary-dark">
                <div className="w-14 h-14 bg-primary-dark rounded-full flex items-center justify-center mb-4">
                  <FaAward className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Quality</h3>
                <p className="text-gray-600">
                  Delivering excellence through standardized methodologies and
                  continuous improvement
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="bg-light-bg p-6 rounded-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary-dark">
                <div className="w-14 h-14 bg-primary-dark rounded-full flex items-center justify-center mb-4">
                  <FaHandshake className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">
                  Accountability
                </h3>
                <p className="text-gray-600">
                  Taking full responsibility for results and client satisfaction
                  in every project
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={500}>
              <div className="bg-light-bg p-6 rounded-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary-dark">
                <div className="w-14 h-14 bg-primary-dark rounded-full flex items-center justify-center mb-4">
                  <FaChartLine className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  Leveraging technology and modern approaches for efficient
                  service delivery
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section> */}

      {/* Core Values Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="text-center mb-10 md:mb-16">
              <div className="inline-block mb-4">
                <span className="text-secondary-600 font-semibold text-xs md:text-sm uppercase tracking-wider px-4 py-2 bg-secondary-100 rounded-full shadow-sm">
                  Our Foundation
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-dark mb-4">
                Our Core Values
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                The principles that guide our professional conduct and client
                relationships
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Integrity */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="group relative bg-gradient-to-br from-white to-primary-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-secondary-400 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-100 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 opacity-50"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <FaShieldAlt className="text-primary text-2xl" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-3 text-gray-900 group-hover:text-secondary-700 transition-colors">
                    Integrity
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Unwavering commitment to ethical practices and transparency
                    in all professional engagements
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Quality */}
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="group relative bg-gradient-to-br from-white to-primary-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-secondary-400 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-100 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 opacity-50"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <FaAward className="text-primary text-2xl" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-3 text-gray-900 group-hover:text-secondary-700 transition-colors">
                    Quality
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Delivering excellence through standardized methodologies and
                    rigorous quality control
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Accountability */}
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="group relative bg-gradient-to-br from-white to-primary-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-secondary-400 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-100 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 opacity-50"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <FaBalanceScale className="text-primary text-2xl" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-3 text-gray-900 group-hover:text-secondary-700 transition-colors">
                    Accountability
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Taking full ownership of deliverables and outcomes in every
                    client engagement
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Professional Ethics */}
            <AnimatedSection animation="fade-up" delay={500}>
              <div className="group relative bg-gradient-to-br from-white to-primary-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-secondary-400 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-100 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 opacity-50"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <FaGavel className="text-primary text-2xl" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-3 text-gray-900 group-hover:text-secondary-700 transition-colors">
                    Professional Ethics
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Adhering to the highest standards of professional conduct
                    and regulatory compliance
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Knowledge Sharing */}
            <AnimatedSection animation="fade-up" delay={600}>
              <div className="group relative bg-gradient-to-br from-white to-primary-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-secondary-400 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-100 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 opacity-50"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <FaBookOpen className="text-primary text-2xl" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-3 text-gray-900 group-hover:text-secondary-700 transition-colors">
                    Knowledge Sharing
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Empowering clients through insights, training, and
                    collaborative learning approaches
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Continuous Improvement */}
            <AnimatedSection animation="fade-up" delay={700}>
              <div className="group relative bg-gradient-to-br from-white to-primary-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-secondary-400 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-100 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 opacity-50"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <FaChartLine className="text-primary text-2xl" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-3 text-gray-900 group-hover:text-secondary-700 transition-colors">
                    Continuous Improvement
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Constantly evolving our practices through innovation,
                    training, and industry best practices
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary-dark to-gray-900 py-12 md:py-16">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Recognized & Empanelled
              </h2>
              <p className="text-lg text-primary-light">
                Our credentials reflect our commitment to professional
                excellence
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white text-center hover:bg-white/20 transition-all">
                <h4 className="text-xl font-bold mb-2 text-primary-light">
                  RBI Empanelled
                </h4>
                <p className="text-sm">Unique Code: 951335</p>
                <p className="text-sm mt-1">Category I Firm</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white text-center hover:bg-white/20 transition-all">
                <h4 className="text-xl font-bold mb-2 text-primary-light">
                  CAG Empanelled
                </h4>
                <p className="text-sm">Empanelment No.: BO 1542</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={500}>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white text-center hover:bg-white/20 transition-all">
                <h4 className="text-xl font-bold mb-2 text-primary-light">
                  IBA Empanelled
                </h4>
                <p className="text-sm">For Exposure up to ₹50 Crores</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <AnimatedSection animation="fade-down" delay={200}>
              <div className="bg-gradient-to-br from-primary-dark to-gray-800 p-8 rounded-lg text-white h-full">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-primary-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Our Vision
                </h3>
                <p className="text-lg leading-relaxed">
                  To set the benchmark in professional excellence through
                  knowledge, transparency, and innovation.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className="bg-light-bg p-8 rounded-lg h-full border-2 border-primary-dark">
                <div className="w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-primary-dark">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To deliver quality-driven, compliant, and strategic solutions
                  to clients through professional expertise and
                  technology-enabled execution.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <MapValue />

      <section className="bg-primary-dark py-12 md:py-16">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Ready to Partner with Excellence?
              </h2>
              <p className="text-lg text-primary-light mb-8 max-w-2xl mx-auto">
                Let us help you navigate complex financial challenges with
                precision, transparency, and strategic insight.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button className="py-4 px-8 bg-white text-primary-dark text-base font-heading rounded-full hover:bg-primary-light transition-all">
                  Schedule a Consultation
                </button>
                <button className="py-4 px-8 border-2 border-white text-white text-base font-heading rounded-full hover:bg-white hover:text-primary-dark transition-all">
                  View Our Services
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

const TrustCounter = ({ value, suffix, label, type }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && type === "number") {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, value, type]);

  return (
    <div ref={counterRef} className="text-white group cursor-default relative">
      <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-4 p-4"></div>
      <div className="relative">
        <div className="flex items-baseline justify-center gap-1 mb-2">
          {type === "number" ? (
            <>
              <h3 className="text-3xl md:text-4xl font-bold text-primary-light group-hover:scale-110 transition-transform duration-300">
                {count}
              </h3>
              {suffix && (
                <span className="text-2xl md:text-3xl font-bold text-primary-light group-hover:scale-110 transition-transform duration-300">
                  {suffix}
                </span>
              )}
            </>
          ) : (
            <h3 className="text-2xl md:text-3xl font-bold text-primary-light group-hover:scale-110 transition-transform duration-300">
              {value}
            </h3>
          )}
        </div>

        <p className="text-sm md:text-base mt-2 text-white/90 group-hover:text-white transition-colors duration-300">
          {label}
        </p>

        <div className="mt-3 mx-auto w-12 h-0.5 bg-primary-light/30 group-hover:bg-primary-light group-hover:w-20 transition-all duration-300"></div>
      </div>
    </div>
  );
};

export default LandingPage;
