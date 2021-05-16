import React from "react";
import stevenPhoto from "../assets/about-images/steven-photo.jpg";
import kavithaPhoto from "../assets/about-images/kavitha-photo.jpg";
import joeyPhoto from "../assets/about-images/professional-joey-photo.jpg";

const AboutTeam = () => {
  return (
    <div style={{ margin: "2rem" }} className='aboutTeam'>
      <h1 style={{ textAlign: "center" }}>About the Team</h1>
      <div className='about-container'>
        <h2>Hsueh Yen Neo</h2>
        <span className="neo-about">
          <p>
            Dolore ad ea velit commodo et quis elit dolor proident qui do.
            Pariatur ipsum Lorem eiusmod non ut eu anim. Esse exercitation
            incididunt culpa nisi nulla qui anim anim. Ea ut sit minim sint
            dolore. Veniam aliquip incididunt adipisicing anim excepteur velit
            fugiat aliquip commodo ut dolor adipisicing magna id.
          </p>
          <img src="https://via.placeholder.com/300.jpg" alt="Placeholder" />
        </span>
      </div>

      <div className='about-container'>
        <h2>Kavitha Krishnamurthy</h2>
        <span className="kavitha-about">
          <p>
            I live in Chennai, TamilNadu and I'm driven by my passion to build
            and create something that will have an enduring impact on society. I
            believe that we are not remembered by the amount of money we have
            made but rather by the lives we have changed in the process.This
            website is a passion project of mine, developed with the aim of
            creating awareness and diagnosing color blindness and hearing
            problems among the people of India and my sincere thanks to NGO
            name, Hsueh Yen Neo, Steven McDonald and Joey Bruno for making this
            possible.
          </p>
          <img
            src={kavithaPhoto}
            alt="Kavitha Krishnamurthy"
            width="300"
            height="300"
          />
        </span>
      </div>
      <div className='about-container'>
        <h2>Steven McDonald</h2>
        <span className="steven-about">
          <p>
            I am a software engineer and a recent graduate of Cornell University,
            living in the Bay Area, California. I was drawn to this project by the
            chance to use my programming skills to help people and have a positive
            impact on the world.
          </p>
          <img
            src={stevenPhoto}
            alt="Steven McDonald"
            width="300"
            height="300"
          />
        </span>
      </div>

      <div className='about-container'>
        <h2>Joey Bruno</h2>
        <span className="joey-about">
          <p>
            I am a Teaching Assistant for an online Digital Marketing class with
            Vanderbilt University, living in Nashville, Tennessee. I wanted to
            join the project in order to help people, by using my mixed skills
            of graphic design and web development to help assist in the
            designing of the website itself.
          </p>
          <img src={joeyPhoto} alt="Joey Bruno" width="300" height="300" />
        </span>
      </div>

      <div style={{marginTop: '2rem'}}>
        <h2>How We Got Together</h2>
        <p>
          The internet is a place where anyone can meet anyone else from around
          the world. That was how our team formed, four people from different
          corners of the globe united by a common goal of making something for
          those in need. When we started we had no goal, just the knowledge that
          when people with good intentions come together, good things will
          happen and just like the internet brought us together, it has given us
          the chance to help people living in places that we may never visit. We
          decided to design a website and give it to an NGO, so that while
          conducting health camps across India, they can use it as web based
          tool for for diagnosing color blindness and hearing problems. From all
          four of us, this website is our small contribution to society.
        </p>
      </div>
    </div>
  );
};

export default AboutTeam;
