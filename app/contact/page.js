
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
    <Layout headerStyle={1} footerStyle={5} breadcrumbTitle="Contact" >
        
        {/*Contact Page Start*/}
        <section className="contact-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-page__left">
                            <div className="contact-page__img">
                                <img src="assets/images/allimg/logo/contact/Contact Us Image.webp" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-page__right">
                            <h3 className="contact-page__title">Let us know about your
                                next project</h3>
                            <ul className="contact-page__contact-list list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-location"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Address</h3>
                                        <p>P.O Box: 4850, Al-Jubail - 31954, <br/> Kingdom of Saudi Arabia
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-call"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Phone number</h3>
                                        <p><Link href="tel:66 539402676">+966 539402676

                                        </Link></p>
                                        <p><Link href="tel:966 50591 5463">+966 50591 5463
                                        </Link></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-email"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Email</h3>
                                        <p><Link href="mailto:info@teamarabiaksa.com">info@teamarabiaksa.com
                                        </Link></p>
                                    </div>
                                </li>
                            </ul>
                            <div className="contact-page__social">
                                <Link href="#"><i className="icon-instagram"></i></Link>
                                <Link href="#"><i className="icon-email"></i></Link>
                                {/* <Link href="#"><i className="icon-instagram"></i></Link>
                                <Link href="#"><i className="icon-link-in"></i></Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Contact Page End*/}

        {/*Google Map Start*/}
        <section className="google-map-one">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10832.930673166664!2d49.65135803218491!3d26.98515314726782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e35a1b1c7a917c1%3A0x2aa5d1deebaa3c7b!2sAl%20Dakhal%20Al%20Mahdud%20Subdivision%2C%20Al%20Jubail%2035513%2C%20Saudi%20Arabia!5e1!3m2!1sen!2sin!4v1735882226267!5m2!1sen!2sin"
                className="google-map__one"></iframe>

        </section>
        {/*Google Map End*/}

        {/*Contact Three Start*/}
        <section className="contact-three">
            <div className="container">
                <div className="row">
                    <div className="section-title text-center">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Get in touch</span>
                        </div>
                        <h2 className="section-title__title">Send us a message</h2>
                    </div>
                    <form action="assets/inc/sendemail.php" className="contact-three__form contact-form-validated">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6">
                                <div className="contact-three__input-box">
                                    <input type="text" placeholder="Your Name" name="name"/>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
                                <div className="contact-three__input-box">
                                    <input type="email" placeholder="Your Email" name="email"/>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
                                <div className="contact-three__input-box">
                                    <input type="text" placeholder="Phone Number" name="Phone"/>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
                                <div className="contact-three__input-box">
                                    <input type="text" placeholder="Your Subject" name="Subject"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="contact-three__input-box text-message-box">
                                    <textarea name="message" placeholder="Write your Message"></textarea>
                                </div>
                                <div className="contact-three__btn-box">
                                    <button type="submit" className="thm-btn contact-three__btn">Send message<span
                                            className="icon-dabble-arrow-right"></span></button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="result"></div>
                </div>
            </div>
        </section>
        {/*Contact Three End*/}

        {/*CTA One Start*/}
        {/* <section className="cta-one">
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__shape-1">
                        <img src="assets/images/shapes/cta-one-shape-1.png" alt=""/>
                    </div>
                    <div className="cta-one__img">
                        <img src="assets/images/resources/cta-one-img.png" alt=""/>
                    </div>
                    <h3 className="cta-one__title">Craftin digital experiences<br/> With that inspire</h3>
                    <div className="cta-one__from-box">
                        <form className="cta-one__form">
                            <div className="cta-one__input-box">
                                <input type="email" placeholder="Your E-mail" name="email"/>
                            </div>
                            <button type="submit" className="cta-one__btn thm-btn">Subscribe Us</button>
                        </form>
                    </div>
                </div>
            </div>
        </section> */}
        {/*CTA One End*/}

    </Layout>
    </>
    )
}