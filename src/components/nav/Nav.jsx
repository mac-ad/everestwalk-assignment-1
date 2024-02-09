import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const navItems = [
  {
    name: "home",
    icon: "faCart",
    href: "#",
  },
  {
    name: "shop",
    icon: "faCart",
    href: "#",
  },
  {
    name: "our story",
    icon: "faCart",
    href: "#",
  },
  {
    name: "blog",
    icon: "faCart",
    href: "#",
  },
  {
    name: "contact us",
    icon: "faCart",
    href: "#",
  },
];

const Nav = () => {
  return (
    <div className="flex justify-between min-h-[70px] items-center">
      <div className="logo font-bold text-2xl w-[100px]"></div>
      <ul className="hidden md:block md:gap-8 md:flex ">
        {navItems.map((item) => (
          <Link
            className="capitalize opacity-70 hover:opacity-100"
            key={item.name}
            to={item.href}
          >
            {item.name}
          </Link>
        ))}
      </ul>
      <Link
        to="/cart"
        className="border flex justify-center items-center gap-2 capitalize px-5 py-2 rounded-md hover:bg-black hover:text-white transition-all"
      >
        <FontAwesomeIcon icon={faCartShopping} />
        <p>cart</p>
      </Link>
    </div>
  );
};

export default Nav;
