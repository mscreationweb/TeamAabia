'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function Services2() {
    return (
        <>
        {/* Services Eight Start */}
        <section className="services-eight" >
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Best Service</span>
                    </div>
                    <h2 className="section-title__title">Constructing dreams one <br /> brick at a time</h2>
                </div>
                <div className="services-eight__carousel-box">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        slidesPerView={2}
                        spaceBetween={0}
                        loop={true}
                        navigation={{
                            nextEl: '.h1n',
                            prevEl: '.h1p',
                        }}
                        pagination={{
                            el: '.swiper-pagination',
                            clickable: true,
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 30 },
                            575: { slidesPerView: 1, spaceBetween: 30 },
                            767: { slidesPerView: 1, spaceBetween: 30 },
                            991: { slidesPerView: 2, spaceBetween: 30 },
                            1199: { slidesPerView: 2, spaceBetween: 30 },
                            1350: { slidesPerView: 2, spaceBetween: 30 },
                        }}
                        className="thm-swiper__slider swiper-container"
                    >
                        <SwiperSlide>
                            <div className="services-eight__single">
                                <div className="services-eight__img-box">
                                    <div className="services-eight__img">
                                        <img src="assets/images/allimg/service/Human.webp" alt="" />
                                    </div>
                                </div>
                                <div className="services-eight__content">
                                    <div className="services-eight__title-box">
                                        <div className="services-eight__icon">
                                            <span className="icon-engineer-2"></span>
                                        </div>
                                        <h4 className="services-eight__title">Human Resources &<br /> Manpower Supply</h4>
                                    </div>
                                    <p className="services-eight__text">
                                        End-to-end recruitment solutions for skilled, semi-skilled, and unskilled labor.
                                        Flexible staffing options: temporary, permanent, and project-based.
                                        HR support services including payroll, compliance, and workforce management.
                                        Reliable manpower tailored to meet your industry's unique demands.
                                    </p>
                                    <div className="services-eight__btn-box">
                                        <Link href="contact" className="services-eight__btn thm-btn">
                                            Contact Us<span className="icon-dabble-arrow-right"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="services-eight__single">
                                <div className="services-eight__img-box">
                                    <div className="services-eight__img">
                                        <img src="assets/images/allimg/service/Trading.webp" alt="" />
                                    </div>
                                </div>
                                <div className="services-eight__content">
                                    <div className="services-eight__title-box">
                                        <div className="services-eight__icon">
                                            <span className="icon-analytics"></span>
                                        </div>
                                        <h4 className="services-eight__title">Trading</h4>
                                    </div>
                                    <p className="services-eight__text">
                                        Supply of premium construction materials: aggregates, sand, concrete, and steel.
                                        Reliable sourcing and logistics for timely project support.
                                        Competitive pricing and superior service tailored to client needs.
                                        Commitment to delivering materials that meet industry standards.
                                    </p>
                                    <div className="services-eight__btn-box">
                                        <Link href="contact" className="services-eight__btn thm-btn">
                                            Contact Us<span className="icon-dabble-arrow-right"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="services-eight__carousel-box" style={{marginTop:'30px'}}>
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        slidesPerView={2}
                        spaceBetween={0}
                        loop={true}
                        navigation={{
                            nextEl: '.h1n',
                            prevEl: '.h1p',
                        }}
                        pagination={{
                            el: '.swiper-pagination',
                            clickable: true,
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 30 },
                            575: { slidesPerView: 1, spaceBetween: 30 },
                            767: { slidesPerView: 1, spaceBetween: 30 },
                            991: { slidesPerView: 2, spaceBetween: 30 },
                            1199: { slidesPerView: 2, spaceBetween: 30 },
                            1350: { slidesPerView: 2, spaceBetween: 30 },
                        }}
                        className="thm-swiper__slider swiper-container"
                    >
                        <SwiperSlide>
                            <div className="services-eight__single">
                                <div className="services-eight__img-box">
                                    <div className="services-eight__img">
                                        <img src="assets/images/allimg/service/Construction.webp" alt="" />
                                    </div>
                                </div>
                                <div className="services-eight__content">
                                    <div className="services-eight__title-box">
                                        <div className="services-eight__icon">
                                            <span className="icon-engineer-2"></span>
                                        </div>
                                        <h4 className="services-eight__title">Construction Services</h4>
                                    </div>
                                    <p className="services-eight__text">
                                        Expertise in civil works, mechanical, painting, roads and asphalt, fire and safety, and industrial construction.
                                        Project management solutions ensuring quality, safety, and timely delivery.
                                        Sustainable and innovative approaches to construction.
                                    </p>
                                    <div className="services-eight__btn-box">
                                        <Link href="contact" className="services-eight__btn thm-btn">
                                            Contact Us<span className="icon-dabble-arrow-right"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="services-eight__single">
                                <div className="services-eight__img-box">
                                    <div className="services-eight__img">
                                        <img src="assets/images/allimg/service/Heavy.webp" alt="" />
                                    </div>
                                </div>
                                <div className="services-eight__content">
                                    <div className="services-eight__title-box">
                                        <div className="services-eight__icon">
                                            <span className="icon-analytics"></span>
                                        </div>
                                        <h4 className="services-eight__title">Heavy Equipment Rental</h4>
                                    </div>
                                    <p className="services-eight__text">
                                    Construction is the process of designing, planning, and building infrastructure like buildings, bridges, and roads, combining expertise, creativity, and sustainability to create functional, lasting environments that support societal growth.
                                    </p>
                                    <div className="services-eight__btn-box">
                                        <Link href="contact" className="services-eight__btn thm-btn">
                                            Contact Us<span className="icon-dabble-arrow-right"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>


                <div className="services-eight__carousel-box" style={{marginTop:'30px',marginBottom:'20px'}}>
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        slidesPerView={2}
                        spaceBetween={0}
                        loop={true}
                        navigation={{
                            nextEl: '.h1n',
                            prevEl: '.h1p',
                        }}
                        pagination={{
                            el: '.swiper-pagination',
                            clickable: true,
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 30 },
                            575: { slidesPerView: 1, spaceBetween: 30 },
                            767: { slidesPerView: 1, spaceBetween: 30 },
                            991: { slidesPerView: 2, spaceBetween: 30 },
                            1199: { slidesPerView: 2, spaceBetween: 30 },
                            1350: { slidesPerView: 2, spaceBetween: 30 },
                        }}
                        className="thm-swiper__slider swiper-container"
                    >
                        <SwiperSlide>
                            <div className="services-eight__single">
                                <div className="services-eight__img-box">
                                    <div className="services-eight__img">
                                        <img src="assets/images/allimg/service/Industrial.webp" alt="" />
                                    </div>
                                </div>
                                <div className="services-eight__content">
                                    <div className="services-eight__title-box">
                                        <div className="services-eight__icon">
                                            <span className="icon-engineer-2"></span>
                                        </div>
                                        <h4 className="services-eight__title">Industrial Training Services</h4>
                                    </div>
                                    <p className="services-eight__text">
                                    Tailored training programs to enhance workforce skills and efficiency. Specialized courses in safety, technical expertise, and operational excellence. Certified trainers with hands-on industry experience. Programs designed to meet the specific requirements of industrial sectors.
                                    </p>
                                    <div className="services-eight__btn-box">
                                        <Link href="contact" className="services-eight__btn thm-btn">
                                            Contact Us<span className="icon-dabble-arrow-right"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                      
                    </Swiper>
                </div>
            </div>
        </section>
        </>
    )
}
