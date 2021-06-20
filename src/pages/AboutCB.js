import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import cbContents from "data/cbContents";
import Section from "components/Section";
import "../App.css";

const AboutCB = () => {
  return (
    <div className="main" style={{ margin: "2rem" }}>
      <div className="header-container">
        <h1 style={{ marginBottom: "1rem" }}>About Color Blindness</h1>
      </div>

      <div className="content-section">
        <Grid container>
          {cbContents
            .filter((content) => content.filter === "about")
            .map((info, i) => (
              <div className="gridThree-2x1" key={"about"+i}>
                <Grid item md={12}>
                  <Section
                    key={i}
                    className="about-sectionCB section-description"
                    title={info.title}
                    description={info.infos}
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
          {cbContents
            .filter((content) => content.filter === "types")
            .map((info, i) => (
              <div className="gridFour-2x1" style={{ gridGap: "2rem" }} key={"types"+i}>
                <Grid item md={12}>
                  <img
                    className="types-imageCB about-img"
                    src={info.image}
                    alt={info.altImage}
                    style={{transform: "scale(.9)"}}
                  />
                </Grid>
                <Grid item md={8}>
                  <Section
                    key={i}
                    className="types-sectionCB"
                    title={info.title}
                    description={info.infos}
                  />
                </Grid>

              </div>
            ))}
        </Grid>
      </div>

      <div className="content-section">
        <Grid container>
          {cbContents
            .filter((content) => content.filter === "test")
            .map((info, i) => (
              <div className="gridThree-2x1" key={"test"+i}>
                <Grid item lg={12}>
                  <Section
                    key={i}
                    className="test-sectionCB"
                    title={info.title}
                    description={info.infos}
                  />
                </Grid>
                <Grid item lg={4} md={4}>
                  <img
                    className="test-imageCB about-img"
                    src={info.image}
                    alt={info.altImage}
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

export default AboutCB;
