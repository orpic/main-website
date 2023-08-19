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
  "Monorepo - Nx",
];

const Homepage = () => {
  return (
    <div className="w-full h-full  flex flex-col">
      <div className="hidden sm:h-14 sm:bg-neutral-900 sm:text-zinc-100"></div>
      <h1 className="pl-4 text-xl font-semibold tracking-wide">
        Shobhit Umrao
      </h1>
      <h2 className="text-zinc-400 pl-4 tracking-wide">
        MERN, Full stack app dev
      </h2>
      <div className="p-2 bg-neutral-800 my-2 mx-4 rounded-sm">
        <div className="flex items-center gap-2">
          <img
            className="h-8 bg-neutral-900 rounded-full p-1"
            src={images.skillsAtom}
            alt=""
          />
          <h3 className="text-zinc-200 tracking-wide">Skills</h3>
        </div>
        <div className="flex flex-wrap gap-2 ">
          {skillsListAtomTop.map((eachSkill) => (
            <p key={eachSkill}>{eachSkill}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
