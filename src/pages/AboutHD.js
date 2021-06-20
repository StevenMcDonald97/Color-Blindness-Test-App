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
              <div className="gridThree-2x1" key={"about"+i}>
                <Grid item md={12}>
                  <Section
                    key={i}
                    title={info.title}
                    description={info.infos}
                    className="about-sectionCB section-description"
                  />
                </Grid>
                <Grid item md={10}>
                  <img
                    className="about-imageCB about-img"
                    src={info.image}
                    alt={info.altImage}
                  />
                </Grid>
              </div>
            ))}
        </Grid>
      </div>

      <div className="content-section">
        <Grid container>
          {hdContents
            .filter((content) => content.filter === "types")
            .map((info, i) => (
              <div className="gridFour-2x1" style={{ gridGap: "10rem" }} key={"types"+i}>
                <Grid item md={12}>
                  <img
                    className="types-imageHD about-img"
                    src={info.image}
                    alt={info.altImage}
                  />
                </Grid>
                <Grid item md={10}>
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
        <Grid container>
          {hdContents
            .filter((content) => content.filter === "test")
            .map((info, i) => (
              <div className="gridThree-2x1" key={"test"+i}>
                <Grid item lg={12}>
                  <Section
                    key={i}
                    title={info.title}
                    description={info.infos}
                    className="test-sectionHD"
                  />
                </Grid>
                <Grid item lg={4} md={4}>
                  <img
                    className="test-imageHD about-img"
                    src={info.image}
                    alt={info.altImage}
                  />
                </Grid>
              </div>
            ))}
        </Grid>
      </div>
      <div className="content-section">
        <Grid container>
          {hdContents
            .filter((content) => content.filter === "pitch-test")
            .map((info, i) => (
              <div className="gridFour-2x1" key={"pitch-test"+i}>
                <Grid item lg={4} md={4}>
                  <img
                    className="pitch-test-imageHD about-img"
                    src={info.image}
                    alt={info.altImage}
                  />
                </Grid>
                <Grid item lg={12}>
                  <Section
                    key={i}
                    title={info.title}
                    description={info.infos}
                    className="pitch-test-sectionHD"
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
