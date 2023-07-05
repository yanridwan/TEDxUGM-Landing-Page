import React from "react"
import styled from "styled-components";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import Lottie from "react-lottie";

import Layout from "../components/Layouts/Layout";
import { Rundown } from "../components/Rundown";
import animationData from "../public/assets/lottie/bumper.json";

export default function Home() {
  const [isLoadingFinished, setIsLoadingFinished] = React.useState(false);

  const splashScreenOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const splashScreenEventListeners = [
    {
      eventName: 'complete',
      callback: () => {
        const splashScreenContainer = document.querySelector(".splash-screen-container");
        splashScreenContainer.classList.add("finishing");
        
        setTimeout(() => {
          const body = document.querySelector("body");
          body.style.overflow = "auto";

          setIsLoadingFinished(true);
        }, 2000);
      }
    }
  ];

  React.useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
  }, [])

  const speakers = [
    {
      imgUrl: "/assets/img/speaker/nadya-zafira.png",
      name: "Nadya Zafira",
      theme: "Mental Health"
    }, {
      imgUrl: "/assets/img/speaker/nusaibah-nugraha.png",
      name: "Nusaibah Edi Nugraha",
      theme: "Student Activism"
    }, {
      imgUrl: "/assets/img/speaker/dr-sita.png",
      name: "Dr. Sita Hidayah, S.Ant., M.A.",
      theme: "Indonesian Culture"
    }, {
      imgUrl: "/assets/img/speaker/m-affan.png",
      name: "Mohammad Affan Fajar Falah, S.T.P., M.Agr., Ph.D.",
      theme: "Biodegradable Packaging"
    }, {
      imgUrl: "/assets/img/speaker/m-andi-zaky.png",
      name: "Muhammad Andy Zaky",
      theme: "Technology"
    }, {
      imgUrl: "/assets/img/speaker/sekar-sari.png",
      name: "Sekar Sari",
      theme: "Women and Art"
    },
  ];

  return (
    <HomeContainer>
      {!isLoadingFinished && (
        <div className="splash-screen-container">
          <Lottie options={splashScreenOptions} eventListeners={splashScreenEventListeners} />
        </div>
      )}

      <div className="main-content">
        <section id="jumbotron">
          <div className="container">
            <div className="title-container">
              <h1 className="title">
                28 May 2022 <br />
                Auditorium Soegondo <br />
                FIB UGM
              </h1>
              <h3 className="location">Sleman, Yogyakarta</h3>
            </div>

            <img src="assets/img/illustration-tedx.png" alt="TEDx UGM" className="tedx-img" />
          </div>
        </section>

        <section id="about">
          <div className="container">
            <div className="title-container">
              <h2 className="title">
                About The <br />
                <span className="text-maroon-red">Theme</span>
              </h2>
              <img
                className="img-about"
                src="/assets/img/mask.png"
                alt="TEDx"
                width={80}
                height={80}
              />
            </div>

            <p className="desc">
              We want to emphasize the presence of humans on this earth and
              incorporate different aspects that influence our presence. Through
              this theme, every aspect that has ever happened and will happen in
              human history can be utilized into topics and ideas, thus allowing
              more diversity. <br />
              <br />
              The word <strong className="text-maroon-red">Time</strong>{" "}
              represents the different ages where the topic originated. We want to
              invite the audience to reflect on different aspects of the past and
              how it affects the present. Predicting the future is no easy task,
              we won’t try to touch that area. However, we would like to encourage
              the audience to realise that the future depends on now and that now,
              the TEDx event, should be a leap towards betterment of the world.{" "}
              <br />
              <br />
              <strong className="text-maroon-red">Space</strong> represents the
              environment, system, culture, and tradition that surrounds us from
              time to time. It influences our mindset and behaviour towards
              everything. Space can also mean the community we live in, where
              other human beings interact with us to please their (or our) social
              pleasure. <br />
              <br />
              <strong className="text-maroon-red">Us</strong> represents us; the
              speaker, committee, and attendees of this TEDx. It can represent the
              whole community as a whole but oftentimes, when we hear the word
              “us” we tend to reflect it within ourselves first. <br />
              <br />
            </p>
          </div>
        </section>

        <section id="speakers">
          <div className="container">
            <h2 className="title">
              Main Event
              <span className="text-maroon-red"> Speakers </span>
            </h2>

            <Fade bottom cascade>
              <div className="speakers-container">
                {speakers.map((speaker, i) => (
                  <div className="speaker" key={speaker.name}>
                    <div className="speaker-img-container">
                      <img src={speaker.imgUrl} alt={speaker.name} className="speaker-img" />
                    </div>
                    <h5 className="speaker-name">
                      {speaker.name}
                    </h5>
                    <p className="speaker-theme">
                      {speaker.theme}
                    </p>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </section>

        <section id="rundown">
          <div className="container">
            <h2 className="title text-maroon-red">Rundown</h2>
            <Rundown />
          </div>
        </section>

        <section id="register-now">
          <div className="container">
            <p>What are you waiting for?</p>
            <button className='btn-register-now'>
              <Link href="/register">Register TEDx UGM Now!</Link>
            </button>
          </div>
        </section>
      </div>
    </HomeContainer>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

const HomeContainer = styled.div`
  .splash-screen-container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 1000;
    background-color: black;
    transition: opacity 2s ease-in-out;

    &.finishing {
      opacity: 0;
    }
  }

  #jumbotron {
    position: relative;

    @media (min-width: 768px) {
      height: 70vh;
    }

    .container, .title-container {
      position: relative;
      height: 100%;
    }

    .title-container {
      text-transform: uppercase;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .title {
        font-size: 3.5rem;
        margin-bottom: 1.25rem;
      }

      .location {
        font-size: 1.75rem;
      }

      @media (max-width: 768px) {
        .title {
          font-size: 2.35rem;
        }
      }
    }

    .tedx-img {
      position: absolute;
      right: 0;
      top: -10%;
      width: 40%;
      z-index: -1;
      /* height: 50%; */
      /* transform: translate(-30%, 0); */

      @media (max-width: 992px) {
        top: 16%;
      }
    }
  }

  #about {
    position: relative;

    &:before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 12.5%;
      width: 100%;
      height: 100%;
      opacity: 0.25;
      background: url("assets/img/icon-pack-doodle.png");
      background-position: center center;
      background-size: contain;
      background-repeat: no-repeat;

      @media (max-width: 768px) {
        top: 5%;
        background-size: 100%;
        background-repeat: repeat-y;
      }
    }

    .title-container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: 2rem;
    }

    .title {
      margin-right: 1.5rem;
      margin-bottom: 0;

      @media (max-width: 768px) {
        margin-right: 0.75rem;
        margin-bottom: 1rem;
      }
    }

    .desc {
      text-align: justify;
    }
  }

  #speakers {
    position: relative;

    /* &:before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 7.5%;
      width: 100%;
      height: 100%;
      opacity: 0.25;
      background: url("assets/img/icon-pack-time.png");
      background-position: center center;
      background-size: contain;
      background-repeat: no-repeat;

      @media (max-width: 768px) {
        top: 5%;
        background-size: 100%;
        background-repeat: repeat-y;
      }
    } */
    
    .title {
      text-align: center;
    }

    .speakers-container {
      display: flex;
      flex-wrap: wrap;

      .speaker {
        flex: 0 0 33%;
        padding: 1rem;
        text-align: center;

        @media (max-width: 992px) {
          flex: 0 0 50%;
        }

        @media (max-width: 768px) {
          flex: 0 0 100%;
        }

        .speaker-img-container {
          position: relative;
          width: 256px;
          height: 256px;
          margin: 1rem auto;
          background-position: center center;
          background-size: cover;

          .speaker-img {
            width: 256px;
            filter: grayscale(100%);
            border-radius: 100%;
          }
        }

        .speaker-name {
          font-size: 1.35rem;
          margin-bottom: 0.5rem;
        }

        &:nth-child(odd) {
          .speaker-img-container {
            background-image: url("/assets/img/halo-1.png");
          }
        }

        &:nth-child(even) {
          .speaker-img-container {
            background-image: url("/assets/img/halo-2.png");
          }
        }
      }
    }
  }

  #rundown {
    .title {
      text-align: center;
    }
  }

  #register-now {
    text-align: center;

    .btn-register-now {
      border-radius: 1rem;
      margin: 0.85rem auto;
      padding: 0.75rem 1.5rem;
      border: 0;
      outline: 0;
      font-size: 1.5rem;
      font-weight: 600;
      background-color: white;
      color: var(--color-blue-maroon);
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);

      &:hover {
        background-color: var(--color-red);
        color: white;
      }
    }
  }
`;
