import React from "react";
import Img2 from "../assets/Images/genAI.avif";
import { Reveal, RevealLeft } from "./Reveal";
import { Link } from "react-router-dom";

const Events = (props) => {
  return (
    <section className="section  xl:min-h-[100vh]" id="events">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            <Reveal>
              <div
                id="workshop3"
                className="flex flex-col justify-center items-center"
              >
                <h2 className="text-4xl text-gradient max-w-sm mb-8 mx-auto lg:mx-0">Workshop</h2>
                {/* <p className="h3 leading-light text-accent">
                  Tech ,Nontech & Cultural
                </p> */}
                <p className="max-w-sm mb-4">
                  Entry Fee - 600/-<br></br>
                  Entry Fee + Accomodation(@2days) - 700/-<br></br>
                  <p className="text-gradient">Note:</p> 
                  Food Charges are not included in the Accommodation. Tokens Will be provided for food at minimal cost in the Campus
                </p>
                {/* <a
                  href="https://forms.gle/EEbmXa2U1yipcgVp7"
                  target="blank"
                  className="btn btn-sm"
                >
                  Book Slot
                </a> */}
              </div>
            </Reveal>
            
          </div>
          <RevealLeft>
            <Link to="/workshops/Generative-Ai-Workshop">
              <div
                id="workshop2"
                className="flex-1 flex-col lg:w-[565px] lg:h-[490px]"
              >
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:w-[565px] h-[320px]">
                  
                  <div className="bg-black/70 w-full absolute z-40 transition-all duration-300"></div>
                  <img
                    className="scale-125 transition-all duration-500 lg:w-[565px]"
                    src={Img2}
                    alt=""
                  ></img>
                  <div className="absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-40">
                    <span className="text-gradient text-2xl">Generative Ai</span>
                  </div>
                  <div className="absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-40">
                    <span className="text-2xl text-yellow-300">15<sup>th</sup> April and 16<sup>th</sup> April 2024</span>
                  </div>
                </div>
              </div>
            </Link>
          </RevealLeft>
        </div>
      </div>
    </section>
  );
};

export default Events;
