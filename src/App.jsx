import "./App.css";
import Promote from "./Component/Promote";
import PromoteSection from "./Component/PromoteSection";
import Review from "./Component/Review";

function App() {
  return (
    <>
      <div className="font-sora text-[#EEE5FF] pointer-events-none  absolute  bg-transparent">
        <div className=" flex items-center justify-between ">
          <img src="logo.png" />
          <button className="bg-white cursor-pointer py-[0.75rem] px-8 transition-colors duration-300 rounded-[5px] hover:bg-transparent border-white text-black border-2 hover:text-white">
            Purchase Now
          </button>
        </div>
        <div className="flex  gap-44 mt-[6.31rem] mb-10">
          <p className="text-[#EEE5FF] text-left font-light text-[18px]">
            <span className="bg-gradient-to-r from-[#F87516] via-[#9535AB] to-[#5E11FF]  inline-block text-transparent bg-clip-text font-bold">
              Transform <br /> Your Website
            </span>{" "}
            <br />
            With Motion Art <br /> Effect
          </p>
          <p className="text-[#EEE5FF] text-[4.0625rem] font-medium text-left leading-tight tracking-wider">
            Attract Your <br /> Visitors Attention <br /> With Colorful <br />
            <span className="bg-gradient-to-r from-[#F87516] via-[#9535AB] to-[#5E11FF]  inline-block text-transparent bg-clip-text">
              {" "}
              Motion Art Effect
            </span>
          </p>
        </div>
        <p className="text-[rgba(238,_229,_255,_0.74)] mx-[19.5rem] text-[1.04375rem] text-left font-light leading-7">
          Unleash the power of creativity with Motion Art for Elementor - your{" "}
          <br />
          ultimate solution for seamlessly integrating captivating animations
          into <br />
          your website.
        </p>
        <p className="text-[#EEE5FF] text-center font-light text-[22px] my-16">
          Trusted by thousands of users around the world
        </p>
        <div className="flex items-center justify-between ">
          <Review icon={"review-icon-1.png"} />
          <Review icon={"review-icon-2.png"} />
          <Review icon={"review-icon-3.png"} />
        </div>
        <Promote />
        <PromoteSection />
      </div>
    </>
  );
}

export default App;
