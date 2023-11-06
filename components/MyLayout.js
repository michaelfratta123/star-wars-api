// create a layout component
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

const Layout = (props) => (
  <div>
    {/* add a custom favicon to prevent console error */}
    <Head>
      <link rel="icon" href="/static/images/favicon.ico" />
    </Head>
    {/* show header on all pages */}
    <Header />
    {/* render child components */}
    {props.children}
    {/* add global styled-jsx */}
    <style global jsx>
      {`
        /* import custom font */
        @font-face {
          font-family: "StarWarsFont";
          src: local("StarWarsFont"),
            url("../static/fonts/StarWarsFont.ttf") format("truetype");
        }

        /* apply custom font and a gray background to the entire app */
        body {
          background-color: gray;
          font-family: "StarWarsFont", sans-serif;
        }

        img {
          width: 45%;
          display: flex;
          justify-content: center;
          margin: auto;
          padding: 2%;
        }

        p {
          display: flex;
          justify-content: center;
          margin-right: 10%;
          margin-left: 10%;
        }

        h1 {
          display: flex;
          justify-content: center;
          margin: auto;
          padding: 5%;
        }
      `}
    </style>
  </div>
);

export default Layout;
