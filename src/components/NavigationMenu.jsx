import Link from "./Link";

const NavigationMenu = () => {
  return (
    <nav>
      <div>
        <Link text="Link1" href="#"></Link>
        <Link text="Link2" href="#"></Link>
        <Link text="Link3" href="#"></Link>
      </div>
      <Link text="Link4" href="#"></Link>
    </nav>
  );
};

export default NavigationMenu;
