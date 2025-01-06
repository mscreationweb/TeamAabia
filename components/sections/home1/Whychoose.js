'use client'
import Link from "next/link"


export default function Whychoose() {
    return (
        <>

        {/* Why Choose One Start */}
        <section className="why-choose-one" style={{marginBottom:'40px'}}>
            <div className="why-choose-one__bg"
                style={{ backgroundImage: 'url(assets/images/backgrounds/why-choose-one-bg.jpg' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="why-choose-one__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">Why Choose Us</span>
                                </div>
                                <h2 className="section-title__title">Logistics made simple <br/>transportation </h2>
                            </div>
                            <p className="why-choose-one__text" style={{marginBottom:'20px'}}>Power your projects with confidence! At Teamarabia, we specialize in delivering skilled manpower, state-of-the-art equipment rentals, and premium trading solutions to industries worldwide </p>
                            {/* <ul className="why-choose-one__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-crane"></span>
                                    </div>
                                    <h3>Comprehensive Solutions</h3>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-crane-1"></span>
                                    </div>
                                    <h3><Link href="about">Roof leak repair</Link></h3>
                                </li>
                            </ul> */}
                            <p className="why-choose-one__text"><span class="icon-dabble-arrow-right"></span> Comprehensive Solutions</p>
                            <p className="why-choose-one__text"><span class="icon-dabble-arrow-right"></span>  Commitment to Excellence</p>
                            <p className="why-choose-one__text"><span class="icon-dabble-arrow-right"></span> Reliable Partnerships</p>
                            <p className="why-choose-one__text"> <span class="icon-dabble-arrow-right"></span> Customer-Centric Approach</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Why Choose One End */}
            
        </>
    )
}
