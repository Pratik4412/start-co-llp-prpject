import React, { useState } from "react";
import landing from "../assets/men.png";
import AnimatedSection from "../components/AnimatedSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const services = [
    "Audit & Assurance",
    "Taxation Services",
    "Bank Audits",
    "Corporate Finance",
    "Business Restructuring",
    "FEMA & RBI Advisory",
    "Company Law Compliance",
    "Other",
  ];

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Phone",
      details: ["+91 9819082799", "022-42640413", "022-42640414"],
      link: "tel:+919819082799",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      //
      //
      details: ["info@starsca.co.in", "admin@starsca.co.in"],
      link: "mailto:info@starsca.co.in",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Address",

      details: [
        "1201-A, Lotus Arc One, New Link Road,",
        "Opp. Tanishq Showroom, Andheri West,",
        "Mumbai- 400013",
      ],
      link: "https://maps.app.goo.gl/J4PwDYf3UaMqBkbe7",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Business Hours",
      details: ["Monday - Friday: 10:00 AM - 6:30 PM", "Sunday: Closed"],
      link: null,
    },
  ];

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer comprehensive financial services including Audit & Assurance, Taxation, Bank Audits, Corporate Finance, FEMA Advisory, and more. Visit our Services page for complete details.",
    },
    {
      question: "How can I schedule a consultation?",
      answer:
        "You can schedule a consultation by filling out the contact form, calling us directly, or emailing us. We typically respond within 24 hours.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve diverse industries including Banking & NBFCs, Manufacturing, Infrastructure, Real Estate, IT, Education, Retail, and more.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      {/* <section className="w-full h-full relative hero-section">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-gray-900/80 to-primary-dark/90 z-10"></div>
        <img
          src={landing}
          alt="Contact us"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-20 min-h-[60vh] container mx-auto px-5 md:px-10 lg:px-20 flex flex-col gap-6 justify-center py-20">
          <AnimatedSection animation="fade-down" delay={200}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-[3px] rounded-lg bg-primary-light"></div>
              <h6 className="font-body font-semibold text-primary-light text-base uppercase tracking-wide">
                Contact Us
              </h6>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <h1 className="text-4xl md:text-7xl font-heading font-bold text-white leading-tight">
              Let's Start a
              <br />
              <span className="text-primary-light">Conversation</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl font-body">
              We're here to help you navigate your financial journey. Reach out
              to us for expert guidance and personalized solutions.
            </p>
          </AnimatedSection>
        </div>
      </section> */}
      <section className="w-full h-full relative">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-light/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="relative z-20 min-h-[60vh] container mx-auto px-5 md:px-10 lg:px-20 flex flex-col gap-3 justify-end py-10">
          <AnimatedSection animation="fade-down" delay={200}>
            <div className="flex items-center gap-2">
              <div className="w-12 h-[3px] rounded-lg bg-primary-light"></div>
              <h6 className="font-body font-semibold text-primary-light text-base uppercase tracking-wide">
                Contact Us
              </h6>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <h1 className="text-4xl md:text-7xl font-heading font-bold text-white leading-tight">
              Let's Start a
              <br />
              <span className="text-primary-light">Conversation</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <p className="text-lg md:text-xl text-white max-w-3xl font-body">
              We're here to help you navigate your financial journey. Reach out
              to us for expert guidance and personalized solutions.
            </p>
          </AnimatedSection>
        </div>
        <img src={landing} alt="" className="w-full h-[50vh] object-cover" />
      </section>

      {/* Contact Info Cards */}
      <section className="bg-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <AnimatedSection
                key={i}
                animation="fade-up"
                delay={200 + i * 100}
              >
                <div className="bg-light-bg p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-primary-dark h-full">
                  <div className="w-14 h-14 bg-primary-dark rounded-full flex items-center justify-center mb-4 text-white">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, j) => (
                      <p key={j} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  {info.link && (
                    <a
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-primary-dark font-medium hover:underline"
                    >
                      Get in touch
                      <svg
                        className="w-4 h-4"
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
                    </a>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gradient-to-br from-light-bg to-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-dark/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Side - Form */}
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                    Send us a message
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </div>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center gap-3">
                    <svg
                      className="w-6 h-6 flex-shrink-0"
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
                    <span>
                      Thank you! Your message has been sent successfully. We'll
                      contact you soon.
                    </span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all"
                        placeholder="Enter Your Company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, i) => (
                        <option key={i} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-8 bg-primary-dark text-white text-base font-heading rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
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
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy and
                    terms of service.
                  </p>
                </form>
              </div>
            </AnimatedSection>

            {/* Right Side - Map and Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <AnimatedSection animation="fade-left" delay={300}>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="h-80 bg-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4559.488725246986!2d72.82988287587733!3d19.13798075002255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b70061e2b64b%3A0x88fddfe7fd8c10a8!2sArcOne%20by%20Lotus%20Developers!5e1!3m2!1sen!2sin!4v1769759203906!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Office Location"
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                      Visit Our Office
                    </h3>
                    <p className="text-gray-600 mb-4">
                      1201-A, Lotus Arc One, New Link Road, Opp. Tanishq
                      Showroom, Andheri West, Mumbai- 400013,
                    </p>
                    <a
                      href="https://maps.app.goo.gl/J4PwDYf3UaMqBkbe7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-dark font-medium hover:underline"
                    >
                      Get Directions
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Quick Links */}
              <AnimatedSection animation="fade-left" delay={400}>
                <div className="bg-gradient-to-br from-primary-dark to-gray-900 p-8 rounded-2xl shadow-xl text-white">
                  <h3 className="text-2xl font-heading font-bold mb-6">
                    Quick Contact
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="tel:+919819082799"
                      className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all group"
                    >
                      <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
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
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-white/80">Call us now</p>
                        <p className="font-semibold">+91 9819082799</p>
                      </div>
                    </a>

                    <a
                      href="mailto:info@starsca.co.in"
                      className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all group"
                    >
                      <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
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
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-white/80">Email us</p>
                        <p className="font-semibold">info@starsca.co.in</p>
                      </div>
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Credentials */}
              <AnimatedSection animation="fade-left" delay={500}>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-4">
                    Our Credentials
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">ICAI Firm Reg.</p>
                      <p className="font-semibold text-primary-dark">
                        135781W/W100111
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">PAN</p>
                      <p className="font-semibold text-primary-dark">
                        AAOFP8306J
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">GST</p>
                      <p className="font-semibold text-primary-dark">
                        27AAOFP8306J2ZQ
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">RBI Code</p>
                      <p className="font-semibold text-primary-dark">951335</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Quick answers to common questions about our services
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection
                key={i}
                animation="fade-up"
                delay={300 + i * 100}
              >
                <FAQItem question={faq.question} answer={faq.answer} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-dark to-gray-900 py-16 md:py-20">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                Prefer to Talk Directly?
              </h2>
              <p className="text-lg text-white mb-8">
                Our team is available during business hours to answer your
                questions and discuss how we can help your business thrive.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="tel:+919819082799"
                  className="py-4 px-8 bg-white text-primary-dark text-base font-heading rounded-full hover:bg-primary-light transition-all shadow-xl inline-flex items-center gap-2"
                >
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
                  </svg>
                  Call Now
                </a>
                {/* <a
                  href="https://www.pmcllp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-8 border-2 border-white text-white text-base font-heading rounded-full hover:bg-white hover:text-primary-dark transition-all inline-flex items-center gap-2"
                >
                  Visit Website
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a> */}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

// FAQ Item Component with Accordion
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-light-bg rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden border border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white transition-colors"
      >
        <h4 className="text-lg font-heading font-bold text-gray-900 pr-4">
          {question}
        </h4>
        <svg
          className={`w-6 h-6 text-primary-dark flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
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
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-5 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed pt-4">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
