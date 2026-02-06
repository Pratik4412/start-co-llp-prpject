import React, { useState, useEffect, useRef, useCallback } from "react";
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
  FaBullseye,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";
import Audit from "../assets/servicesPage/Audit & Assurance.webp";
import Taxation from "../assets/servicesPage/Taxation Services.webp";
import Bank from "../assets/servicesPage/bank audit.webp";
import Corporate from "../assets/servicesPage/corporate-finance.webp";
import Business from "../assets/servicesPage/Business Restructuring & Valuations.webp";
import FEMA from "../assets/servicesPage/FEMA, RBI & FOREX Advisory.webp";
import Portfolio from "../assets/servicesPage/Portfolio Advisory and Investment Planning.webp";
import Company from "../assets/servicesPage/Company Law & Secretarial Compliance.webp";
import International from "../assets/servicesPage/International Business & NRI Services.webp";

import landing from "../assets/men.png";
import { Link } from "react-router-dom";
import OurTeam from "../components/OurTeam";
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
  const [activeService, setActiveService] = useState("audit");
  const sectionRef = useRef(null);
  const serviceRefs = useRef({});
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
  const serviceOrder = [
    "audit",
    "taxation",
    "bankAudits",
    "corporateFinance",
    "businessRestructuring",
    "fema",
    "portfolio",
    "companyLaw",
    "international",
  ];

  const updateActiveService = useCallback(() => {
    if (!sectionRef.current) return;

    const sectionRect = sectionRef.current.getBoundingClientRect();
    const sectionTop = sectionRect.top + window.scrollY;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Check which service section is most visible
    let mostVisibleService = activeService;
    let maxVisibleHeight = 0;

    serviceOrder.forEach((serviceKey) => {
      const serviceElement = serviceRefs.current[serviceKey];
      if (serviceElement) {
        const rect = serviceElement.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementHeight = rect.height;

        // Check if element is visible in viewport
        const visibleTop = Math.max(scrollY, elementTop);
        const visibleBottom = Math.min(
          scrollY + windowHeight,
          elementTop + elementHeight,
        );
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          mostVisibleService = serviceKey;
        }
      }
    });

    setActiveService(mostVisibleService);
  }, [activeService]);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(updateActiveService);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [updateActiveService]);

  return (
    <div className="">
      {/* Hero Section */}
      <section className="hero-section relative">
        <div className="w-full h-full bg-[linear-gradient(100deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.7)_33%,rgba(30,30,30,0.1)_53%)]">
          <div className="container mx-auto flex flex-col items-start gap-4 justify-end w-full h-full py-5 md:py-10 lg:py-20 px-5 md:px-10">
            <AnimatedSection animation="fade-up" delay={200}>
              <h1 className="text-white text-3xl md:text-7xl font-bold font-heading">
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
                <a
                  href="#services"
                  className="border border-white py-3 px-8 transition-all duration-300 ease-in-out bg-transparent text-white text-base font-inter rounded-full hover:text-primary-dark hover:bg-white"
                >
                  Explore Our Services
                </a>
                {/* <Link to={"/contact"}>Get In Touch</Link> */}
                <a
                  href="https://drive.google.com/file/d/1TilNMw57fSHJworKw4-uDmdiO70LinaR/view"
                  target="_blank"
                  className="py-3 px-8 transition-all duration-300 ease-in-out bg-primary-light text-primary-dark text-base font-heading rounded-full hover:bg-white"
                >
                  Download our E-brochure
                </a>
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

      <section className="bg-light-bg" id="About-Us">
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
            </div>
          </AnimatedSection>
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
              <div className="space-y-4 text-white text-lg leading-relaxed font-body">
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
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-body">
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
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base font-body">
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
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base font-body">
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
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base font-body">
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
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base font-body">
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
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base font-body">
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
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base font-body">
                    Constantly evolving our practices through innovation,
                    training, and industry best practices
                  </p>
                </div>
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
                <p className="text-lg leading-relaxed font-body">
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
                <p className="text-lg text-gray-700 leading-relaxed font-body">
                  To deliver quality-driven, compliant, and strategic solutions
                  to clients through professional expertise and
                  technology-enabled execution.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* Services Content Section with Sticky Sidebar */}
      {/* <section
        className="bg-gradient-to-br from-primary-dark py-12 md:py-20 relative overflow-visible"
        id="services"
      >
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="lg:w-4/12 lg:sticky lg:top-32 self-start h-fit w-full">
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
            </div>

            <div className="lg:w-8/12 w-full">
              <AnimatedSection animation="fade-left" delay={300}>
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
                  </div>
                </div>
              </AnimatedSection>

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
      </section> */}
      <section
        ref={sectionRef}
        className="bg-gradient-to-br from-primary-dark py-12 md:py-20 relative overflow-visible"
        id="services"
      >
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-5 md:px-10 lg:px-20 flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* LEFT SIDEBAR - Sticky & Auto-scroll */}
            <div className="lg:w-4/12 lg:sticky lg:top-32 self-start h-fit w-full">
              <div className="bg-gradient-to-br from-primary-dark to-gray-900 rounded-2xl p-3 lg:p-8 shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
                  Services
                </h3>
                <nav className="space-y-3">
                  {Object.entries(services).map(([key, service]) => (
                    <button
                      key={key}
                      onClick={() => {
                        serviceRefs.current[key]?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }}
                      className={`w-full text-left px-6 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-between group ${
                        activeService === key
                          ? "bg-primary-light text-primary-dark scale-105 shadow-lg"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      <span className="text-base">{service.title}</span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          activeService === key
                            ? "rotate-45 scale-110"
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
            </div>
            {/* RIGHT CONTENT - Service Details */}
            <div className="lg:w-8/12 w-full space-y-12">
              {/* Individual Service Sections */}
              {serviceOrder.map((serviceKey) => (
                <div
                  key={serviceKey}
                  ref={(el) => {
                    serviceRefs.current[serviceKey] = el;
                  }}
                  className="service-section bg-white rounded-2xl shadow-lg overflow-hidden"
                  style={{ scrollMarginTop: "100px" }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={services[serviceKey].image}
                      alt={services[serviceKey].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                        {services[serviceKey].title}
                      </h2>
                    </div>
                  </div>

                  <div className="p-3 lg:p-8">
                    <h3 className="text-xl font-heading font-bold text-primary-dark mb-4">
                      Building a strong financial foundation
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {services[serviceKey].description}
                    </p>

                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="text-lg font-heading font-bold text-gray-900 mb-4">
                        What We Offer:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {services[serviceKey].details.map((detail, i) => (
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
                  </div>
                </div>
              ))}
            </div>
          </div>
          <AnimatedSection animation="fade-up" delay={400}>
            <div className="bg-gradient-to-br from-light-bg to-white rounded-2xl p-3 lg:p-8 shadow-lg">
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
                        <h4 className="text-2xl font-bold text-white font-heading">
                          Category I
                        </h4>
                        <p className="text-gray-100 font-body">
                          RBI Empanelled Firm
                        </p>
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
                  <p className="text-gray-700 text-lg mb-4 font-body">
                    We provide tailored financial solutions to help your
                    business grow with confidence
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <OurTeam />

      <section className="bg-primary-dark py-12 md:py-16">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Ready to Partner with Excellence?
              </h2>
              <p className="text-lg text-primary-light mb-8 max-w-2xl mx-auto font-body">
                Let us help you navigate complex financial challenges with
                precision, transparency, and strategic insight.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link
                  to={"/contact"}
                  className="py-4 px-8 bg-white text-primary-dark text-base font-heading rounded-full hover:bg-primary-light transition-all"
                >
                  Get In Touch
                </Link>
                <a
                  href="#services"
                  className="py-4 px-8 border-2 border-white text-white text-base font-heading rounded-full hover:bg-white hover:text-primary-dark transition-all"
                >
                  View Our Services
                </a>
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

        <p className="text-sm md:text-base mt-2 text-white/90 group-hover:text-white transition-colors duration-300 font-body">
          {label}
        </p>

        <div className="mt-3 mx-auto w-12 h-0.5 bg-primary-light/30 group-hover:bg-primary-light group-hover:w-20 transition-all duration-300"></div>
      </div>
    </div>
  );
};

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
        <p className="text-gray-600 leading-relaxed font-body">{description}</p>
      </div>
    </div>
  );
};

export default LandingPage;
