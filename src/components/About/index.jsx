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
        Greetings! I'm Austin Grech, a dedicated software enthusiast with a boundless passion for programming. At 25 years old, I find myself both fortunate and motivated, blessed with the inspiration of three wonderful children who ignite my drive to excel in all facets of life.
        </p>
        <p>
          My journey with programming began at the tender age of 12, sparking a love affair that has persisted throughout the years. Although early parenthood temporarily shifted my focus, the flame of curiosity never wavered. Now, armed with the necessary support, I am wholeheartedly embracing my long-standing passion as a potential career path.
        </p>
        <p>
        Each day, I approach my goals with unwavering positivity and an unyielding commitment to success. As I embark on this transformative journey into the world of software development, I am determined to harness my skills and dedication to craft exceptional solutions and contribute meaningfully to this dynamic field.
        </p>
        <p>
        My ultimate aspiration is not just personal growth, but to pave the way for my family to experience the best life possible. Through dedication, hard work, and a continuous pursuit of knowledge, I am resolute in my mission to turn my passion into a fulfilling and impactful career in software development.
        </p>
        <p>
        Join me as I navigate this exciting path of innovation, where my programming skills are not just a means to an end, but a gateway to a brighter future for my loved ones and myself. Let's collaborate and create something extraordinary together.
        </p>
      </div>
    </section>
  );
}

export default About;
