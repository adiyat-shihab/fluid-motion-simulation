const PromoteSection = () => {
  return (
    <div className="">
      <h1
        className={`text-[#EEE5FF] text-4xl text-center   font-medium  leading-snug tracking-wider`}
      >
        Apply On Any Section Or Enable <br /> For Whole Page
      </h1>
      {/* <div className=" bg-gradient-to-b from-[#0E0620] border-2 rounded-3xl border-stone-800  w-fit to-[#251E35] ">
        <div className="p-[2.75rem]">
          <h1
            className={`text-[#EEE5FF] text-4xl  font-medium text-left leading-tight tracking-wider`}
          >
            Apply On Section
          </h1>
          <p
            className={`text-[rgba(238,_229,_255,_0.74)]  text-[1.04375rem] mt-[0.62rem] mb-[2.5rem] text-left font-light leading-7`}
          >
            Apply on section is a game-changer, offering an unparalleled way to{" "}
            <br />
            manage applications directly from your website.
          </p>
          <img src="frame-1.png" alt="" />
        </div>
      </div> */}
      <div className="flex mt-40 my-16 ">
        {" "}
        <Sections margin={"-mt-[100px]"} />
        <Sections margin={"-mb-[100px] ml-[1.25rem] "} />
      </div>
      <div className="bg-gradient-to-b my-10 mt-64 py-10 text-center from-[#0E0620] border-2 rounded-3xl border-[#332C42]  to-[#251E35]">
        <h1 className="text-[#EEE5FF]  text-2xl font-medium text-center leading-tight tracking-wider">
          Supported by All Popular Browsers
        </h1>
        <p className="text-[rgba(238,_229,_255,_0.74)] text-center mt-[0.62rem] mb-[2.5rem]  font-light leading-7 ">
          Rest assured, Motion Art is designed to be compatible <br /> with all
          major web browsers.
        </p>
        <div className="flex items-center justify-center gap-10">
          <div className="flex items-center gap-2">
            <img src="chrome.png" className="w-12 h-12" />
            <p className="text-[#EEE5FF]  text-xl font-medium text-center leading-tight tracking-wider">
              Chrome
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src="firefox.png" className="w-12 h-12" />
            <p className="text-[#EEE5FF]  text-xl font-medium text-center leading-tight tracking-wider">
              Firefox
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src="edge.png" className="w-12 h-12" />
            <p className="text-[#EEE5FF]  text-xl font-medium text-center leading-tight tracking-wider">
              Edge
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoteSection;

const Sections = ({ margin }) => {
  return (
    <>
      <div
        className={` p-8 w-[38.125rem]  ${margin} bg-gradient-to-b from-[#0E0620] border-2 rounded-3xl border-[#332C42]  to-[#251E35]`}
      >
        <h1 className="text-[#EEE5FF] w-fit text-3xl font-medium text-left leading-tight tracking-wider">
          Apply On Section
        </h1>
        <p className="text-[rgba(238,_229,_255,_0.74)] mt-[0.62rem] mb-[2.5rem] text-left font-light leading-7 w-4/6">
          Apply on section is a game-changer, offering an unparalleled way to
          manage applications directly from your website.
        </p>
        <img src="frame-1.png" alt="" />
      </div>
    </>
  );
};
