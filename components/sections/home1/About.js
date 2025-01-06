import Link from "next/link"


export default function About() {
    return (
        <>
        {/*About One Start */}
        <section className="about-one" style={{marginTop:'50px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-one__left">
                            <div className="about-one__img wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <img src="assets/images/allimg/homepage/About.webp" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-one__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">ABOUT US</span>
                                </div>
                                <h2 className="section-title__title">Trusted Solutions for Modern Challenges</h2>
                            </div>
                            <p className="about-one__text">Team Arabia is a premier, high quality, innovative and young firm providing consultation services, Heavy equipment supply, full-service staffing and human resource (HR) outsourcing services operating in Kingdom of Saudi Arabia.</p>
                            <p className="about-one__text">Team Arabia is a recognized world-class leader in the executive search, temporary staffing, third-party employment and providing End to End management consultation services. Team Arabia has access to the best talent across the globe, while being close to its customers.</p>
                           
                            {/* <ul className="about-one__points-list list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-analytics"></span>
                                    </div>
                                    <div className="content">
                                        <h3><Link href="about">Smart Analytics</Link></h3>
                                        <p>Content Marketing printing Solutions: Engage, <br/> Inform, and Convert</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-prestige"></span>
                                    </div>
                                    <div className="content">
                                        <h3><Link href="about">Prestige Construction</Link></h3>
                                        <p>Content Marketing printing Solutions: Engage, <br/> Inform, and Convert</p>
                                    </div>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About One End */}
        </>
    )
}
