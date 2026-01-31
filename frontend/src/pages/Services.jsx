// import React from "react";
// import landing from "../assets/js9gXJrzSkr8Mm4Lc5TMGT8U.avif";
// const Services = () => {
//   return (
//     <div>
// <section className="w-full h-full">
//   <div className="w-full h-[50vh] container mx-auto flex flex-col gap-4 justify-center">
//     <div className="w-10 h-[1px] bg-slate-50">SERVICES</div>
//     <h1 className="text-7xl">
//       Tax Optimization <br className="w-full h-full " /> and Compliance
//     </h1>
//   </div>
//   <img src={landing} alt="" className="w-full h-[50vh] object-cover" />
// </section>

//       <section>

//       </section>

//     </div>
//   );
// };

// export default Services;

import React, { useState } from "react";
import Audit from "../assets/servicesPage/Audit & Assurance.webp";
import Taxation from "../assets/servicesPage/Taxation Services.webp";
import Bank from "../assets/servicesPage/bank audit.webp";
import Corporate from "../assets/servicesPage/corporate-finance.webp";
import Business from "../assets/servicesPage/Business Restructuring & Valuations.webp";
import FEMA from "../assets/servicesPage/FEMA, RBI & FOREX Advisory.webp";
import Portfolio from "../assets/servicesPage/Portfolio Advisory and Investment Planning.webp";
import Company from "../assets/servicesPage/Company Law & Secretarial Compliance.webp";
import International from "../assets/servicesPage/International Business & NRI Services.webp";
import AnimatedSection from "../components/AnimatedSection";
import landing from "../assets/men.png";
import { Link } from "react-router-dom";
const Services = () => {
  const [activeService, setActiveService] = useState("audit");

  const services = {
    audit: {
      title: "Audit & Assurance",
      description:
        "Healthy cash flow is the lifeblood of every successful business. Our Audit & Assurance Solutions are designed to help organizations maintain transparency, improve operational efficiency, and achieve long-term financial stability.",
      details: [
        "Statutory Audits",
        "Internal Audits",
        "Concurrent Audits",
        "Revenue Audits",
        "Forensic Audits",
        "System Audits",
      ],
      image: Audit,
    },
    taxation: {
      title: "Taxation Services",
      description:
        "Comprehensive tax planning and compliance services to optimize your tax position while ensuring full regulatory compliance. We help you navigate complex tax regulations efficiently.",
      details: [
        "Income Tax Planning & Filing",
        "TDS Compliance & Returns",
        "Tax Assessments & Appeals",
        "GST Registration & Filing",
        "GST Advisory & Compliance",
        "Indirect Tax Consulting",
      ],
      image: Taxation,
    },
    bankAudits: {
      title: "Bank Audits",
      description:
        "Specialized audit services for banking and financial institutions, ensuring compliance with RBI guidelines and industry best practices.",
      details: [
        "Statutory Bank Audits",
        "Concurrent Audits",
        "Revenue Audits",
        "Stock Audits",
        "Forensic Audits",
        "Income Leakage Audits",
        "KYC Audits",
        "EDP Audits",
      ],
      image: Bank,
    },
    corporateFinance: {
      title: "Corporate Finance & Project Funding",
      description:
        "Strategic financial advisory services to help businesses secure funding and optimize their capital structure for sustainable growth.",
      details: [
        "Loan Syndication",
        "Term Loans",
        "Foreign Direct Investment (FDI)",
        "Private Equity Advisory",
        "Working Capital Management",
      ],
      image: Corporate,
    },
    businessRestructuring: {
      title: "Business Restructuring & Valuations",
      description:
        "Expert guidance on business restructuring, valuations, and strategic planning to maximize enterprise value.",
      details: [
        "Business Valuation",
        "Merger & Acquisition Support",
        "Corporate Restructuring",
        "Due Diligence",
        "Fairness Opinions",
      ],
      image: Business,
    },
    fema: {
      title: "FEMA, RBI & FOREX Advisory",
      description:
        "Comprehensive advisory and certification services for foreign exchange regulations and RBI compliance.",
      details: [
        "FEMA Compliance",
        "RBI Approvals & Reporting",
        "Foreign Exchange Advisory",
        "FEMA Certifications",
        "Cross-border Transactions",
      ],
      image: FEMA,
    },
    portfolio: {
      title: "Portfolio Advisory and Investment Planning",
      description:
        "Personalized investment strategies and portfolio management services to help you achieve your financial goals.",
      details: [
        "Investment Planning",
        "Portfolio Management",
        "Risk Assessment",
        "Wealth Management",
        "Financial Goal Setting",
      ],
      image: Portfolio,
    },
    companyLaw: {
      title: "Company Law & Secretarial Compliance",
      description:
        "Complete secretarial and company law compliance services to ensure your business meets all regulatory requirements.",
      details: [
        "Company Incorporation",
        "Annual Compliance",
        "Board Meetings & Minutes",
        "ROC Filings",
        "Corporate Governance",
      ],
      image: Company,
    },
    international: {
      title: "International Business & NRI Services",
      description:
        "Specialized services for international businesses and Non-Resident Indians navigating cross-border complexities.",
      details: [
        "NRI Tax Planning",
        "International Tax Advisory",
        "Cross-border Structuring",
        "Repatriation Services",
        "DTAA Benefits",
      ],
      image: International,
    },
  };

  const specializedServices = [
    {
      title: "Forensic and Investigative Audits",
      description:
        "In-depth investigation services to detect fraud, financial irregularities, and compliance violations.",
    },
    {
      title: "Information Systems (EDP) Audits",
      description:
        "Technology-focused audits to assess IT controls, data security, and system effectiveness.",
    },
    {
      title: "Insolvency & Bankruptcy Advisory (IBC 2016)",
      description:
        "Expert guidance on insolvency proceedings and bankruptcy resolution under IBC framework.",
    },
    {
      title: "Business Risk Assessment & Process Review",
      description:
        "Comprehensive evaluation of business risks and operational processes to enhance efficiency.",
    },
    {
      title: "Mergers, Acquisitions, and Strategic Alliances",
      description:
        "Strategic advisory for M&A transactions, partnerships, and corporate alliances.",
    },
    {
      title: "Financial Modelling and Feasibility Studies",
      description:
        "Detailed financial models and feasibility analysis for informed business decisions.",
    },
    {
      title: "Preparation of Project Reports and Budgets",
      description:
        "Professional preparation of comprehensive project reports and budget planning.",
    },
  ];

  return (
    <div>
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
              SERVICES
            </h6>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={300}>
            <h1 className="text-4xl md:text-7xl font-heading font-bold text-white leading-tight">
              Tax Optimization
              <br />
              <span className="text-primary-light">and Compliance</span>
            </h1>
          </AnimatedSection>
        </div>
        <img src={landing} alt="" className="w-full h-[50vh] object-cover" />
      </section>
      {/* Services Content Section with Sticky Sidebar */}
      <section className="bg-white py-12 md:py-20 relative overflow-visible">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left Sidebar - Sticky Popular Services */}
            <div className="lg:w-4/12 lg:sticky lg:top-32 self-start h-fit w-full">
              {/* <AnimatedSection animation="fade-right" delay={200}> */}
              <div className="bg-gradient-to-br from-primary-dark to-gray-900 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
                  Popular services
                </h3>

                <nav className="space-y-3">
                  {Object.entries(services).map(([key, service]) => (
                    <button
                      key={key}
                      onClick={() => setActiveService(key)}
                      className={`w-full text-left px-6 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-between group ${
                        activeService === key
                          ? "bg-primary-light text-primary-dark"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      <span className="text-base">{service.title}</span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          activeService === key
                            ? "rotate-45"
                            : "group-hover:translate-x-1"
                        }`}
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
                  ))}
                </nav>
              </div>
              {/* </AnimatedSection> */}
            </div>

            {/* Right Content - Service Details */}
            <div className="lg:w-8/12 w-full">
              <AnimatedSection animation="fade-left" delay={300}>
                {/* Active Service Content */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={services[activeService].image}
                      alt={services[activeService].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                        {services[activeService].title}
                      </h2>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-xl font-heading font-bold text-primary-dark mb-4">
                      Building a strong financial foundation
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {services[activeService].description}
                    </p>

                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="text-lg font-heading font-bold text-gray-900 mb-4">
                        What We Offer:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {services[activeService].details.map((detail, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 p-3 bg-light-bg rounded-lg hover:shadow-md transition-shadow"
                          >
                            <div className="w-2 h-2 bg-primary-dark rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex gap-4 flex-wrap">
                      <Link
                        to={"/contact"}
                        className="py-3 px-8 bg-primary-dark text-white text-base font-heading rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group"
                      >
                        Get In Tech
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
                      </Link>
                      {/* <button className="py-3 px-8 border-2 border-primary-dark text-primary-dark text-base font-heading rounded-full hover:bg-primary-dark hover:text-white transition-all">
                        Learn More
                      </button> */}
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Specialized Services Section */}
              <AnimatedSection animation="fade-up" delay={400}>
                <div className="bg-gradient-to-br from-light-bg to-white rounded-2xl p-8 shadow-lg">
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-12 h-[3px] rounded-lg bg-primary-dark"></div>
                      <h6 className="font-body font-semibold text-primary-dark text-base uppercase tracking-wide">
                        Specialized Services
                      </h6>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
                      Advanced Solutions for Complex Challenges
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {specializedServices.map((service, i) => (
                      <SpecializedServiceCard
                        key={i}
                        title={service.title}
                        description={service.description}
                        index={i}
                      />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-dark to-gray-900 py-16 md:py-20">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-white mb-8">
                Let our expert team help you navigate complex financial
                challenges with precision and strategic insight.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                {/* <button className="py-4 px-8 bg-white text-primary-dark text-base font-heading rounded-full hover:bg-primary-light transition-all shadow-xl">
                  Get In Tech
                </button> */}
                <Link
                  to={"/contact"}
                  className="py-4 px-8 border-2 border-white text-white text-base font-heading rounded-full hover:bg-white hover:text-primary-dark transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

// Specialized Service Card Component with Accordion
const SpecializedServiceCard = ({ title, description, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-light-bg transition-colors"
      >
        <h4 className="text-lg font-heading font-bold text-gray-900 pr-4">
          {title}
        </h4>
        <svg
          className={`w-6 h-6 text-primary-dark flex-shrink-0 transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-5 border-t border-gray-100">
          <p className="text-gray-700 leading-relaxed pt-4">{description}</p>
          {/* <button className="mt-4 text-primary-dark font-medium hover:underline flex items-center gap-2 group">
            Learn More
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
