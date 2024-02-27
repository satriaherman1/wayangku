import "@src/styles/home.css";
export default function Home() {
  const bgImage = {
    backgroundImage: `url('/images/home/landing.svg')`,
  };

  const gradientOverlay = {
    backgroundImage:
      "linear-gradient(180deg,transparent 17%,rgba(0, 0, 0, 0.8) 71%,#000000 90%)",
  };

  return (
    <main>
      <div
        style={bgImage}
        className="bg-no-repeat bg-center bg-cover text-white text-center h-[90vh] flex items-center justify-center"
      >
        <div className="relative z-10 px-3">
          <h1 className="text-4xl md:text-6xl font-bold">
            Wayang Kulit Khas Jawa
          </h1>
          <p className="mt-3 text-md md:text-xl">
            Budaya perwayangan khas Jawa
          </p>

          <div className="relative mt-8">
            {/* <p>SCROLL DOWN CSS</p> */}
            <a href="#" className="scroll-down"></a>
          </div>
        </div>

        <div
          className="gradient-overlay h-[120vh] w-full absolute "
          style={gradientOverlay}
        ></div>
      </div>
    </main>
  );
}
