"use client";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import DarkMode from "../DarkMode/DarkMode";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

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
  return (
    <header className="header">
      <nav className="container flex justify-between items-center h-100">
        <div>
          {/* <Image src="./logo.png" width={50} height={50} alt="logo" /> */}
          <Link href="/" className="logo-name">My Store</Link>
        </div>
        <div className="space-x-5 flex justify-center items-center">
          <DarkMode />

          {links &&
            links.map((link) => {
              return (
                <Link key={link.id} href={link.url} className="">
                  {link.title}
                </Link>
              );
            })}

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
    </header>
  );
};

export default Header;
