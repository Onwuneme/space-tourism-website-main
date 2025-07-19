import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import logo from "../assets/shared/logo.svg";
import { Link, useLocation } from "react-router-dom";
import useToggle from "./CustomHook/Toggle";

export default function Navbar() {
  const [isVisible, toggle,isclose] = useToggle();

  const location = useLocation();
  return (
    <>
      <div className=" absolute z-20 top-0 w-full flex items-center justify-between p-5 md:p-8  lg:px-20 ">
        <img src={logo} alt="" className="z-40 w-8 md:w-fit" />
        <div onClick={toggle} className="z-30 md:hidden">
          {!isVisible ? (
            <img src={hamburger} alt="" />
          ) : (
            <img src={close} alt="" />
          )}
        </div>
        <div
        onClick={isclose}
          className={` ${
            isVisible ? "block" : "hidden"
          } fixed w-full h-dvh top-0 left-0 bg-black/50 flex justify-end`}
        >
          <div
            className={`  flex  md:absolute w-fit h-fit  flex-col md:flex-row top-0 right-0 md:text-center backdrop-blur-lg bg-transparent pt-15 md:pt-0 text-white text-lg z-20 md:pr-5  lg:pr-10`}
          >
            <Link
              onClick={toggle}
              className={` ${
                location.pathname == "/" ? "border-white" : "border-transparent"
              } w-[200px] xl:w-[200px] md:w-[170px] md:text-center   border-b-3 pl-4 py-8   duration-500   hover:border-white/50`}
              to={`/`}
            >
              00 HOME
            </Link>
            <Link
              onClick={toggle}
              className={` ${
                location.pathname == "/destination"
                  ? "border-white"
                  : "border-transparent"
              }  w-[200px] xl:w-[200px] md:w-[170px] md:text-center   border-b-3 pl-4 py-8   duration-500  hover:border-white/50`}
              to={`/destination`}
            >
              01 DESTINATION
            </Link>
            <Link
              className={` ${
                location.pathname == "/crew"
                  ? "border-white"
                  : "border-transparent"
              }  w-[200px] xl:w-[200px] md:w-[170px] md:text-center   border-b-3 pl-4 py-8  duration-500  hover:border-white/50`}
              onClick={toggle}
              to={`/crew`}
            >
              02 CREW
            </Link>
            <Link
              onClick={toggle}
              className={` ${
                location.pathname == "/technology"
                  ? "border-white"
                  : "border-transparent"
              }  w-[200px] xl:w-[200px] md:w-[170px] md:text-center   border-b-3 pl-4 py-8   duration-500 hover:border-white/50`}
              to={`/technology`}
            >
              03 TECHNOLOGY
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
