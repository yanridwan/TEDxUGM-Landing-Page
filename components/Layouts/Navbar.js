import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { HamburgerMenu } from "../IconLogo";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <NavbarContainer isDarkMode={false} className="box-shadow">
      <div className="logo-section">
        <Link href="/" passHref>
          <Image
            className="logo logo-tedx"
            src="/assets/logo/tedx-logo.webp"
            alt="Logo TEDx UGM"
            layout="fill"
            objectFit="contain"
          />
        </Link>
      </div>
      <div className="navigation">
        <ul className={`navigation-link ${showMenu ? "show" : ""}`}>
          <li link-text="Home">
            <Link href="/">Home</Link>
          </li>
          <li link-text="Registration">
            <Link href="/register">Registration</Link>
          </li>
          <li link-text="Sponsor">
            <Link href="/sponsors">Sponsor</Link>
          </li>
          <li link-text="About TEDx">
            <Link href="/about-tedx">About TEDx</Link>
          </li>
          <li link-text="Our Team">
            <Link href="/our-team">Our Team</Link>
          </li>
        </ul>
        <div
          className="icon hamburger-menu"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <HamburgerMenu />
        </div>
      </div>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  width: 100%;
  height: 4rem;

  position: sticky;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--color-blue-maroon);
  color: var(--color-white);
  z-index: 999;

  box-shadow: -1px 3px 20px -2px rgba(0, 0, 0, 0.8);

  padding: 1rem;

  color: ${(props) => (props.isDarkMode ? "#00000" : "#123EFA")};

  .logo-section {
    width: 30%;
    height: 2rem;
    position: relative;
    display: flex;
    cursor: pointer;
    background-color: var(--color-white);
    border-radius: 0.5rem;

    img {
      padding: 0.35rem 0.6rem !important;
    }

    @media screen and (min-width: 768px) {
      width: 15%;
    }

    @media screen and (min-width: 1024px) {
      width: 10%;
    }
  }

  .navigation {
    display: flex;

    .navigation-link {
      @media screen and (max-width: 768px) {
        &.show {
          left: 0;
          transition: left 0.25s ease-in-out;
        }
        top: 4rem;
        left: -100%;

        z-index: -1;
      }

      width: 100%;

      display: flex;
      flex-direction: column;
      position: absolute;

      padding-left: 1rem;
      padding-bottom: 1rem;

      background-color: var(--color-blue-maroon);
      color: black;

      transition: left 0.25s ease-in-out;

      li {
        color: var(--color-white);

        min-width: 50px;
        margin-top: 0.5rem;
        transition: all 0.25s ease-in-out;

        text-align: center;
        font-weight: 500;

        &:hover {
          font-weight: bold;
          color: var(--color-red);
          transition: all 0.25s ease-in-out;
        }

        &::before {
          display: block;
          content: attr(link-text);
          font-weight: bold;
          height: 0;
          overflow: hidden;
          visibility: hidden;
        }
      }
    }

    .hamburger-menu {
      &:hover {
        cursor: pointer;
      }

      svg {
        height: 1.5rem;
        width: 1.5rem;

        path {
          stroke: var(--color-white);
        }
      }
    }

    @media screen and (min-width: 768px) {
      width: 100%;

      .navigation-link {
        top: 0;
        left: 0;

        height: 4rem;
        width: 100%;

        padding-bottom: 0;

        flex-direction: row;
        align-items: center;

        position: relative;

        li {
          margin-right: 1rem;
          margin-top: 0rem;
        }
      }

      .hamburger-menu {
        display: none;
      }
    }
  }
`;
