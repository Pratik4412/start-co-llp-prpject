import React from "react";
import AnimatedSection from "./AnimatedSection";
import { ourTeam } from "../data/text";
import imageM from "../assets/team_images/CA. Prashant Mittal.jpeg";
const OurTeam = () => {
  return (
    <section
      className="bg-white py-12 md:py-20 relative overflow-visible"
      id="team"
    >
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
                <p className="text-lg text-gray-600 leading-relaxed font-body">
                  Our team of experienced chartered accountants brings decades
                  of combined expertise to help your business thrive. Each
                  partner specializes in different domains, ensuring
                  comprehensive financial solutions.
                </p>
              </AnimatedSection>

              {/* Optional Stats */}
              <div className="hidden lg:grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <h4 className="text-4xl font-bold text-primary-dark mb-2 font-heading">
                    8+
                  </h4>
                  <p className="text-gray-600 font-body">Expert Partners</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-primary-dark mb-2 font-heading">
                    45+
                  </h4>
                  <p className="text-gray-600 font-body">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Scrollable Team Grid */}
          <div className="lg:w-7/12 w-full flex flex-col gap-8">
            <div className="flex items-star flex-col lg:flex-row  bg-white shadow-md hover:shadow-2xl transition-all duration-500 h-full ">
              {/* Image Container */}
              <div className="lg:w-1/2 gap-3 bg-gray-100 flex items-start flex-col p-3">
                {/* <div className="w-full"> */}
                <img
                  src={imageM}
                  alt="Prashant Mittal"
                  className=" rounded-full object-cover object-left-top"
                />
                {/* </div> */}
                <div className="w-full ">
                  <h3 className="text-xl md:text-xl font-heading font-bold text-gray-900 group-hover:text-primary-dark transition-colors text-center">
                    CA. Prashant Mittal <br />
                    Chairman Emeritus
                  </h3>
                </div>
              </div>

              {/* Info Section */}
              <div className=" bg-white w-full h-full">
                <p className="text-gray-600 font-body p-6 ">
                  CA. Prashant Mittal brings vision, regulatory depth, and
                  execution discipline to STARS & Co. LLP. Qualifying as a
                  Chartered Accountant at just 19 years of age, he emerged early
                  as one of the youngest professionals of his generation,
                  setting high standards of professional excellence. With
                  extensive experience across audits, taxation, banking,
                  regulatory advisory, and corporate governance, he has played a
                  key role in building robust control frameworks and risk-aware
                  advisory systems for institutions and enterprises. As Chairman
                  Emeritus, he provides strategic oversight and mentorship,
                  ensuring that STARS remains focused on accountability,
                  precision, and institution-grade advisory aligned with
                  evolving regulatory expectations
                </p>
              </div>
            </div>
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
                    edu={member.edu}
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
const TeamMemberCard = ({ image, name, position, index, edu }) => {
  return (
    <>
      <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 ">
        {/* Image Container */}
        <div className="relative overflow-hidden w-full h-full  bg-gray-100 flex items-start gap-3 p-2">
          <div className="w-[60%]">
            <img
              src={image}
              alt={name}
              className="w-[120px] h-[120px] rounded-full object-cover object-left-top"
            />
          </div>
          <div className="w-full ">
            <h3 className="text-lg md:text-xl font-heading font-bold text-gray-900 group-hover:text-primary-dark transition-colors">
              {name}
            </h3>
            <h6 className="text-sm md:text-base font-body">{edu}</h6>
            <p className="text-xs ">Partner</p>
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Info Section */}
        <div className="p-6 bg-white ">
          <p className="text-gray-600 font-body">{position}</p>
          <div className="w-12 h-1 bg-primary-dark/20 mt-4 rounded-full group-hover:w-full group-hover:bg-primary-dark transition-all duration-500"></div>
        </div>
      </div>{" "}
    </>
  );
};

export default OurTeam;
