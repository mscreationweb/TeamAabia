'use client';
import Link from 'next/link';
import { useState } from 'react';

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: '',
    subMenuKey: '',
  });

  const handleToggle = (key, subMenuKey = '') => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: '',
        subMenuKey: '',
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  return (
    <>
      <div className="mobile-nav__wrapper">
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={handleMobileMenu}
        ></div>
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <Link href="/" aria-label="logo image">
              <img
                src="assets/images/allimg/logo/teamlogo.png"
                width="150"
                alt=""
              />
            </Link>
          </div>

          <div className="mobile-nav__container">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="main-menu__list">
                <li>
                  <Link href="/" onClick={handleMobileMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" onClick={handleMobileMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" onClick={handleMobileMenu}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={handleMobileMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <Link href="mailto:info@teamarabiaksa.com">
                info@teamarabiaksa.com
              </Link>
            </li>
          </ul>

          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link href="#" className="fab fa-twitter"></Link>
              <Link href="#" className="fab fa-facebook-square"></Link>
              <Link href="#" className="fab fa-pinterest-p"></Link>
              <Link href="#" className="fab fa-instagram"></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
