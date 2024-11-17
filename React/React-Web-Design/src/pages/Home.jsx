import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import PopularPrints from "../components/PopularPrints";
import Collection from "../components/Collection";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Header />
      <Banner />
      <PopularPrints />
      <Collection />
      <Footer />
    </>
  );
}

export default Home;
