import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Layout from "../../components/Layouts/Layout";

export default function Sponsors() {
  return (
    <SponsorsStyle id="sponsors">
      <div className="container">
        <h2 className="title text-maroon-red">Sponsors</h2>
        <div className="sponsors-list sponsor-big">
          {SponsorsURLBig.map((imageItem, index) => {
            return (
              <div
                key={index}
                className={`image-container ${imageItem.className}`}
              >
                <Image
                  src={imageItem.src}
                  alt={imageItem.alt}
                  objectFit="contain"
                  layout="fill"
                />
              </div>
            );
          })}
        </div>
        <div className="sponsors-list sponsor-medium">
          {SponsorsURLMedium.map((imageItem, index) => {
            return (
              <div
                key={index}
                className={`image-container ${imageItem.className}`}
              >
                <Image
                  src={imageItem.src}
                  alt={imageItem.alt}
                  objectFit="contain"
                  layout="fill"
                />
              </div>
            );
          })}
        </div>
        <div className="sponsors-list sponsor-small">
          {SponsorsURLSmall.map((imageItem, index) => {
            return (
              <div
                key={index}
                className={`image-container ${imageItem.className}`}
              >
                <Image
                  src={imageItem.src}
                  alt={imageItem.alt}
                  objectFit="contain"
                  layout="fill"
                />
              </div>
            );
          })}
        </div>
      </div>
    </SponsorsStyle>
  );
}

Sponsors.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

const SponsorsStyle = styled.section`
  width: 100%;
  text-align: center;

  .sponsors-list {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .image-container {
    position: relative;

    cursor: pointer;

    transition: all 0.5s ease-in-out;

    &.image-small {
      height: 2rem;
      width: 10%;
    }

    &.image-medium {
      height: 5rem;
      width: 45%;
    }

    &.image-big {
      height: 10rem;
      width: 100%;
    }

    img {
      padding: 0.25rem !important;
    }

    &:hover {
      transform: scale(1.2);
      filter: grayscale(0);
      transition: all 0.5s ease-in-out;
    }

    @media screen and (min-width: 1024px) {
      height: 10rem;
      width: 12rem;
      filter: grayscale(100);

      img {
        padding: 0.5rem !important;
      }

      &.image-small {
        height: 3rem;
      }

      &.image-medium {
        height: 4rem;
        }

      &.image-big {
        height: 7rem;
      }
    }
  }
`;

const SponsorsURLBig = [
  {
    alt: "Logo Danamon",
    src: "/assets/logo/sponsors/logo-danamon.png",
    className: "image-big",
  },
];

const SponsorsURLMedium = [
  {
    alt: "Logo Askrindo",
    src: "/assets/logo/sponsors/logo-askrindo.png",
    className: "image-medium",
  },
  {
    alt: "Logo Lokalate",
    src: "/assets/logo/sponsors/logo-lokalate.png",
    className: "image-medium",
  },
  {
    alt: "Logo Paragon",
    src: "/assets/logo/sponsors/logo-paragon.png",
    className: "image-medium",
  },
  {
    alt: "Logo PJB",
    src: "/assets/logo/sponsors/logo-pjb.png",
    className: "image-medium",
  },
  {
    alt: "Logo Tiket.com",
    src: "/assets/logo/sponsors/logo-tiket.png",
    className: "image-medium",
  },
  {
    alt: "Logo BRI Insurance",
    src: "/assets/logo/sponsors/logo-bri-insurance.webp",
    className: "image-medium",
  },
];

const SponsorsURLSmall = [
  {
    alt: "Logo Raxsa",
    src: "/assets/logo/sponsors/logo-raxsa.png",
    className: "image-small",
  },
  {
    alt: "Logo Everyprint",
    src: "/assets/logo/sponsors/logo-everyprint.png",
    className: "image-small",
  },
  {
    alt: "Logo Volcano",
    src: "/assets/logo/sponsors/logo-volcano.png",
    className: "image-small",
  },
];
