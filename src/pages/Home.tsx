import Footer from "@src/components/footer";
import Navbar from "@src/components/navbar";
import CreatingProcess from "@src/containers/home/creating-process";

import "@src/styles/cube.css";
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
    <div className="relative">
      <Navbar className="text-white" />
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
              <a href="#short-description" className="scroll-down"></a>
            </div>
          </div>

          <div
            className="gradient-overlay h-[120vh] w-full absolute "
            style={gradientOverlay}
          ></div>
        </div>

        <div
          id="short-description"
          className="mt-20 mb-[200px] md:mb-[300px] flex flex-col-reverse md:flex-row md:items-center md:justify-between text-white relative z-10 container mx-auto px-4"
        >
          <p className="text-xl text-center md:text-left md:text-4xl basis-[48%] font-semibold">
            Wayang kulit (Jawa: ꦮꦪꦁꦏꦸꦭꦶꦠ꧀) adalah bentuk tradisional dari
            kesenian wayang yang aslinya ditemukan dalam budaya{" "}
            <span className="text-yellow-500"> Jawa dan Bali </span> di
            Indonesia. Narasi wayang kulit seringkali berkaitan dengan tema
            utama kebaikan melawan kejahatan.
          </p>

          <div className="basis-[48%] ">
            <img
              src="/images/home/wayang1.png"
              width="80%"
              className="block mx-auto"
            />
          </div>
        </div>

        <div className=" flex flex-col text-white  z-10 container mx-auto px-4  top-0 pb-20 sticky ">
          <div>
            <img
              src="/images/home/wayang2.jpg"
              className="block mx-auto md:h-[60vh]"
            />
          </div>
          <p className="text-xl mt-20 text-center  md:text-4xl basis-[48%] font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo eius
            quaerat <span className="text-yellow-500">architecto</span>{" "}
            reprehenderit
          </p>
        </div>
        <div className="bg-white relative z-10 mt-10">
          {/* <WayangCharacters /> */}

          <CreatingProcess />
        </div>
      </main>

      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>

      <Footer />
    </div>
  );
}
