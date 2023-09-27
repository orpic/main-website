import { TopNavbar } from "../components";

const name: string = "Tech Stack";

interface HeadingTextWithList {
  headingText: string;
  list: string[];
}

const headingTextWithList: HeadingTextWithList[] = [
  {
    headingText: "Hardware",
    list: [
      "Acer Predator PH315-51 ( Helios 300 )",
      "Processor: Intel i5-8400H",
      "Ram: 16GB",
      "OS: Fedora Linux 38 (Workstation Edition)",
      "Drive: 1TB M.2 PCIe NVMe SSD + 1TB HDD",
      "Windowing system: Wayland",
    ],
  },
  {
    headingText: "Tools and software",
    list: [
      "Git",
      "Docker engine/cli",
      "Terminal - oh my zsh ( powerlevel10k custom theme )",
      "Android studio",
      "Vs code, vim, nano, ( looking forward to idx.dev )",
      "Node, bun",
      "Chrome / brave / chromium / firefox",
      "Github",
    ],
  },
  {
    headingText: "Languages",
    list: ["TypeScript", "JavaScript", "Kotlin"],
  },
  {
    headingText: "Frameworks",
    list: ["React.js", "Next.js", "PWA", "Android", "Nx monorepo"],
  },
];

const Uses = () => {
  return (
    <div className="w-full h-full  flex flex-col ">
      <TopNavbar headingText="Uses" />
      <h1 className="pl-4 text-xl font-semibold tracking-wider">{name}</h1>
      <p className="px-6 mt-4 tracking-wide">Below is my development setup.</p>
      {headingTextWithList.map((eachHeading) => (
        <>
          <h2 className="pl-6 mt-6 font-bold tracking-wider text-lg">
            # {eachHeading.headingText}
          </h2>
          <ul className="pl-12 list-disc">
            {eachHeading.list.map((eachItem) => (
              <li className="tracking-wide">{eachItem}</li>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
};

export default Uses;
