import React from "react";
import popart from "../../assets/img/collections/pop-art.jpg";
import abstract from "../../assets/img/collections/abstract.jpg";
import vivid from "../../assets/img/collections/vivid.jpg";
import music from "../../assets/img/collections/music.jpg";
import vehicles from "../../assets/img/collections/vehicles.jpg";
import landscape from "../../assets/img/collections/landscape.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Collection() {
  return (
    <section id="collections">
      <h2>Collections</h2>
      <ul>
        <li
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <figure class="color7">
            <img src={popart} alt="Pop Art: This must be the place" />
            <figcaption>
              <a href="#">Pop art</a>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure class="color2">
            <img src={abstract} alt="abstract: This must be the place" />
            <figcaption>
              <a href="#">Abstract</a>
            </figcaption>
          </figure>
        </li>
        <li data-aos="fade-left" data-aos-offset="500">
          <figure class="color6">
            <img src={vivid} alt="Vivid: This must be the place" />
            <figcaption>
              <a href="#">Vivid</a>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure class="color8">
            <img src={music} alt="Music: This must be the place" />
            <figcaption>
              <a href="#">Music</a>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure class="color4">
            <img src={vehicles} alt="vehicles.jpg: This must be the place" />
            <figcaption>
              <a href="#">Vehicles</a>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure class="color3">
            <img src={landscape} alt="Landscape Art: This must be the place" />
            <figcaption>
              <a href="#">Landscape</a>
            </figcaption>
          </figure>
        </li>
      </ul>
      <div className="container">
        <li>
          <Button variant="primary">Primary</Button>
        </li>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}

export default Collection;
