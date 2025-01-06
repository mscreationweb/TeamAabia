import Link from "next/link"
export default function Services2() {
    return (
        <>

        {/*Services Two Start */}
        <section className="services-two">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">What we offer</span>
                    </div>
                    <h2 className="section-title__title">Perfect Structures Building for<br/> a Sustainable Tomorrow </h2>
                </div>
                <div className="row">
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="services-two__single">
                            <div className="services-two__img-box">
                                <div className="services-two__img">
                                    <img src="assets/images/allimg/homepage/Human.webp" alt=""/>
                                </div>
                            </div>
                            <div className="services-two__content">
                                <h3 className="services-two__title"><Link href="services">Human Resources & Man Power Supply</Link></h3>
                                {/* <p className="services-two__text">Lorem Ipsum isly dummy text of the printing Lorem Ipsum
                                </p> */}
                                {/* <div className="services-two__btn-box">
                                    <Link href="service-details" className="services-two__btn thm-btn">Read more<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="services-two__single">
                            <div className="services-two__img-box">
                                <div className="services-two__img">
                                    <img src="assets/images/allimg/homepage/Heavy.webp" alt=""/>
                                </div>
                            </div>
                            <div className="services-two__content">
                                <h3 className="services-two__title"><Link href="services">Heavy Equipment Rentals</Link>
                                </h3>
                                {/* <p className="services-two__text">Lorem Ipsum isly dummy text of the printing Lorem Ipsum
                                </p> */}
                                {/* <div className="services-two__btn-box">
                                    <Link href="service-details" className="services-two__btn thm-btn">Read more<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="services-two__single">
                            <div className="services-two__img-box">
                                <div className="services-two__img">
                                    <img src="assets/images/allimg/homepage/Industrial.webp" alt=""/>
                                </div>
                            </div>
                            <div className="services-two__content">
                                <h3 className="services-two__title"><Link href="services">Industrial Training Services</Link>
                                </h3>
                                {/* <p className="services-two__text">Lorem Ipsum isly dummy text of the printing Lorem Ipsum
                                </p> */}
                                {/* <div className="services-two__btn-box">
                                    <Link href="service-details" className="services-two__btn thm-btn">Read more<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div> */}
                            </div>
                        </div>
                    </div>



                    
                    {/*Services Two Single End*/}
                </div>
            </div>
        </section>




        <section className="services-two" style={{marginTop:'-60px',marginBottom:'40px',justifyContent:'center'}}>
            <div className="container">
                
                <div className="row">
                    {/*Services Two Single Start*/}
                  
                    {/*Services Two Single End*/}
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="services-two__single">
                            <div className="services-two__img-box">
                                <div className="services-two__img">
                                    <img src="assets/images/allimg/homepage/Trading.webp" alt=""/>
                                </div>
                            </div>
                            <div className="services-two__content">
                                <h3 className="services-two__title"><Link href="services">Trading</Link>
                                </h3>
                                {/* <p className="services-two__text">Lorem Ipsum isly dummy text of the printing Lorem Ipsum
                                </p> */}
                                {/* <div className="services-two__btn-box">
                                    <Link href="service-details" className="services-two__btn thm-btn">Read more<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                    {/*Services Two Single Start*/}
                 
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="services-two__single">
                            <div className="services-two__img-box">
                                <div className="services-two__img">
                                    <img src="assets/images/allimg/homepage/Construction.webp" alt=""/>
                                </div>
                            </div>
                            <div className="services-two__content">
                                <h3 className="services-two__title"><Link href="services">Construction</Link>
                                </h3>
                                {/* <p className="services-two__text">Lorem Ipsum isly dummy text of the printing Lorem Ipsum
                                </p> */}
                                {/* <div className="services-two__btn-box">
                                    <Link href="service-details" className="services-two__btn thm-btn">Read more<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div> */}
                            </div>
                        </div>
                    </div>


                    
                    {/*Services Two Single End*/}
                </div>
            </div>
        </section>
        {/*Services Two End */}
            

        </>
    )
}
