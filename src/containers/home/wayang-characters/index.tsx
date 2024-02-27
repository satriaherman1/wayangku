export default function WayangCharacters() {
  return (
    <div className="py-10 px-3 mt-5 relative z-10">
      <div className="container mx-auto ">
        <div className="flex flex-col gap-y-5 md:flex-row md:justify-between">
          <div className="basis-full md:basis-[48%]">
            <h1 className="text-3xl md:text-5xl font-bold ">
              Tokoh Pewayangan Indonesia
            </h1>
            <p className="text-lg md:text-2xl mt-5 font-poppins">
              Banyak tokoh pewayangan di Indonesia. diantaranya adalah Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Nulla totam
              tempora aliquam possimus nesciunt illum alias ab esse magnam
              mollitia.
            </p>
          </div>
          <div className="basis-full md:basis-[48%]  relative">
            <div>
              {/* <Swiper
                spaceBetween={20}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Navigation, Pagination]}
                breakpoints={{
                  576: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  // ketika lebar layar < 768px
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                }}
              >
                <SwiperSlide className="relative">
                  <ProfileCard
                    imageUrl="/images/wayang/arjuna.jpg"
                    title="Arjuna"
                    description="arjuna adalah wayang"
                  />
                </SwiperSlide>
                <SwiperSlide className="relative">
                  {" "}
                  <ProfileCard
                    imageUrl="/images/wayang/arjuna.jpg"
                    title="Arjuna"
                    description="arjuna adalah wayang"
                  />
                </SwiperSlide>
                <SwiperSlide className="relative">
                  {" "}
                  <ProfileCard
                    imageUrl="/images/wayang/arjuna.jpg"
                    title="Arjuna"
                    description="arjuna adalah wayang"
                  />
                </SwiperSlide>
              </Swiper> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
