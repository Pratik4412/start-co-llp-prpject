const AnimatedSection = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 900,
  className = "",
}) => {
  return (
    <div
      data-aos={animation}
      data-aos-delay={delay}
      data-aos-duration={duration}
      className={className}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
