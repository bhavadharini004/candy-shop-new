import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section>
      <header>
        <h1 className="welcome-heading">Welcome to CandyShop</h1>
        <p>Your Path to Success Begins Here</p>
      </header>
      <section className="about">
        <h2>About Us</h2>
      <p >&nbsp;CANDY SHOP means a building used for producing, mixing, compounding, cooling or otherwise preparing confectionery products, including, without limiting the generality thereof, chocolate or candy, and where such prepared confectionery products are offered for retail sale therefrom.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      <section className="programs">
        <h2>Programs</h2>
        <p>
          Explore our wide range of programs, from arts and sciences to engineering and more.
        </p>
        <button>View Programs</button>
      </section>

      <section className="admissions">
        <h2>Admissions</h2>
        <p>
          Learn how to apply, admission requirements, and important deadlines.
        </p>
        <button>Admission Information</button>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          Have questions or need assistance? Contact our support team.
        </p>
        <button>Contact Us</button>
      </section>
      </section>
    </div>
  );
};

export default Home;
