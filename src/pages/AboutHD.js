import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import hdContents from "data/hdContents";
import Section from "components/Section";
import "../App.css";

const AboutHD = () => {
  return (
    <div className="main" style={{ margin: "2rem" }}>
      <div className="header-container">
        <h1 style={{ marginBottom: "2rem" }}>About Hearing Disability</h1>
      </div>

      <div className="content-section">
        <Grid container>
          {hdContents
            .filter((content) => content.filter === "about")
            .map((info, i) => (
              <div className="gridThree-2x1">
                <Grid item md={12}>
                  <Section
                    key={i}
                    title={info.title}
                    description={info.infos}
                    className="about-sectionHD section-description"
                  />
                </Grid>
                <Grid item md={10}>
                  <img
                    className="about-imageHD"
                    src={info.image}
                    alt={info.altImage}
                  />
                </Grid>
              </div>
            ))}
        </Grid>
      </div>

      <div className="content-section">
        <Grid container style={{ margin: "0 4rem" }}>
          {hdContents
            .filter((content) => content.filter === "types")
            .map((info, i) => (
              <div className="gridFour-2x1">
                <Grid item md={10}>
                  <img
                    className="types-imageHD"
                    src={info.image}
                    alt={info.altImage}
                  />
                </Grid>
                <Grid item md={12}>
                  <Section
                    key={i}
                    title={info.title}
                    description={info.infos}
                    className="types-sectionHD"
                  />
                </Grid>
              </div>
            ))}
        </Grid>
      </div>

      <div className="content-section">
        <Grid container style={{ margin: "0 4rem" }}>
          {hdContents
            .filter((content) => content.filter === "test")
            .map((info, i) => (
              <div className="gridFour-2x1">
                <Grid item md={8}>
                  <img
                    className="test-imageHD"
                    src={info.image}
                    alt={info.altImage}
                  />
                </Grid>
                <Grid item md={12}>
                  <Section
                    key={i}
                    title={info.title}
                    description={info.infos}
                    className="test-sectionHD"
                  />
                </Grid>
              </div>
            ))}
        </Grid>
      </div>
      
      <Link to="/tests" className="test-link">
        Take the Test
      </Link>
    </div>
  );
};

export default AboutHD;
