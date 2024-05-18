const Promote = () => {
  return (
    <div className="my-28 flex items-center justify-between">
      <div className="w-full">
        <h1
          className={`text-[#EEE5FF] text-4xl  font-medium text-left leading-tight tracking-wider`}
        >
          Turn Your Cursor Into A Colorful <br /> Magic Wand & Charm Your
          Visitors
        </h1>
        <p
          className={`text-[rgba(238,_229,_255,_0.74)] mt-6 text-[1.04375rem] text-left font-light leading-7`}
        >
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse <br /> your website with visually stunning
          motion art elements.
        </p>

        <p className="px-8 py-4 w-fit cursor-pointer mt-4 text-xl bg-gradient-to-r to-[#F87516] via-[#9535AB] from-[#5E11FF]  rounded-3xl">
          Purchase From Envato
          <img
            className="inline ml-3"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAWklEQVR4nO3VywmAMBAA0S0gXaQwz6IHS7YSRwIWIIGwfuZBzjtsIImQpK8BKjBlDS/ADhzAnBWxXQHtrEbwuk0wzr0IxgYskXAFjcP/s/byhKe4pn1GkhQdTqgiXg0e2ufQAAAAAElFTkSuQmCC"
          />
        </p>
      </div>
      <img src="magic.png" alt="magic" />
    </div>
  );
};

export default Promote;
