import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cart";
import Wrapper from "../HOC/Wrapper";
import SearchComp from "../searchComp/SearchComp";

const navItems = [
  {
    name: "home",
    icon: "faCart",
    href: "/",
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
  const totalItems = useCartStore((state) => state.totalItems);

  return (
    <div className=" fixed top-0 w-full z-10 px-1 bg-white">
      <Wrapper>
        <div className="flex min-h-[70px] items-center justify-between ">
          {/* <div className="logo font-bold text-2xl w-[100px]"></div> */}
          <ul className="hidden md:block md:gap-8 md:flex ">
            {navItems?.map((item) => (
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
            className="relative border flex justify-center items-center gap-2 capitalize px-5 py-2 rounded-md hover:bg-black hover:text-white transition-all"
          >
            <FontAwesomeIcon icon={faCartShopping} />
            <p>cart</p>
            <span className=" left-[-10px] bottom-[-10px] items-count h-[25px] w-[25px] border flex justify-center items-center rounded-full p-2 bg-black text-white font-semibold">
              {totalItems}
            </span>
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Nav;
