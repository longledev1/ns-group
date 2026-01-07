import HomeHeroContent from "./HomeHero";
import AboutHeroContent from "./AboutHero";
export const Hero = ({ image, layout = "home", title, subtitle }) => {
  return (
    <section className="relative w-full overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {layout === "home" && (
        <>
          <div className="absolute inset-0 bg-black/30" />
          <HomeHeroContent title={title} subtitle={subtitle} />
        </>
      )}

      {layout === "about" && (
        <>
          <div className="absolute inset-0 bg-[#1C1C1A]" />
          <AboutHeroContent title={title} subtitle={subtitle} />
        </>
      )}
    </section>
  );
};
