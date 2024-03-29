interface NavigationTabBottomItemProps {
  name: string;
  activeIcon: string;
  inActiveIcon: string;
  active: boolean;
}

export const NavigationTabBottomItem: React.FC<
  NavigationTabBottomItemProps
> = ({ name, activeIcon, inActiveIcon, active }) => {
  return (
    <>
      <div className="">
        {!active && <img className=" h-6 opacity-70" src={inActiveIcon} />}
        {active && <img className=" h-6 " src={activeIcon} />}
      </div>
      <div
        className={` text-xs xsm270:text-base ${
          active ? "font-bold xsm270:font-semibold" : "opacity-70"
        }`}
      >
        {name}
      </div>
    </>
  );
};
