import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { RevealLeft, RevealRight } from "./Reveal";

const aboutlst = [
  {
    name: "TechNova",
    description:
      "Welcome to TechNova, where innovation meets exploration! Immerse yourself in the latest advancements in Gen AI, coding, and prompt engineering. Engage with young innovators and tech experts, showcase your tech prowess, and compete in thrilling challenges. Join us for a stellar journey into the future of technology at TechNova!",
  },
  {
    name: "Haunted-Estate",
    description:
      "Welcome to the haunted estate, where shadows dance to the eerie melody of the wind and whispers echo through its decrepit halls. Brace yourself for a chilling journey into the heart of darkness, where every step may lead you closer to unraveling its sinister secrets... or closer to your own demise.",
  },
  {
    name: "GenerAIze",
    description:
      "GenerAIze is a concept that involves the application of artificial intelligence (AI) to generalize information or skills to adapt to real-world environments or new situations. This process allows AI systems to draw general conclusions or principles from specific instances, enabling them to extend their knowledge beyond what they have been explicitly trained on. ",
  },
];

const About = () => {
  return (
    <section className="section  xl:min-h-[90vh]" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-20 lg:flex-row justify-between items-start">
          <RevealRight>
            <div id="about1">
              <h2 className="h2 text-accent mb-8">About COllege</h2>
              <p className="max-w-[455px]">
                JNTUH University College of Engineering Jagtial (JNTUHUCEJ) was established in the year 2007 as a constituent college of Jawaharlal Nehru Technological University Hyderabad. The college is recognized by UGC under Section 2(f) & 12 (B) of the UGC Act, 1956.JNTUHCEJ started functioning with five Under Graduate Programs viz., EEE, ECE, CSE, IT &ME with intake of 60 in each program. Students take admissions to UG programs through EAMCET only. Since 2011, the college is offering five Post Graduate Programs viz., EPS in EEE, ED in ME, DSCE in ECE, CSE and IT with an intake of 18in each PG branch.
              </p><br />

              <h2 className="h2 text-accent mb-8">About Department</h2>
              <p className="max-w-[455px]">
                The Department of Computer Science and Engineering was established in the year 2007 with an intake of 60 students in B.Tech program and 18 students in M.Tech program in the year 2012. The Department has state of the art infrastructure and computing equipment supported by high speed internet and wireless networks.The Department has been maintaining high standards in imparting quality education in Computer Science
              </p><br />

              <h2 className="h2 text-accent mb-8">About CreScencE</h2>
              
              <p className="max-w-[455px]">
                CreSencE, the largest student led college fest in Jagtial, is a two-day National level Technical Symposium initiated in 2007. Organized by the Department of Computer Science and Engineering at Jawaharlal Nehru Technological University Hyderabad, University College of Engineering, Jagtial, CreSencE sets a standard for excellence in hosting both Technical and non-Technical Events, drawing in thousands of participants with its vibrant atmosphere of delight.
              </p>
              {/* <a
                href="https://jntugv.edu.in/"
                target="_blank_"
                className="btn btn-sm my-9"
              >
                About College
              </a> */}
            </div>
          </RevealRight>
          <RevealLeft>
            <div id="about2">
              <div>
                {aboutlst.map((ab, index) => {
                  const { name, description } = ab;
                  return (
                    <div
                      className="border-b border-white/20  ] mb-[38px] flex justify center"
                      key={index}
                    >
                      <div className="max-w-[476px]">
                        <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                          {name}
                        </h4>
                        <p className="font-secondary leading-tight" style={{ lineHeight: '2' }}>
                          {description}
                        </p>
                      </div>
                      <div className="flex flex-col flex-1 items-end">
                        <div className="btn w-9 h-9 mb-[35px] flex justify-center items-center">
                          <BsArrowUpRight />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </RevealLeft>
        </div>
      </div>
    </section>
  );
};

export default About;
