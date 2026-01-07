// import React from "react";
// import map from "../../assets/landingpage/map.avif";
// import AnimatedSection from "../AnimatedSection";
// import { client } from "../../data/text";
// const MapValue = () => {
//   return (
//     <section className="bg-white">
//       <div className="container mx-auto px-5 md:px-10 lg:px-20 py-4 md:py-20 flex items-start md:flex-row flex-col gap-10 ">
//         <div className="w-full">
//           <img src={map} alt="" />
//         </div>
//         <div className="w-full flex flex-col gap-8 justify-center">
//           {/* <div > */}{" "}
//           <AnimatedSection
//             animation="fade-down"
//             delay={200}
//             className="flex items-center gap-1"
//           >
//             <div className="w-10 h-[2px] rounded-lg bg-primary-dark"></div>
//             <h6 className="font-body font-semibold text-primary-dark text-base ">
//               Global Trust, Proven Results
//             </h6>{" "}
//           </AnimatedSection>
//           {/* </div>{" "} */}
//           <AnimatedSection animation="fade-up" delay={200}>
//             <h1 className="text-4xl font-heading font-semibold">
//               Our valued clients around the world
//             </h1>{" "}
//           </AnimatedSection>
//           <AnimatedSection animation="fade-up" delay={200}>
//             <p className="text-lg text-primary-dark font-body">
//               Discover the global reach of our financial expertise. We proudly
//               serve businesses across multiple regions, helping them achieve
//               financial success with tailored solutions
//             </p>{" "}
//           </AnimatedSection>
//           <div className="flex items-center gap-6">
//             {client.map((item, i) => (
//               <div className="flex items-center flex-col gap-1" key={i}>
//                 <h1 className="text-4xl font-heading font-semibold text-primary-dark">
//                   {item.num}%
//                 </h1>
//                 <h5 className="text-base font-body font-semibold text-primary-dark">
//                   {item.name}+
//                 </h5>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MapValue;

import React, { useState, useEffect, useRef } from "react";
import map from "../../assets/landingpage/map.avif";
import AnimatedSection from "../AnimatedSection";
import { client } from "../../data/text";

const MapValue = () => {
  return (
    <section className="bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-light/10 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-dark/5 rounded-full blur-3xl -z-0"></div>

      <div className="container mx-auto px-5 md:px-10 lg:px-20 py-12 md:py-24 relative z-10">
        <div className="flex items-center md:flex-row flex-col gap-12 lg:gap-16">
          {/* Map Section with Enhanced Styling */}
          <AnimatedSection
            animation="fade-right"
            delay={200}
            className="w-full"
          >
            <div className="relative group">
              {/* Decorative border effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-dark to-primary-light rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300"></div>

              <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                <img
                  src={map}
                  alt="Global presence map"
                  className="w-full h-auto rounded-lg"
                />

                {/* Animated pulse indicators on map */}
                <div className="absolute top-1/3 left-1/4 w-4 h-4 animate-ping">
                  <div className="w-full h-full bg-primary-dark rounded-full opacity-75"></div>
                </div>
                <div className="absolute top-1/2 right-1/3 w-4 h-4 animate-ping animation-delay-300">
                  <div className="w-full h-full bg-primary-dark rounded-full opacity-75"></div>
                </div>
                <div className="absolute bottom-1/3 left-1/2 w-4 h-4 animate-ping animation-delay-600">
                  <div className="w-full h-full bg-primary-dark rounded-full opacity-75"></div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content Section */}
          <div className="w-full flex flex-col gap-4 md:gap-6 justify-center">
            {/* Section Label */}
            <AnimatedSection
              animation="fade-down"
              delay={200}
              className="flex items-center gap-2"
            >
              <div className="w-12 h-[3px] rounded-lg bg-primary-dark"></div>
              <h6 className="font-body font-semibold text-primary-dark text-base uppercase tracking-wide">
                Global Trust, Proven Results
              </h6>
            </AnimatedSection>

            {/* Main Heading */}
            <AnimatedSection animation="fade-up" delay={300}>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
                Our Valued Clients
                <br />
                <span className="text-primary-dark">Around the World</span>
              </h2>
            </AnimatedSection>

            {/* Description */}
            <AnimatedSection animation="fade-up" delay={400}>
              <p className="text-base md:text-lg text-gray-600 font-body leading-relaxed">
                Discover the global reach of our financial expertise. We proudly
                serve businesses across multiple regions, helping them achieve
                financial success with tailored solutions and unwavering
                commitment.
              </p>
            </AnimatedSection>

            {/* Animated Statistics Grid */}
            <AnimatedSection animation="fade-up" delay={500}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {client.map((item, i) => (
                  <StatCounter
                    key={i}
                    number={item.num}
                    label={item.name}
                    delay={i * 100}
                  />
                ))}
              </div>
            </AnimatedSection>

            {/* Additional Features */}
            <AnimatedSection animation="fade-up" delay={600}>
              <div className="grid md:grid-cols-2 gap-4 ">
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-primary-dark/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-primary-dark"
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
                    <h4 className="font-semibold text-gray-900 mb-1">
                      RBI & CAG Empanelled
                    </h4>
                    <p className="text-sm text-gray-600">
                      Category I firm with proven credibility
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-primary-dark/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-primary-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Fast & Reliable
                    </h4>
                    <p className="text-sm text-gray-600">
                      Technology-enabled execution
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* CTA Button */}
            <AnimatedSection animation="fade-up" delay={700}>
              <button className=" py-3 px-8 bg-primary-dark text-white text-base font-heading rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl group">
                Explore Our Global Services
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
        </div>
      </div>
    </section>
  );
};

// Animated Counter Component
const StatCounter = ({ number, label, delay }) => {
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
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const increment = number / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
          setCount(number);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, number]);

  return (
    <div
      ref={counterRef}
      className="flex flex-col items-center gap-2 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100"
    >
      <div className="flex items-baseline gap-1">
        <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark group-hover:scale-110 transition-transform">
          {count}
        </h3>
        <span className="text-2xl md:text-3xl font-bold text-primary-dark">
          %
        </span>
      </div>
      <h5 className="text-sm md:text-base font-body font-semibold text-gray-700 text-center">
        {label}
      </h5>
      <div className="w-12 h-1 bg-primary-dark/20 rounded-full group-hover:bg-primary-dark transition-colors"></div>
    </div>
  );
};

export default MapValue;
