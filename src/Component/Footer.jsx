const Footer = () => {
  return (
    <div className="mt-[8.09rem] text-center">
      <h1 className="text-[#EEE5FF] text-4xl font-medium  leading-tight tracking-wider">
        An All-Round Plugin With <br /> Powerful Features
      </h1>
      <p className="text-[rgba(238,_229,_255,_0.74)] mt-[0.62rem] mb-[2.5rem]  font-light leading-7 ">
        Whether you're a seasoned web designer or just starting out, Motion Art
        for <br /> Elementor seamlessly integrates with the Elementor platform,
        providing you <br /> with a seamless and intuitive experience.
      </p>

      <div className="flex items-center gap-10">
        <Card
          image={"strike.png"}
          heading={"Light Weight"}
          paragraph={"Motion Art for Elementor is designed to be lightweight."}
        />
        <Card
          image={"like.png"}
          heading={"100% Responsive"}
          paragraph={
            "Create a consistent visual experience across all devices."
          }
        />
        <Card
          image={"moon.png"}
          heading={"User Friendly Interface"}
          paragraph={
            "Ensure a smooth experience for both applicants and administrators."
          }
        />
      </div>

      <div className="-ml-[20rem] -mr-[18.94rem] mt-[6.25rem] shadow  bg-gradient-to-r from-[#F87516] via-[#9535AB] to-[#5E11FF] ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-[rgba(238, 229, 255, 0.72)] sm:text-center ">
            © 2023 Copywrite. All rights reserved by QodeMatrix
          </span>
          <ul className="flex flex-wrap items-center gap-4 mt-3 text-sm font-medium  sm:mt-0">
            <li className="text-[rgba(238, 229, 255, 0.72)]">Documentation</li>
            <li className="text-[rgba(238, 229, 255, 0.72)]">Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const Card = ({ image, heading, paragraph }) => {
  return (
    <div className="  w-[24.99938rem]   bg-gradient-to-b from-[#0E0620] border-2 rounded-3xl border-[#332C42]  to-[#251E35]">
      <img src={image} alt="" />
      <h1 className="text-[#EEE5FF] text-xl font-medium text-left px-8  leading-tight tracking-wider">
        {heading}
      </h1>
      <p className="text-[rgba(238,_229,_255,_0.74)] px-8 mb-8 mt-4 text-left  font-light leading-7 ">
        {paragraph}
      </p>
    </div>
  );
};
