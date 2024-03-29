import React, { useState } from "react";
import { images } from "../assets/images";
import { TopNavbar } from "../components";

const skillsListAtomTop: string[] = [
  "Typescript",
  "javascript",
  "react.js",
  "next.js",
  "express",
  "node",
  "css",
  "tailwind",
  "nx monorepo",
];

const name: string = "Shobhit Umrao";
const shortDescription: string = "Full stack developer";

const Homepage = () => {
  return (
    <div className="w-full h-full  flex flex-col ">
      <TopNavbar headingText="Home" />
      <h1 className="pl-4 text-xl font-semibold tracking-wider">{name}</h1>
      <h2 className="text-zinc-400 pl-4 tracking-wider">{shortDescription}</h2>
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
      {/* Achievement block start*/}
      <div className="w-full bg-neutral-800/50 py-4 mt-4">
        {/* Heading Start*/}
        <div className="flex items-center gap-x-4 text-lg  px-4 ">
          <img className="h-6" src={images.achievementTrophy} alt="" />
          <h2 className="font-semibold tracking-wide">Recognition</h2>
          <img className="h-7 ml-auto" src={images.arrowLineRight} alt="" />
        </div>
        {/* Heading End*/}
        {/* Card scroller start*/}
        <div className="w-full mt-4 px-6 overflow-x-auto  flex gap-x-4 no-scrollbar">
          {/* The actual card start*/}
          <RecognitionCard
            imgSrc={images.mhrdImage}
            imgSrcAlt={"ministry of education shobhit umrao"}
            descriptionPara={
              "Developed a covid safety application using augmented reality, recognised by Ministry of Education, Government of India"
            }
            onViewDetailsClick={() => {}}
          />
          <RecognitionCard
            imgSrc={images.convocationScreenshot}
            imgSrcAlt={"convocation shobhit umrao"}
            descriptionPara={
              "Recieved a special mention at 2021 Batch IIIT Bhopal's convocation by our Hon'ble Director, IIIT Bhopal"
            }
            onViewDetailsClick={() => {}}
          />
          {/* The actual card end*/}
        </div>
        {/* Card scroller end */}
      </div>
      {/* Achievement block end*/}
      {/* Experience block start*/}
      <div className="w-full bg-neutral-800/50 py-4 mt-4">
        {/* Heading Start*/}
        <div className="flex items-center gap-x-4 text-lg  px-4 ">
          <img className="h-6" src={images.experienceActive} alt="" />
          <h2 className="font-semibold tracking-wide">Experience</h2>
          <img className="h-7 ml-auto" src={images.arrowLineRight} alt="" />
        </div>
        {/* Heading End*/}
        {/* Card scroller start*/}
        <div className="w-full mt-4 px-6 overflow-x-auto  flex gap-x-4 no-scrollbar">
          {/* The actual card start*/}
          <ExperienceCard />
          {/* The actual card end*/}
        </div>
        {/* Card scroller end */}
      </div>
      {/* Experience block end*/}
    </div>
  );
};

export default Homepage;

const longDescription =
  " I'm a versatile full-stack developer passionate about technology and user-centered solutions. Proficient in both front-end and back-end development, I deliver holistic software solutions. I take pride in crafting clean code that resonates with users. Equally skilled in both domains, I'm committed to continuous growth. As a full-stack enthusiast, I create seamless solutions with a well-rounded skill set. Dedicated to innovation, I'm an ideal candidate for transformative outcomes.";

const Description = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <p
        className={`bg-neutral-800/50 py-2 px-4  ${
          expanded ? "max-h-full tracking-wider" : "max-h-20 tracking-wide" // Adjust the height classes as needed
        } overflow-hidden transition-max-height duration-300 ease-in-out`}
      >
        {longDescription}
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

// imgSrc images.mhrdImage
// imgSrcAlt ministry of education shobhit umrao
// descriptionPara  Developed a covid safety application using augmented reality, recognised by Ministry of Education, Government of India
// onViewDetailsClick

interface RecognitionCardProps {
  imgSrc: string;
  imgSrcAlt: string;
  descriptionPara: string;
  onViewDetailsClick: () => void;
}

const RecognitionCard: React.FC<RecognitionCardProps> = ({
  imgSrc,
  imgSrcAlt,
  descriptionPara,
  onViewDetailsClick,
}) => {
  const handleViewDetailsClick = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.TouchEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    onViewDetailsClick();
  };
  return (
    <div className="w-72 my-4 h-96  bg-zinc-800  rounded-md  flex flex-col items-center justify-center  flex-shrink-0 text-white">
      <div className="h-48 w-72 bg-orange-500 rounded-tl-md rounded-tr-md">
        <img
          loading="lazy"
          onLoad={() => {}}
          className="h-48 w-72 rounded-tl-md rounded-tr-md object-cover object-top"
          src={imgSrc}
          alt={imgSrcAlt}
        />
      </div>
      <div className="h-48 rounded-bl-md rounded-br-md flex flex-col justify-between">
        <div className="mx-2 mt-4 p-2 rounded-md bg-zinc-900 text-zinc-50">
          <p className="tracking-wide">{descriptionPara}</p>
        </div>
        <div className="flex items-center justify-center mb-2 ">
          <button
            onTouchEnd={handleViewDetailsClick}
            onClick={handleViewDetailsClick}
            className="border-2 border-zinc-500 px-3 py-1 tracking-wide rounded-md"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

interface ExperienceCardProps {}

const ExperienceCard: React.FC<ExperienceCardProps> = () => {
  return (
    <>
      <div className="h-56  bg-neutral-800/50 p-2 rounded-lg">
        <div className="flex justify-between text-sm text-zinc-400">
          <p className="">Present...</p>
          <p>...2023</p>
        </div>
        <p className="text-lg text-zinc-100 font-semibold">
          Frontend developer
        </p>
        <p className="text-lg text-zinc-300">
          Taxiwars{" "}
          <span className="text-zinc-400">( Samviv technologies )</span>
        </p>
        <hr className="my-1 border-0 h-[1px] bg-zinc-400" />
        <div className="flex justify-between gap-x-4">
          <ul className="">
            <li className="flex items-center gap-x-1">
              <img
                className="h-3 opacity-80"
                src={images.bulletPoints}
                alt=""
              />
              Customer app
            </li>
            <li className="flex items-center gap-x-1">
              <img
                className="h-3 opacity-80"
                src={images.bulletPoints}
                alt=""
              />
              Driver app
            </li>
          </ul>
          <ul>
            <li className="flex items-center gap-x-1">
              <img
                className="h-3 opacity-80"
                src={images.bulletPoints}
                alt=""
              />
              Razorpay PG integration
            </li>
            <li>string</li>
            <li>string</li>
          </ul>
          <ul>
            <li>string</li>
            <li>string</li>
            <li>string</li>
          </ul>
        </div>
      </div>
    </>
  );
};
