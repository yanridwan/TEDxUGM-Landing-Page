import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <AboutStyle>
      <section>
        <div className="container">
          <div className="about-tedx">
          <h2 className="title text-maroon-red">ABOUT TEDx</h2>
          <p>
            x = independently organized event <br />
            In the spirit of ideas worth spreading, TEDx is a program of local,
            self-organized events that bring people together to share a TED-like
            experience. At a TEDx event, TED Talks video and live speakers combine
            to spark deep discussion and connection. These local, self-organized
            events are branded TEDx, where x = independently organized TED event.
            The TED Conference provides general guidance for the TEDx program, but
            individual TEDx events are self-organized. (Subject to certain rules
            and regulations.)
          </p>
        </div>

        <div className="about-ted">
          <h2 className="title text-maroon-red">ABOUT TED</h2>
          <p>
            TED is a nonprofit organization devoted to Ideas Worth Spreading.
            Started as a four-day conference in California 30 years ago, TED has
            grown to support its mission with multiple initiatives. The two annual
            TED Conferences invite the world&apos;s leading thinkers and doers to
            speak for 18 minutes or less. Many of these talks are then made
            available, free, at TED.com. TED speakers have included Bill Gates,
            Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani,
            Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
            <br /> <br />
            The annual TED Conference takes place each spring in Vancouver,
            British Columbia. TED&apos;s media initiatives include TED.com, where
            new TED Talks are posted daily; TED Translators, which provides
            subtitles and interactive transcripts as well as translations from
            volunteers worldwide; the educational initiative TED-Ed. TED has
            established The Audacious Project that takes a collaborative approach
            to funding ideas with the potential to create change at thrilling
            scale; TEDx, which supports individuals or groups in hosting local,
            self- organized TED-style events around the world, and the TED Fellows
            program, helping world-changing innovators from around the globe to
            amplify the impact of their remarkable projects and activities.
            <br />
            <br />
          </p>
          {/* <span>
            Follow TED on Twitter at
            <a
              href="http://twitter.com/TEDTalks"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://twitter.com/TEDTalks
            </a>
            , or on Facebook at
            <a
              href="http://www.facebook.com/TED"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.facebook.com/TED.
            </a>
          </span> */}
        </div>
        </div>
      </section>
    </AboutStyle>
  );
}

const AboutStyle = styled.div`
  /* height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 5vh; */

  .title {
    margin-bottom: 0.75rem;
  }

  .about-tedx, .about-ted {
    text-align: justify;
  }

  .about-tedx {
    margin-bottom: 2rem;
  }

  &:before {
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
  }
`;
