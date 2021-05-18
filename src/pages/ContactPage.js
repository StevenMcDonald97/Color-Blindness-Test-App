import React from "react";
import { Container } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  return (
    <Container maxWidth="lg" style={{ justifyContent: "center" }}>
      <h1 style={{ fontSize: "4rem" }}>Contact Us</h1>
      <br />
      <h2 style={{ fontSize: "8rem", fontWeight: "100" }}>
        <FontAwesomeIcon icon={faTools} /> In Construction{" "}
      </h2>
    </Container>
  );
};

export default ContactPage;