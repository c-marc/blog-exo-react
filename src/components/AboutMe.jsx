import ItemDescription from "./ItemDescription";
import ItemPicture from "./ItemPicture";
import ItemTitle from "./ItemTitle";

import image from "../assets/placeholder.jpg";

const AboutMe = () => {
  return (
    <div className="about-me">
      <ItemTitle title="About Me" />

      <ItemPicture img={{ src: image, alt: "test" }} />

      <ItemDescription text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dicta mollitia saepe a necessitatibus blanditiis praesentium incidunt magni? Impedit velit neque dicta magni dolorum perspiciatis possimus nulla voluptate, modi eum?" />
    </div>
  );
};

export default AboutMe;
