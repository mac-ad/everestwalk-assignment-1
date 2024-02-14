import {
  faBagShopping,
  faCartPlus,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cart";
import Wrapper from "../HOC/Wrapper";
import SearchComp from "../searchComp/SearchComp";
import { Button } from "@mui/material";
import { HeartIcon } from "lucide-react";

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
    <div className="px-1 bg-white">
      <Wrapper>
        <div className="flex min-h-[70px] items-center justify-between ">
          <Link to="/">
            <div className="logo font-bold text-2xl w-[100px] ml-[-15px]">
              <img src="/images/logo.png" />
            </div>
          </Link>
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
          <div className="flex items-center gap-2">
            <Link
              to="/cart"
              className="relative flex justify-center items-center gap-2 capitalize px-5 py-2 rounded-md  transition-all "
            >
              <FontAwesomeIcon icon={faBagShopping} />
              <span className="absolute left-[0px] bottom-[-5px]  h-[25px] w-[25px] border flex justify-center items-center rounded-full p-2 bg-black text-white font-semibold">
                {totalItems}
              </span>
            </Link>
            <Link to="#">
              <HeartIcon />
            </Link>
            <Button
              style={{
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,.6)",
                },
                width: "100%",
                padding: ".5em 1em",
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Nav;
