import React from "react";
import styled from "styled-components";
import { InstagramLogo, TiktokLogo, TwitterLogo } from "../IconLogo";

export default function Footer() {
  return (
    <FooterContainer>
      <span>Copyright 2022 | TEDx UGM</span>
      <div>
        <span>
          <strong>Find Us On:</strong>
        </span>
        <ul className="social-media">
          <li className="social-media-link tiktok">
            <a href="https://www.tiktok.com/@tedxugm" target="_blank" rel="noreferrer">
            <TiktokLogo />
            </a>
          </li>
          <li className="social-media-link instagram">
          <a href="https://www.instagram.com/tedxugm/" target="_blank" rel="noreferrer">
            <InstagramLogo />
            </a>
          </li>
          <li className="social-media-link twitter">
          <a href="https://twitter.com/tedxugmid" target="_blank" rel="noreferrer">
            <TwitterLogo />
            </a>
          </li>
        </ul>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;

  margin-left: auto;
  margin-right: auto;

  background-color: var(--color-blue-maroon);

  font-size: 0.8rem;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    margin-top: 0.75rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  span {
    margin-right: 0.5rem;
  }

  .social-media {
    display: flex;
    flex-direction: row;

    li svg {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
      width: 1.5rem;
      height: 1.5rem;
      cursor: pointer;

      path {
        fill: var(--color-white);
        transition: fill 0.25s ease-in-out;
      }

      &:hover {
        path {
          fill: var(--color-red);
          transition: fill 0.25s ease-in-out;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;

    div {
      margin-left: 2rem;
      margin-top: 0rem;
    }
  }
`;
