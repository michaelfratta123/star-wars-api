// create a film component for the film page
import Layout from "../components/MyLayout.js";
import fetch from "isomorphic-unfetch";

// declare a film component
const Film = (props) => (
  <Layout>
    {/* get the film title from props */}
    <h1>{props.film.title}</h1>
    {/* get the opening_crawl from props and use as description
        add regex to replace special characters */}
    <p>{props.film.opening_crawl.replace(/<[/]?p>/g, "")}</p>
    {/* conditionally render relevant image based on film title */}
    <img src={`/static/images/${props.film.title}.jpg`} />
  </Layout>
);

// get film initial props
Film.getInitialProps = async (context) => {
  // get the id from context.query (href from index.js)
  const { id } = context.query;
  // point URL to relevant endpoint for API
  const res = await fetch(`https://swapi.dev/api/films/${id}`);
  const film = await res.json();
  // return the film
  return { film };
};

export default Film;
