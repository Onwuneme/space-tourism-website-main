import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import logo from "../assets/shared/logo.svg";
import { Link, useLocation } from "react-router-dom";
import useToggle from "./CustomHook/Toggle";

export default function Navbar() {
  const [isVisible, toggle, isclose] = useToggle();

  const location = useLocation();
  return (
    <>
      <div className="absolute z-20 top-0 w-full flex items-center justify-between p-5 md:p-8 lg:px-20">
        {/* Logo */}
        <img src={logo} alt="Logo" className="z-40 w-8 md:w-fit" />

        {/* Hamburger Icon (Mobile) */}
        <div onClick={toggle} className="z-30 md:hidden">
          {!isVisible ? (
            <img src={hamburger} alt="Open menu" />
          ) : (
            <img src={close} alt="Close menu" />
          )}
        </div>

        {/* Mobile Navbar Overlay */}
        <div
          onClick={isclose}
          className={`fixed w-full h-dvh top-0 left-0 bg-black/50 flex justify-end transition-opacity duration-500 md:hidden ${
            isVisible
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`flex w-fit h-fit flex-col top-0 right-0 backdrop-blur-lg bg-transparent pt-15 text-white text-lg z-20 pr-5 lg:pr-10 transform transition-transform duration-500 ${
              isVisible ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <Link
              onClick={toggle}
              className={` ${
                location.pathname == "/" ? "border-white" : "border-transparent"
              } w-[200px] xl:w-[200px] md:w-[170px] md:text-center border-b-3 pl-4 py-8 duration-500 hover:border-white/50`}
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
              } w-[200px] xl:w-[200px] md:w-[170px] md:text-center border-b-3 pl-4 py-8 duration-500 hover:border-white/50`}
              to={`/destination`}
            >
              01 DESTINATION
            </Link>
            <Link
              onClick={toggle}
              className={` ${
                location.pathname == "/crew"
                  ? "border-white"
                  : "border-transparent"
              } w-[200px] xl:w-[200px] md:w-[170px] md:text-center border-b-3 pl-4 py-8 duration-500 hover:border-white/50`}
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
              } w-[200px] xl:w-[200px] md:w-[170px] md:text-center border-b-3 pl-4 py-8 duration-500 hover:border-white/50`}
              to={`/technology`}
            >
              03 TECHNOLOGY
            </Link>
          </div>
        </div>

        {/* Desktop/Tablet Navbar */}
        <div className="hidden md:flex absolute top-0 right-0 w-fit h-fit flex-row text-center backdrop-blur-lg bg-transparent pt-0 text-white text-lg z-20 pr-5 lg:pr-10">
          <Link
            className={` ${
              location.pathname == "/" ? "border-white" : "border-transparent"
            } w-[200px] xl:w-[200px] md:w-[170px] md:text-center border-b-3 pl-4 py-8 duration-500 hover:border-white/50`}
            to={`/`}
          >
            00 HOME
          </Link>
          <Link
            className={` ${
              location.pathname == "/destination"
                ? "border-white"
                : "border-transparent"
            } w-[200px] xl:w-[200px] md:w-[170px] md:text-center border-b-3 pl-4 py-8 duration-500 hover:border-white/50`}
            to={`/destination`}
          >
            01 DESTINATION
          </Link>
          <Link
            className={` ${
              location.pathname == "/crew"
                ? "border-white"
                : "border-transparent"
            } w-[200px] xl:w-[200px] md:w-[170px] md:text-center border-b-3 pl-4 py-8 duration-500 hover:border-white/50`}
            to={`/crew`}
          >
            02 CREW
          </Link>
          <Link
            className={` ${
              location.pathname == "/technology"
                ? "border-white"
                : "border-transparent"
            } w-[200px] xl:w-[200px] md:w-[170px] md:text-center border-b-3 pl-4 py-8 duration-500 hover:border-white/50`}
            to={`/technology`}
          >
            03 TECHNOLOGY
          </Link>
        </div>
      </div>
    </>
  );
}
