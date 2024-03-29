import React from "react";
import PropTypes from "prop-types";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { Link as A } from "react-router-dom";
import { RevealLeft, RevealRight } from "./Reveal";

const Banner = () => {
  return (
    <header
      className="min-h-[70vh] lg:min-h-[0vh] xl:min-h-[100vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-col lg:items-center lg:gap-x-12">
          <div className="flex flex-col justify-center items-center text-center font-secondary">
            <RevealRight>
              {/* Title */}
              <h1
                id="title1"
                className="text-gradient animate-gradient text-[46px] font-bold leading-[0.8] lg:text-[80px] my-16 lg:my-5 drop-shadow-3xl"
              >
                CreScencE
              </h1>
            </RevealRight>
            <RevealLeft>
              {/* Subtitle with typing animation */}
              <div
                id="title2"
                className="text-[42px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]"
              >
                <span className="text-white mr-4">
                  Welcome <br></br>to
                </span>
                <TypeAnimation
                  sequence={[
                    "Events.",
                    2000,
                    "Workshops.",
                    2000,
                    "Culturals.",
                    2000,
                    "Flash Mobs.",
                    2000,
                  ]}
                  speed={50}
                  className="text-accent"
                  wrapper="span"
                  repeat={Infinity}
                />
              </div>
            </RevealLeft>
            {/* Description */}
            <p id="title3" className="mb-8 max-w-lg mx-auto lg:mx-0">
              Beyond the limits.....
            </p>
            {/* Links */}
            <div
              id="title4"
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link
                className="btn btn-lg hover:-translate-y-1 hover:scale-110"
                to="events"
                smooth={true}
              >
                Go to Events
              </Link>
              <A
                className="text-gradient btn-link drop-shadow-xl cursor-pointer"
                to="/contact"
                smooth={true}
              >
                Contact Us
              </A>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Banner.propTypes = {};

export default Banner;