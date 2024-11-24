import Hero1200 from "../../assets/img/banner/hero-1200.png";
import Hero838 from "../../assets/img/banner/hero-838.png";
import Hero300 from "../../assets/img/banner/hero-300.png";

const Banner = () => {
  return (
    <section id="hero">
      <picture>
        <source srcset={Hero1200} media="(min-width: 839px)" />
        <source srcset={Hero838} media="(min-width: 301px)" />
        <img src={Hero300} alt="" />
      </picture>
    </section>
  );
};

export default Banner;
