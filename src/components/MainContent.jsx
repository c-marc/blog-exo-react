import Item from "./Item";

import image from "../assets/placeholder.jpg";

const img = { src: image, alt: "test" };
const desc =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laborum consequuntur obcaecati, voluptates explicabo qui magni ex quam quo aspernatur modi voluptate minima sequi ut sint nisi sit delectus? Accusamus?";

const MainContent = () => {
  return (
    <main>
      <Item
        title="Title 1"
        subtitle="Subtitle"
        img={img}
        description={desc}
      ></Item>

      <Item
        title="Title 2"
        subtitle="Subtitle"
        img={img}
        description={desc}
      ></Item>
    </main>
  );
};

export default MainContent;
