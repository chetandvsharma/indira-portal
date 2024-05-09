import Feed from "@components/Feed";
import expressApp from '../express/app.js';

// const handler = expressApp.getRequestHandler();

const Home = () => {
  return (
    <section
      className="w-full flex-center 
    flex-col"
    >
      <h1 className="head_text text-center">
        Trade Faster and Smarter with
        <br />
        {/* <br className="max-md:hidden" /> */}
        <span className="blue_green_gradient text-center">INDIRA SECURITIES</span>
      </h1>
      <p className="desc text-center">
        Indira Securities is one of the leading stock brokers with a strong
        focus on building technological solutions to offer fast, reliable and
        easy-to-use trading platform for clients.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
