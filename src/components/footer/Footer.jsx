import React from "react";
import Wrapper from "../HOC/Wrapper";
import { PhoneIcon } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightArrowLeft,
  faArrowRightLong,
  faEnvelope,
  faLocation,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const information = [
  {
    name: "My Account",
  },
  {
    name: "Login",
  },
  {
    name: "My Cart",
  },
  {
    name: "My Wishlist",
  },
  {
    name: "Checkout",
  },
];

const services = [
  {
    name: "About Us",
  },
  {
    name: "Careers",
  },
  {
    name: "Delivery Information",
  },
  {
    name: "Privacy Policy",
  },
  {
    name: "Terms and Conditions",
  },
];

const Footer = () => {
  return (
    <div className="bg-black min-h-[100px] py-10">
      <Wrapper>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="logo w-[100px]">
              <img src="/images/logo-white.png" />
            </div>
            <ul className="text-white flex flex-col gap-3 mt-8  opacity-90">
              <li className="flex gap-1 text-normal">
                <span>
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span>(704) 555-0127</span>
              </li>
              <li className="flex gap-1 text-normal">
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span>krist@example.com</span>
              </li>
              <li className="flex gap-1 text-normal">
                <span>
                  <FontAwesomeIcon icon={faLocationPin} />
                </span>
                <span className="max-w-[30ch]">
                  3891 Ranchview Dr. Richardson, California 62639
                </span>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <h2 className="mb-3 font-bold text-lg">Information</h2>
            <ul className="text-white opacity-90 flex flex-col gap-3">
              {information.map((info) => (
                <li className="flex gap-1 text-normal">
                  <span>{info.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-white">
            <h2 className="mb-3  font-bold text-lg">Services</h2>
            <ul className="text-white opacity-90 flex flex-col gap-3">
              {services.map((info) => (
                <li className="flex gap-1 text-normal">
                  <span>{info.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-white">
            <h2 className="mb-3  font-bold text-lg">Subscribe</h2>
            <p className="max-w-[30ch] opacity-90">
              Enter your email below to be the first to know about new
              collection and product launches
            </p>
            <form
              action="#"
              className="border-2 border-white py-2 px-4 rounded-md mt-5"
            >
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faEnvelope} />
                <input
                  type="text"
                  className="bg-transparent outline-none text-white"
                  placeholder="Your Email"
                />
                <button className="ml-auto">
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
