import Footer from "@src/components/footer";
import Navbar from "@src/components/navbar";
import "@src/styles/sejarah.css";
import { DiscussionEmbed } from "disqus-react";
import { FaFacebookF, FaInstagram, FaRegCopy } from "react-icons/fa";

export default function Sejarah() {
  const bgImage = {
    backgroundImage: `url('/images/wayang/dalang.jpeg')`,
  };
  return (
    <div>
      <Navbar className="bg-black" />
      <div className="mt-10 py-14">
        <h1 className="font-bold text-2xl md:text-3xl text-center font-poppins">
          Sejarah Wayang Kulit
        </h1>
        <p className="text-center text-lg font-poppins">Wayangku - 2024</p>
      </div>

      <div
        style={bgImage}
        className="bg-cover bg-center bg-no-repeat w-full h-[70vh] container"
      ></div>

      <div className="container px-3 py-10 flex flex-col-reverse md:flex-row gap-y-10 justify-between">
        <section className="basis-full md:basis-[50%]">
          <div id="start">
            <h1 className="text-2xl font-poppins font-semibold mb-3">
              Sejarah Awal
            </h1>
            <p>
              <span className="font-bold"> Wayang kulit</span> menjadi salah
              satu kesenian tradisional yang lahir, tumbuh dan berkembang sampai
              saat ini. Terutama di wilayah Jawa, kesenian wayang kulit memang
              masih kerap dan mudah ditemukan pada acara tertentu seperti
              pernikahan maupun acara tahunan di suatu desa. Jika dilihat lebih
              dalam, wayang kulit bukanlah sekedar kesenian pertunjukan saja.
              Namun kesenian wayang kulit merupakan media permenungan menuju roh
              spiritual para dewa.
            </p>
            <br />
            <p>
              Istilah wayang sendiri berasal dari kata ma Hyang yang memiliki
              arti menuju spiritual Sang Kuasa. Namun ada juga yang mengartikan
              jika istilah wayang berasal dari teknik pertunjukan yang
              mengandalkan bayangan (bayang atau wayang) pada layar yang
              digunakan.
            </p>
            <br />
            <p>
              Lalu pembuatan wayang biasanya menggunakan kulit kerbau. Hingga
              saat ini kulit kerbau juga bisa dibilang menjadi pilihan yang
              begitu banyak digunakan dalam proses pembuatan wayang.
            </p>
            <br />
            <p>
              Dalam proses pementasannya sendiri, pagelaran wayang kulit akan
              dimainkan oleh seorang yang kerap disebut sebagai dalang.
              Pementasan seni wayang tidak akan lengkap jika tidak diiringi oleh
              gamelan. Mereka yang memainkan gamelan juga bisa disebut dengan
              nayaga.
            </p>
          </div>
          <div className="mt-10" id="show">
            <h1 className="text-2xl font-poppins font-semibold mb-3">
              Pementasan
            </h1>
            <p>
              <span className="font-bold"> Wayang kulit</span> menjadi salah
              satu kesenian tradisional yang lahir, tumbuh dan berkembang sampai
              saat ini. Terutama di wilayah Jawa, kesenian wayang kulit memang
              masih kerap dan mudah ditemukan pada acara tertentu seperti
              pernikahan maupun acara tahunan di suatu desa. Jika dilihat lebih
              dalam, wayang kulit bukanlah sekedar kesenian pertunjukan saja.
              Namun kesenian wayang kulit merupakan media permenungan menuju roh
              spiritual para dewa.
            </p>
            <br />
            <p>
              Istilah wayang sendiri berasal dari kata ma Hyang yang memiliki
              arti menuju spiritual Sang Kuasa. Namun ada juga yang mengartikan
              jika istilah wayang berasal dari teknik pertunjukan yang
              mengandalkan bayangan (bayang atau wayang) pada layar yang
              digunakan.
            </p>
            <br />
            <p>
              Lalu pembuatan wayang biasanya menggunakan kulit kerbau. Hingga
              saat ini kulit kerbau juga bisa dibilang menjadi pilihan yang
              begitu banyak digunakan dalam proses pembuatan wayang.
            </p>
            <br />
            <p>
              Dalam proses pementasannya sendiri, pagelaran wayang kulit akan
              dimainkan oleh seorang yang kerap disebut sebagai dalang.
              Pementasan seni wayang tidak akan lengkap jika tidak diiringi oleh
              gamelan. Mereka yang memainkan gamelan juga bisa disebut dengan
              nayaga.
            </p>
          </div>
          <div className="mt-10" id="sunan-kalijaga">
            <figure>
              <img src="/images/sunan-kalijaga.jpg" />
              <figcaption className="mt-2 text-center ">
                Sunan Kalijaga - Tokoh Walisongo
              </figcaption>
            </figure>

            <h1 className="text-2xl font-poppins font-semibold mb-3 mt-7">
              Sunan Kalijaga
            </h1>
            <p>
              Sunan Kalijaga memanfaatkan kesenian budaya sebagai sarana
              berdakwah, salah satunya dengan wayang kulit yang tengah
              digandrungi sebagian besar Masyarakat Jawa. Mereka tertarik dengan
              pertunjukan wayang yang digelar oleh Sunan Kalijaga. Sunan
              Kalijaga tidak memungut biaya bagi masyarakat berbagai kalangan
              yang ingin menyaksikan pertunjukan wayang.
            </p>
            <br />
            <p>
              Sunan Kalijaga hanya meminta orang-orang yang datang menyaksikan
              untuk mengucapkan dua kalimat syahadat sebagai ganti biaya tiket
              masuknya. Metode ini terbukti efektif, masyarakat Jawa yang ketika
              itu menganut paham animisme secara perlahan mulai menerima ajaran
              Sunan Kalijaga. Bahkan banyak adipati di Jawa yang memeluk Islam
              dengan ajaran Sunan Kalijaga. Seperti adipati Kartasura,
              Pandanaran, Banyumas, Kebumen, dan Pajang.
            </p>
            <br />
          </div>

          <div className="flex gap-x-3 mt-9">
            <button className="p-3 rounded-md text-white bg-green-500">
              <FaRegCopy />
            </button>
            <button className="p-3 rounded-md text-white bg-blue-700">
              <FaFacebookF />
            </button>
            <button className="p-3 rounded-md text-white bg-pink-600">
              <FaInstagram />
            </button>
          </div>

          <div className="mt-16">
            <DiscussionEmbed
              shortname="wayangku"
              config={{
                url: "https://localhost:5173/sejarah",
                identifier: "9",
                title: "Wayangku",
                language: "id", //e.g. for Traditional Chinese (Taiwan)
              }}
            />
          </div>
        </section>
        <section className="basis-full md:basis-[36%] ">
          <div className="sticky top-20">
            <h2 className="font-poppins text-lg md:text-2xl font-bold uppercase">
              Table of Contents
            </h2>

            <div className="table-of-contents flex flex-col ">
              <a href="#start" className="font-poppins active">
                Sejarah Awal
              </a>
              <a href="#show" className="font-poppins ">
                Pementasan Wayang
              </a>
              <a href="#sunan-kalijaga" className="font-poppins ">
                Sunan Kalijaga
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
