import React from "react";
import AnimatedSection from "./AnimatedSection";
import { ourTeam } from "../data/text";

const OurTeam = () => {
  return (
    <section className="bg-white py-12 md:py-20 relative overflow-visible">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary-dark/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-5 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Column - Sticky Content */}
          <div className="lg:w-5/12 lg:sticky lg:top-32 self-start h-fit">
            <div className="space-y-6">
              <AnimatedSection
                animation="fade-down"
                delay={200}
                className="flex items-center gap-2"
              >
                <div className="w-12 h-[3px] rounded-lg bg-primary-dark"></div>
                <h6 className="font-body font-semibold text-primary-dark text-base uppercase tracking-wide">
                  Meet Our Team
                </h6>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={300}>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight">
                  Trusted experts
                  <br />
                  dedicated to your
                  <br />
                  <span className="text-primary-dark">financial growth</span>
                </h2>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={400}>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team of experienced chartered accountants brings decades of
                  combined expertise to help your business thrive. Each partner
                  specializes in different domains, ensuring comprehensive
                  financial solutions.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={500}>
                <button className="py-3 px-8 bg-primary-dark text-white text-base font-heading rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl group">
                  View All Team
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

              {/* Optional Stats */}
              <div className="hidden lg:grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <h4 className="text-4xl font-bold text-primary-dark mb-2">8+</h4>
                  <p className="text-gray-600">Expert Partners</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-primary-dark mb-2">45+</h4>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Scrollable Team Grid */}
          <div className="lg:w-7/12 w-full">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {ourTeam.map((member, i) => (
                <AnimatedSection
                  key={i}
                  animation="fade-up"
                  delay={200 + i * 100}
                >
                  <TeamMemberCard
                    image={member.img}
                    name={member.name}
                    position={member.position}
                    index={i}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// TeamMemberCard component remains the same
const TeamMemberCard = ({ image, name, position, index }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[3/4] bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Hover Content */}
        <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-sm mb-2">Connect with {name.split(" ")[0]}</p>
            <div className="flex gap-3">
              <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </button>
              <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4h-16c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 4l-8 5-8-5v-2l8 5 8-5v2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-6 bg-white">
        <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-2 group-hover:text-primary-dark transition-colors">
          {name}
        </h3>
        <p className="text-gray-600 font-body">{position}</p>

        {/* Bottom accent line */}
        <div className="w-12 h-1 bg-primary-dark/20 mt-4 rounded-full group-hover:w-full group-hover:bg-primary-dark transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default OurTeam;
