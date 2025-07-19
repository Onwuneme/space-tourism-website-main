import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full  text-[#cecef7] text-center lg:text-start flex flex-col lg:flex-row md:justify-around items-center  bg-[url('/home/background-home-mobile.jpg')] md:bg-[url('/home/background-home-tablet.jpg')] lg:bg-[url('/home/background-home-desktop.jpg')] bg-cover bg-center pt-[100px] md:pt-[150px] px-[20px] ">
        <div>
          <p className=" mb-[15px] md:text-lg tracking-wider ">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className=" text-6xl md:text-9xl md:font-bold mb-[20px] text-white">
            SPACE
          </h1>
          <p className=" md:w-[600px] text-sm md:text-lg ">
            Let's face it if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back,backand relax because we'll give you a truly of this
            world experience!
          </p>
        </div>
        <div className=" relative flex justify-center items-center group md:w-[200px] md:h-[200px]  lg:w-[300px] lg:h-[300px] w-[170px] h-[170px]  mt-[60px] md:mt-[20px]">
          <div className=" absolute   w-[170px] h-[170px] md:w-[200px] md:h-[200px]  lg:w-[300px] lg:h-[300px] group-hover:w-[240px] md:group-hover:w-[270px] lg:group-hover:w-[390px] group-hover:h-[240px] md:group-hover:h-[270px] lg:group-hover:h-[390px] transition-all duration-500 bg-white/45 rounded-full  z-0 "></div>

          <Link
            to="/destination"
            className="w-[170px] h-[170px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] bg-white rounded-full z-10 flex items-center justify-center text-black text-lg md:text-xl lg:text-2xl transition-all duration-300 hover:scale-105 focus:outline-none"
          >
            EXPLORE
          </Link>
        </div>
      </div>
    </>
  );
}
