import React from 'react';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Section2 = () => {
    return (
        <section className="bg-slate-300">
            <div className="text-white pt-8">
                <h1 className="text-center text-2xl">-- THÀNH TỰU --</h1>
                <h2 className="text-center text-2xl">THÀNH TỰU CỦA CHÚNG TÔI</h2>
            </div>
            <div className="select-none items-center max-w-screen-xl px-4 py-8 mx-auto lg:pb-16 lg:px-6">
                <Swiper
                    effect={'coverflow'}
                    grabCursor
                    centeredSlides
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 10,
                        stretch: -40,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    initialSlide={4}
                    pagination
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Section2;
