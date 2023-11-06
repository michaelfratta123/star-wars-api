// create a header component
import React, { useState } from "react";
import Link from "next/link";
import { Spinner } from "react-bootstrap";
import { useRouter } from "next/router";

// add link style
const linkStyle = {
  marginRight: 15,
  color: "white",
  textDecoration: "none",
  fontSize: "x-large",
};

// declare header component
const Header = () => {
  // track loading state
  const [loading, setLoading] = useState(false);
  // use router to track current page
  const router = useRouter();

  // declare a link click handler
  const handleLinkClick = () => {
    // if the current page is not the homepage
    if (router.pathname !== "/") {
      // set the loading state to true
      setLoading(true);
    }
  };

  // render the component
  return (
    <div className="m-3 bg-dark text-light p-3">
      {/* trigger handleLinkClick onClick */}
      <Link href="/" style={linkStyle} onClick={handleLinkClick}>
        {/* if loading is true and the current page is not the homepage
            show the spinner component in place of the Home text */}
        {loading && router.pathname !== "/" ? (
          <>
            <Spinner
              as="span"
              animation="border"
              size="lg"
              role="status"
              aria-hidden="true"
            />
            <span className="m-3">
              Going back home, this may take a while...
            </span>
          </>
        ) : (
          // otherwise show the Home text
          "Home"
        )}
      </Link>
    </div>
  );
};

export default Header;
