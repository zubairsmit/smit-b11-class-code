import forkitup from "../../assets/img/popular/fork-it-up.jpg";
import eyeing from "../../assets/img/popular/eyeing-you.jpg";
import letsscoot from "../../assets/img/popular/lets-scoot.jpg";
function PopularPrints() {
  return (
    <div className="stripe">
      <section id="popular">
        <h2>Popular Prints</h2>
        <ul>
          <li className="wow animate__animated  animate__fadeInLeft">
            <figure className="color8">
              <img src={forkitup} alt="Pop Fork It Up" />
              <figcaption>
                <a href="#">Fork It Up</a>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure className="color7 wow animate__animated animate__fadeInUp ">
              <img src={eyeing} alt="Eyeing You" />
              <figcaption>
                <a href="#">Eyeing You</a>
              </figcaption>
            </figure>
          </li>
          <li className="tablet-card-3 wow animate__animated  animate__fadeInRight">
            <figure className="color4">
              <img src={letsscoot} alt="lets-scoot" />
              <figcaption>
                <a href="#">Lets Scoot</a>
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default PopularPrints;
