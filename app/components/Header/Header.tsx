"use client";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import DarkMode from "../DarkMode/DarkMode";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faCircle,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Navbar, Offcanvas } from "react-bootstrap";

const Header = () => {
  const session = useSession();
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "About",
      url: "/about",
    },
    {
      id: 3,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 4,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 5,
      title: "Products",
      url: "/products",
    },
  ];

  const [showNavbar, setShowNavbar] = useState(false);

  const showNav = () => {
    setShowNavbar(true);
  };

  const handleClose = () => {
    setShowNavbar(false);
  };

  return (
    <header className="header">
      <nav className="container flex justify-between items-center h-100">
        <div className="d-flex items-center gap-3">
          <span className="nav-btn d-block d-md-none" onClick={showNav}>
            <FontAwesomeIcon icon={faBars} size={"xl"} />
          </span>
          <Link href="/" className="logo-name">
            My Store
          </Link>
        </div>
        <div className="space-x-5 flex justify-center items-center">
          <DarkMode />
          <Navbar className="header-navbar d-none d-md-flex">
            {links &&
              links.map((link) => {
                return (
                  <Link key={link.id} href={link.url}>
                    {link.title}
                  </Link>
                );
              })}
          </Navbar>

          <Link href={"./cart"} className="shop-icon">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>

          {session.status == "authenticated" && (
            <button onClick={() => signOut} className="text-red-500">
              <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
          )}
        </div>
      </nav>
      <Offcanvas show={showNavbar} onHide={handleClose}> 
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Store</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Navbar className="flex flex-col items-start gap-y-2">
            {links &&
              links.map((link) => {
                return (
                  <Link className="w-100 py-2" key={link.id} href={link.url} onClick={handleClose}>
                    <FontAwesomeIcon icon={faCircle} size={"xs"} />
                    {link.title}
                  </Link>
                );
              })}
          </Navbar>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;
