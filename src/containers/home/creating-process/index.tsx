export default function CreatingProcess() {
  return (
    <div className="py-10 container mx-auto px-3 relative z-10">
      <h1 className="text-center md:py-[300px] font-poppins font-bold text-2xl md:text-8xl ">
        Proses Pembuatan <br /> Wayang Kulit
      </h1>

      <div className="mt-20 flex flex-col gap-y-20 md:gap-y-[120px]">
        <div className="flex flex-col-reverse gap-y-8 md:flex-row md:justify-between">
          <section className="md:basis-[47%]">
            <div className="px-4 py-1 h-fit block w-fit  text-3xl rounded-full bg-yellow-500">
              1
            </div>
            <h2 className="font-bold text-2xl md:text-4xl font-poppins mt-4">
              Pengerokan kulit.
            </h2>

            <p className="mt-3 text-lg">
              Kulit dikerok dengan menggunakan pisau atau pethel sedikit demi
              sedikit secara hati-hati. Kulit bagian dalam dikerok terlebih
              dahulu dan lebih banyak dikurangi agar diperoleh kulit yang
              berkualitas. Setelah itu, baru dilanjutkan pengerokan kulit bagian
              luar. Pengerokan kulit bagian luar hanya sedikit saja karena bila
              dilakukan pengurangan terlalu banyak maka kulit yang dihasilkan
              akan menjadi mudah patah bila dilipat
            </p>
          </section>

          <section className="md:basis-[47%]">
            <img
              src="/images/wayang/pengerokan.jpg"
              className="w-full lg:w-[80%] mx-auto"
              alt=""
            />
          </section>
        </div>
        <div className="flex flex-col gap-y-8 md:flex-row md:justify-between">
          <section className="md:basis-[47%]">
            <img
              src="/images/wayang/pengeringan.jpg"
              className="w-full lg:w-[80%] mx-auto"
              alt=""
            />
          </section>

          <section className="md:basis-[47%]">
            <div className="px-4 py-1 h-fit block w-fit  text-3xl rounded-full bg-yellow-500">
              2
            </div>
            <h2 className="font-bold text-2xl md:text-4xl font-poppins mt-4">
              Pengeringan
            </h2>

            <p className="mt-3 text-lg">
              Setelah kulit ditipiskan, sisa-sisa kerokan dibersihkan dengan air
              dan bagian yang dikerok dihaluskan dengan amplas. Selanjutnya,
              dijemur di panas sinar matahari lagi hingga kering secara merata.
            </p>
          </section>
        </div>
        <div className="flex flex-col-reverse gap-y-8 md:flex-row md:justify-between">
          <section className="md:basis-[47%]">
            <div className="px-4 py-1 h-fit block w-fit  text-3xl rounded-full bg-yellow-500">
              3
            </div>
            <h2 className="font-bold text-2xl md:text-4xl font-poppins mt-4">
              Tatah
            </h2>

            <p className="mt-3 text-lg">
              Setelah kering, kulit dilapisi dengan warna dasar untuk menutup
              pori-pori kulit agar permukaannya rata. Kemudian mulai dibentuk
              sketsa di permukaan kulit. Setelah itu, tepi sketsa ditatah
              sehingga diperoleh{" "}
              <span className="bg-yellow-300">bentuk dasar.</span> Tahap
              selanjutnya adalah memperhalus tatahan dasar dan membuat kombinasi
              yang indah dalam terawangan cahaya. Setelah terbentuk wayang
              secara kasar, maka bagian muka dan detail lainnya di bagian sketsa
              dalam mulai ditatah.
            </p>
          </section>

          <section className="md:basis-[47%]">
            <img
              src="/images/wayang/tatah.jpg"
              className="w-full lg:w-[80%] mx-auto"
              alt=""
            />
          </section>
        </div>
        <div className="flex flex-col gap-y-8 md:flex-row md:justify-between">
          <section className="md:basis-[47%]">
            <img
              src="/images/wayang/pewarnaan.jpg"
              className="w-full lg:w-[80%] mx-auto"
              alt=""
            />
          </section>

          <section className="md:basis-[47%]">
            <div className="px-4 py-1 h-fit block w-fit  text-3xl rounded-full bg-yellow-500">
              4
            </div>
            <h2 className="font-bold text-2xl md:text-4xl font-poppins mt-4">
              Pewarnaan
            </h2>

            <p className="mt-3 text-lg">
              Putihan tersebut diwarnai dengan menggunakan pewarna sintetis,
              yaitu cat Sandy Colour, dan menggunakan perekat rakol (lem Fox).
              Setelah selesai dicat dan disempurnakan, wayang kulit diberi
              penyangga dengan menggunakan tanduk kerbau atau bambu.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
