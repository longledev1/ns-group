const Section = ({ children, className = "" }) => (
  // Responsive khoảng cách giữa các section: Mobile 60px, Tablet 100px, Desktop 160px
  <section className={`mt-[60px] md:mt-[100px] lg:mt-[160px] ${className}`}>
    {children}
  </section>
);
export default Section;
