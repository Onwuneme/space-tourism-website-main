import useOptionSelector from "../Component/CustomHook/OptionSelector";

export default function Destination({ destinationData }) {
  const [current, handleClick] = useOptionSelector();

  return (
    <>
      <div className=" min-h-screen text-white w-full text-center bg-[url('/destination/background-destination-mobile.jpg')] md:bg-[url('/destination/background-destination-tablet.jpg')] lg:bg-[url('/destination/background-destination-desktop.jpg')] bg-cover bg-center pt-[70px] md:pt-[120px]  p-5 md:px-10 md:pt[120px]     ">
        <h2 className="text-center md:text-start md:text-2xl ">
          <span className="text-white/50">01</span>{" "}
          <span>PICK YOUR DESTINATON</span>
        </h2>
        {destinationData && (
          <div className=" flex flex-col lg:flex-row  items-center  lg:justify-around  ">
            <div >
              <img
                src={destinationData[current].images.webp}
                alt={destinationData[current].name}
                className="w-50 md:w-70 lg:w-90 xl:w-110 my-10 justify-self-center "
              />
            </div>

            <div className="max-w-[500px] lg:text-start ">
              {destinationData?.map((data, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`${
                    current === index ? "border-white" : "border-transparent"
                  } w-[80px] md:w-[120px] lg:w-[120px] text-center   md:text-xl  text-lg border-b-3 duration-500  hover:border-white/50`}
                >
                  {data.name}
                </button>
              ))}

              <div>
                <h1 className="py-4 lg:py-6 text-6xl md:text-[100px] lg:text-[130px]  uppercase font-bold ">
                  {destinationData[current].name}
                </h1>

                <p className="pb-10  md:text-xl ">
                  {destinationData[current].description}
                </p>
                <hr className="mx-10 lg:mx-0 border-white/50" />
                <div className=" uppercase md:flex justify-between">
                  <div className="my-8 space-y-4">
                    <p>AvG. DISTANCE</p>
                    <h2 className="text-4xl">
                      {destinationData[current].distance}
                    </h2>
                  </div>
                  <div className="my-8 space-y-4">
                    <p>EST. TRAVEL TIME</p>
                    <h2 className=" text-4xl">
                      {destinationData[current].travel}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
