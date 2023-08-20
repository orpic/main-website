import { useState } from "react";
import { images } from "../assets/images";

const skillsListAtomTop = [
  "Typescript",
  "Javascript",
  "React JS",
  "Next JS",
  "Express",
  "Node",
  "CSS",
  "CSS Modules",
  "Tailwind",
  "Nx - Monorepo",
];

const name = "Shobhit Umrao";
const shortDescription = "MERN, Full stack app dev";

const Homepage = () => {
  return (
    <div className="w-full h-full  flex flex-col">
      <div className="hidden sm:h-14 sm:bg-neutral-900 sm:text-zinc-100"></div>
      <h1 className="pl-4 text-xl font-semibold tracking-wide">{name}</h1>
      <h2 className="text-zinc-400 pl-4 tracking-wide">{shortDescription}</h2>
      <div className="p-2 bg-neutral-800 my-2 mx-4 rounded-sm">
        <div className="flex items-center gap-2">
          <img
            className="h-8 bg-neutral-900 rounded-full p-1"
            src={images.skillsAtom}
            alt=""
          />
          <h3 className="text-zinc-200 tracking-wide">Skills</h3>
        </div>
        <div className="flex flex-wrap gap-x-3 font-light tracking-wider">
          {skillsListAtomTop.map((eachSkill, index) => (
            <p key={eachSkill}>
              {index === skillsListAtomTop.length - 1
                ? eachSkill
                : `${eachSkill},`}
            </p>
          ))}
        </div>
      </div>
      <Description />
    </div>
  );
};

export default Homepage;

// description
const whoAmI =
  " I'm a versatile full-stack developer passionate about technology and user-centered solutions. Proficient in both front-end and back-end development, I deliver holistic software solutions. I take pride in crafting clean code that resonates with users. Equally skilled in both domains, I'm committed to continuous growth. As a full-stack enthusiast, I create seamless solutions with a well-rounded skill set. Dedicated to innovation, I'm an ideal candidate for transformative outcomes.";

const Description = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <p
        className={`bg-neutral-800/50 py-2 px-4  ${
          expanded ? "max-h-full " : "max-h-20 " // Adjust the height classes as needed
        } overflow-hidden transition-max-height duration-300 ease-in-out`}
      >
        {whoAmI}
      </p>

      <p
        className={`w-full tracking-widest font-semibold bg-neutral-800/50 px-4 transition-all ${
          expanded ? "duration-75" : "duration-700"
        } ease-in-out ${
          expanded ? "invisible h-0 p-0 opacity-0" : "h-1 visible opacity-100"
        } `}
      >
        ...
      </p>

      <div className="bg-neutral-800/50 w-full flex items-center justify-center pb-3 pt-2">
        <div
          onClick={() => {
            setExpanded(!expanded);
          }}
          className="cursor-pointer px-3  bg-zinc-700 font-thin  text-white rounded-full py-1 flex items-center justify-center gap-x-2"
        >
          <img
            className="h-4  "
            src={`${expanded ? images.arrowUp : images.arrowDown}`}
            alt=""
          />
          <button className="-mt-0.5">
            {expanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};
