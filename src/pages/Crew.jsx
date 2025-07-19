import useOptionSelector from "../Component/CustomHook/OptionSelector";

export default function Crew({ crewData }) {
  const [current, handleClick] = useOptionSelector();

  // Defensive: handle missing or empty crewData
  if (!crewData || !Array.isArray(crewData) || crewData.length === 0) {
    return (
      <div className="text-white min-h-screen flex items-center justify-center bg-[url('/crew/background-crew-mobile.jpg')] bg-cover bg-center">
        <p>No crew data available.</p>
      </div>
    );
  }

  const crew = crewData[current] || {};

  return (
    <div className="text-white text-center min-h-screen w-full bg-[url('/crew/background-crew-mobile.jpg')] bg-cover bg-center pt-[70px] md:pt-[110px]  px-5 md:px-10 lg:px-20">
      {/* Section Title */}
      <h2 className="lg:mt-10  md:text-2xl mb-10 space-x-5 md:text-start">
        <span className="text-white/50">02</span> <span>MEET YOUR CREW</span>
      </h2>

      {/* Crew Content */}
      <div className="flex flex-col md:flex-row-reverse md:justify-between h-full   items-center  ">
        {/* Crew Image */}
        <div className=" w-42 md:w-70 lg:w-100 h-50  md:h-full flex items-end">
          {crew.images && crew.images.png && (
            <img
              src={crew.images.png}
              alt={crew.name || "Crew member"}
              className="w-40 md:w-70 lg:w-100 md:absolute bottom-0 right-10 "
              
            />
          )}
        </div>

        {/* Divider for mobile */}
        <hr className="md:hidden border w-60 border-white/50 " />

        {/* Crew Info and Selector */}
        <div className=" lg:text-start  flex flex-col items-center md:flex-col-reverse lg:items-start ">
          {/* Selector Dots */}
          <div className="flex space-x-8 lg:space-x-20 mt-10">
            {crewData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                aria-label={`Select crew member ${index + 1}`}
                className={`w-4 h-4 lg:w-6 lg:h-6 rounded-full duration-500 hover:bg-white/70 focus:outline-none ${
                  index === current ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Crew Details */}
          <div className="mt-8">
            <p className="  md:text-xl  text-white/50 uppercase tracking-wider">
              {crew.role || "Role"}
            </p>
            <h2 className="text-xl md:text-4xl lg:text-6xl mt-3 mb-8 uppercase tracking-wide">
              {crew.name || "Name"}
            </h2>
            <p className="lg:text-2xl md:w-90 lg:w-120 md:h-30 lg:h-40 text-[#cecef7]   ">
              {crew.bio || "No biography available."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
