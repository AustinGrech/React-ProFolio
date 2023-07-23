import React from 'react';
import itsMe from '../../assets/small/portraits/ItsMe.jpg'

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img
            style={{
              width: "135px",
              height: "135px",
              borderRadius: "50%",
            }}
            src={itsMe}
            alt="Official headshot of Austin Grech"
          />
        </div>
        <p>
        Hello all I am Austin Grech! I am 25 years old blessed with three children who motivate me to do my absolute best in life.
        </p>
        <p>
        I have always had a love for programming, coming back to it through the years from the age of 12 to now! having my first child early has pushed that off for quite some time but now I have the support required to pursue it as a career. I am pushing on with a positive mindset every day to make sure my career path is successful. I plan on pursuing my passion to make sure my family gets to live their best life.
        </p>
      </div>
    </section>
  );
}

export default About;
