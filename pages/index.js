// create an index component for the index page
import Layout from "../components/MyLayout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { ListGroup, Spinner } from "react-bootstrap";
import React, { useState } from "react";

// create a link style
const linkStyle = {
  margin: "5%",
  textDecoration: "none",
  fontSize: "x-large",
  color: "white",
  justifyContent: "center",
};

// declare an index component
const Index = (props) => {
  // track the loading index state
  const [loadingIndex, setLoadingIndex] = useState(null);

  // declare a link click handler
  const handleLinkClick = (index) => {
    // set the loading index state to the clicked link's index
    setLoadingIndex(index);
  };

  // render the component
  return (
    <Layout>
      <h1>Star Wars Films</h1>
      {/* create a list group to render the links in */}
      <ListGroup variant="flush" style={{ width: "35rem" }} className="m-auto">
        {/* map each film, by index as this is how the API works */}
        {props.films.map((film, index) => (
          <ListGroup.Item
            // the API does not use zero-indexing, so add 1 to index
            key={index + 1}
            className="bg-dark text-center m-1"
            action
            // call the handleLinkClick function with the item's relevant index
            onClick={() => handleLinkClick(index)}
          >
            <Link
              as={`/f/${index + 1}`}
              href={`/film?id=${index + 1}`}
              style={linkStyle}
            >
              {/* if the loading index is the same as the index of the link
                    that was clicked - render a spinner component in place of
                    the film title */}
              {loadingIndex === index ? (
                <Spinner animation="border" size="lg" />
              ) : (
                // otherwise render the film title
                film.title
              )}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Layout>
  );
};

// get index initial props
Index.getInitialProps = async () => {
  // get all films
  const res = await fetch("https://swapi.dev/api/films/");
  const data = await res.json();
  // return all films
  return {
    films: data.results,
  };
};

export default Index;
