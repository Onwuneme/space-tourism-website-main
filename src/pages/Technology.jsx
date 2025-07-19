import useOptionSelector from "../Component/CustomHook/OptionSelector";

export default function Technology({ technologyData }) {
  const [current, handleClick] = useOptionSelector();

  if (
    !technologyData ||
    !Array.isArray(technologyData) ||
    technologyData.length === 0
  ) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[url(/technology/background-technology-mobile.jpg)] bg-cover bg-center">
        <p>No technology data available.</p>
      </div>
    );
  }

  const tech = technologyData[current] || {};

  return (
    <div className="min-h-screen  text-center lg:text-start text-white bg-[url(/technology/background-technology-mobile.jpg)] md:bg-[url(/technology/background-technology-tablet.jpg)] lg:bg-[url(/technology/background-technology-desktop.jpg)] bg-cover bg-center pt-[70px]  md:pl-10 lg:pl-20 mb-pr-0">
      {/* Section Title */}
      <h2 className="lg:mt-10 md:text-2xl mb-10 space-x-5">
        <span className="text-white/50">03</span> <span>SPACE LAUNCH 101</span>
      </h2>

      {/* Technology Content */}
      <div className=" flex flex-col items-center lg:flex-row-reverse lg:justify-between">
        {/* Technology Images */}
        <div >
          {tech.images && tech.images.landscape && (
            <img
              src={tech.images.landscape}
              alt={tech.name || "Technology landscape"}
              className="lg:hidden "
            />
          )}
          {tech.images && tech.images.portrait && (
            <img
              src={tech.images.portrait}
              alt={tech.name || "Technology portrait"}
              className="hidden lg:block w-120 "
            />
          )}
        </div>

        <div className="flex flex-col items-center lg:items-start lg:gap-10 lg:flex-row lg:pt-15  lg:mx-8">
          {/* Selector Buttons */}
          <div className="relative bottom-4 lg:bottom-0 flex lg:flex-col gap-6">
            {technologyData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                aria-label={`Select technology ${index + 1}`}
                className={`h-8 md:h-12 lg:h-20 w-8 md:w-12 lg:w-20 border-2 border-white duration-500 hover:bg-white/80 hover:text-black  md:text-lg lg:text-3xl rounded-full flex justify-center items-center ${
                  index === current ? "bg-white text-black" : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Technology Details */}
          <div className="md:w-120 xl:w-140 mt-8 lg:mt-0 p-5">
            <h2 className="text-[#cecef7] mb-2">THE TERMINOLOGY ...</h2>
            <h1 className="uppercase text-4xl my-5 font-bold xl:text-6xl lg:text-5xl">
              {tech.name || "Name"}
            </h1>
            <p className="md:text-xl lg:h-50 text-[#cecef7]">
              {tech.description || "No description available."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
