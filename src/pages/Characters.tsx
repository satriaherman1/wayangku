import Navbar from "@src/components/navbar";
import PhotoAlbum from "react-photo-album";

import "@src/styles/characters.css";

export default function Characters() {
  const photos = [
    {
      src: "/images/wayang/arjuna.jpg",
      width: 500,
      height: 600,
      title: "Arjuna",
    },
    {
      src: "/images/wayang/semar.jpg",
      width: 900,
      height: 900,
      title: "Semar",
    },
    {
      src: "/images/wayang/semar.jpg",
      width: 900,
      height: 980,
      title: "Semar",
    },
    {
      src: "/images/wayang/semar.jpg",
      width: 900,
      height: 1200,
      title: "Semar",
    },
    {
      src: "/images/wayang/semar.jpg",
      width: 900,
      height: 1000,
      title: "Semar",
    },
  ];

  return (
    <div className="bg-black min-h-[100vh] text-white">
      <Navbar className="text-white" />

      <main className="container mx-auto px-3">
        <h1 className="text-center font-poppins font-bold text-2xl md:text-4xl pt-[160px]">
          Tokoh Wayang di Jawa
        </h1>
        <p className="text-center text-md md:text-xl">
          Beberapa Tokoh Wayang Terkenal
        </p>

        <div className="mt-5">
          <PhotoAlbum
            layout="masonry"
            photos={photos}
            renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
              <div
                style={{ position: "relative", ...wrapperStyle }}
                className="characters-album"
              >
                <div
                  style={{ backgroundImage: `url('${photo.src}')` }}
                  className="bg-cover bg-no-repeat bg-center w-[100%] h-[100%] photo-list"
                ></div>
                <div className="photo-desc">
                  <div className="w-full">
                    <div className="py-2 ">
                      <h2 className=" text-md md:text-2xl font-semibold font-poppins">
                        {photo.title}
                      </h2>
                    </div>
                    <button className="mt-5 border py-2 px-4 rounded-md font-poppins">
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </main>
    </div>
  );
}
