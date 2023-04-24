import ItemTitle from "./ItemTitle";
import ItemSubtitle from "./ItemSubtitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

const Item = ({ title, subtitle, img, description }) => {
  return (
    <div className="item">
      <ItemTitle title={title} />
      <ItemSubtitle title={subtitle} />
      <ItemPicture img={img} />
      <ItemDescription text={description} />
    </div>
  );
};

export default Item;
