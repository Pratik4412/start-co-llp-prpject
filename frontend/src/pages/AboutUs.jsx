import React, { useState, useEffect, useRef } from "react";
import landing from "../assets/js9gXJrzSkr8Mm4Lc5TMGT8U.avif";
import AnimatedSection from "../components/AnimatedSection";
import { aboutSec, ourStorySide } from "../data/text";
import OurTeam from "../components/OurTeam";

const AboutUs = () => {
  const ImpactCard = ({ number, title, description, index }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef(null);

    // Extract numeric value from string like "500+" or "45+"
    const numericValue = parseInt(number.replace(/\D/g, "")) || 0;
    const suffix = number.replace(/\d/g, "");

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
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
      if (isVisible && numericValue > 0) {
        const duration = 2000;
        const steps = 60;
        const increment = numericValue / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= numericValue) {
            setCount(numericValue);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(timer);
      }
    }, [isVisible, numericValue]);

    return (
      <div
        ref={counterRef}
        className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-primary-dark overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex items-baseline gap-1">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-dark font-heading group-hover:scale-110 transition-transform">
              {numericValue > 0 ? count : number}
            </h1>
            {suffix && (
              <span className="text-4xl font-bold text-primary-dark">
                {suffix}
              </span>
            )}
          </div>

          <div className="w-16 h-1 bg-primary-dark/20 rounded-full group-hover:w-24 group-hover:bg-primary-dark transition-all"></div>

          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-heading font-bold text-gray-900">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    );
  };

  // Feature Item Component
  const FeatureItem = ({ number, title, description }) => {
    return (
      <div className="flex gap-6 group">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-full bg-primary-dark text-white flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
            {number}
          </div>
        </div>
        <div className="flex-1 pt-2">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-2 group-hover:text-primary-dark transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    );
  };
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full h-full relative">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-light/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="relative z-20 min-h-[60vh] container mx-auto px-5 md:px-10 lg:px-20 flex flex-col gap-6 justify-end py-10">
          <AnimatedSection
            animation="fade-down"
            delay={200}
            className="flex items-center gap-2"
          >
            <div className="w-12 h-[3px] rounded-lg bg-primary-light"></div>
            <h6 className="font-body font-semibold text-primary-light text-lg uppercase tracking-wide">
              About Us
            </h6>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={300}>
            <h1 className="text-4xl md:text-7xl font-heading font-bold text-white leading-tight">
              About us: your
              <br />
              <span className="text-primary-light"> financial path</span>
            </h1>
          </AnimatedSection>
        </div>
        <img src={landing} alt="" className="w-full h-[50vh] object-cover" />
      </section>

      {/* Impact Numbers Section */}
      <section className="bg-light-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-dark/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-5 md:px-10 lg:px-20 py-12 md:py-20 relative z-10">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-6">
              <div>
                <AnimatedSection
                  animation="fade-down"
                  delay={200}
                  className="flex items-center gap-2 mb-4"
                >
                  <div className="w-12 h-[3px] rounded-lg bg-primary-dark"></div>
                  <h6 className="font-body font-semibold text-primary-dark text-lg uppercase tracking-wide">
                    Our Impact in Numbers
                  </h6>
                </AnimatedSection>

                <AnimatedSection animation="fade-right" delay={300}>
                  <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-dark">
                    Measurable success
                    <br />
                    through the years
                  </h2>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fade-left" delay={400}>
                <button className="py-3 px-8 bg-primary-dark text-white text-base font-heading rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl group whitespace-nowrap">
                  Explore Our Process
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </AnimatedSection>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aboutSec.map((item, i) => (
                <AnimatedSection
                  key={i}
                  animation="fade-up"
                  delay={200 + i * 100}
                >
                  <ImpactCard
                    number={item.num}
                    title={item.title}
                    description={item.para}
                    index={i}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Based on Your Image */}
      <section className="bg-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary-light/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Image with Overlay */}
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-dark to-primary-light rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>

                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={landing}
                    alt="Expert guidance"
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/40 to-transparent"></div>

                  {/* Floating stat card on image */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary-dark rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-8 h-8 text-white"
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
                      <div>
                        <h4 className="text-2xl font-bold text-white">
                          Category I
                        </h4>
                        <p className="text-gray-100">RBI Empanelled Firm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Side - Content */}
            <div className="flex flex-col gap-8">
              <div>
                <AnimatedSection
                  animation="fade-down"
                  delay={300}
                  className="flex items-center gap-2 mb-4"
                >
                  <div className="w-12 h-[3px] rounded-lg bg-primary-dark"></div>
                  <h6 className="font-body font-semibold text-primary-dark text-base uppercase tracking-wide">
                    Why Choose Us
                  </h6>
                </AnimatedSection>

                <AnimatedSection animation="fade-left" delay={400}>
                  <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
                    Expert guidance,
                    <br />
                    <span className="text-primary-dark">proven results</span>
                  </h2>
                </AnimatedSection>
              </div>

              {/* Features List */}
              <div className="space-y-6">
                <AnimatedSection animation="fade-up" delay={500}>
                  <FeatureItem
                    number="01"
                    title="Personalized Strategies"
                    description="We craft financial solutions based on your unique goals and industry needs"
                  />
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={600}>
                  <FeatureItem
                    number="02"
                    title="Transparent Processes"
                    description="Clear, honest, and genuinely data-driven insights for better decision-making"
                  />
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={700}>
                  <FeatureItem
                    number="03"
                    title="Proven Track Record"
                    description="Extensive experience in helping businesses achieve sustainable growth"
                  />
                </AnimatedSection>
              </div>

              {/* Bottom CTA */}
              <AnimatedSection animation="fade-up" delay={800}>
                <div className="bg-light-bg rounded-xl p-6 mt-4">
                  <p className="text-gray-700 text-lg mb-4">
                    We provide tailored financial solutions to help your
                    business grow with confidence
                  </p>
                  <button className="py-3 px-8 bg-primary-dark text-white text-base font-heading rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-all group">
                    Learn More About Us
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-gradient-to-br from-primary-dark to-gray-900 py-12 md:py-20">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade-up" delay={200}>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-white text-lg leading-relaxed">
                <p>
                  Founded in 2013, S T A R S & Co. LLP has evolved from a vision
                  to set new benchmarks in professional excellence to becoming a
                  trusted Category I RBI-empanelled firm serving diverse
                  industries across India.
                </p>
                <p>
                  Our journey is built on unwavering commitment to quality,
                  ethics, and professionalism. With over 45 years of combined
                  partner experience and empanelments from RBI, IBA, and CAG,
                  we've established ourselves as a reliable partner for
                  businesses navigating complex financial landscapes.
                </p>
                <p>
                  Today, we serve 500+ clients with a dynamic team that combines
                  traditional expertise with technology-enabled execution,
                  ensuring our clients receive strategic, compliant, and
                  future-ready solutions.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-4">
                What Drives Us
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our core principles guide every decision and interaction
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ourStorySide.map((value, i) => (
              <AnimatedSection
                key={i}
                animation="fade-up"
                delay={200 + i * 100}
              >
                <div className="bg-light-bg p-6 rounded-xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <OurTeam />
    </div>
  );
};

// Impact Card Component with Counter Animation

export default AboutUs;
