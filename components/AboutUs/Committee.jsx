import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

export default function Committee(props) {
  const { title, division, committee, text } = props;
  const committeeData = {
    Equipment: [],
    PublicRelation: [],
    Curev: [],
    Fundaraising: [],
    Loco: [],
    DDDweb: [],
    Organizer: [],
    Treasure: [],
  };

  const getCommitte = () => {
    committeeData.Equipment = committee.results[0].data.body[0].items;
    committeeData.DDDweb = committee.results[1].data.body[0].items;
    committeeData.Loco = committee.results[2].data.body[0].items;
    committeeData.PublicRelation = committee.results[3].data.body[0].items;
    committeeData.Curev = committee.results[4].data.body[0].items;
    committeeData.Fundaraising = committee.results[5].data.body[0].items;
    committeeData.Organizer = committee.results[6].data.body[0].items;
    committeeData.Treasure = committee.results[7].data.body[0].items;
  };

  return (
    <CommitteeStyle division={division}>
      <Fade top>
        <div className="title-aktor-bottom">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </Fade>
      <div className="card-grid">
        {
          (getCommitte(),
          committeeData[division]?.map((item, index) => {
            // console.log(item.committee_position[0]?.text);
            return (
              <Zoom key={index}>
                <div className="committee-container">
                  <div className="name-profile">
                    <p>{item.committee_name[0]?.text}</p>
                  </div>
                  <div className="position-profile">
                    <p>{item.committee_position[0]?.text}</p>
                  </div>
                  <img
                    src="\assets\img\committee\cocard-background.png"
                    alt=""
                    className="img-bg"
                  />
                  <div className="img-profile">
                    <img src={item.committee_profile.url} alt="" />
                  </div>
                </div>
              </Zoom>
            );
          }))
        }
      </div>
    </CommitteeStyle>
  );
}

const CommitteeStyle = styled.div`
  height: auto;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-cream);
  position: relative;
  margin-top: 5vh;
  padding: 5vh;

  .title-aktor-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .title-aktor-bottom > h1 {
    font-weight: 500;
    text-align: center;
    font-size: 5vh;
  }
  .title-aktor-bottom > p {
    font-weight: 500;
    text-align: center;
    font-size: 2.5vh;
    margin-top: 2vh;
  }

  .diamond {
    height: 4vh;
    width: 4vh;
    margin: 3vh;
  }
  .committee-container {
    width: 15vw;
    height: 15vw;
    border: 0.7vh solid black;
    box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.5);
    position: relative;
    overflow: hidden;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .card-grid {
    margin-top: 5vmin;
    height: auto;
    width: 70%;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: ${(props) =>
      props.division === "Organizer"
        ? "repeat(2, 1fr)"
        : props.division === "Treasure"
        ? "repeat(3, 1fr)"
        : "repeat(4, 1fr)"};
    justify-items: center;
    align-items: center;
    gap: 4vh 0;
  }
  .img-profile {
    position: absolute;
    z-index: 2;
    height: 10vw;
    width: 10vw;
    bottom: 0;
    left: 5vw;
  }
  .name-profile {
    position: absolute;
    z-index: 3;
    width: 8vw;

    bottom: 5vw;

    p {
      padding: 0.5vw 1vw;
      font-size: 1vw;
    }
  }
  .position-profile {
    position: absolute;
    z-index: 3;
    width: 8vw;

    bottom: 3vw;
    p {
      font-size: 1vw;
      padding: 0.5vw 1vw;
    }
  }
  .img-bg {
    position: absolute;
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    .title-aktor-bottom {
      margin-bottom: 2vh;
    }
    .title-aktor-bottom > h1 {
      font-size: 5vh;
    }
    .diamond {
      height: 3vh;
      width: 3vh;
      margin: 2vh;
    }
    .committee-container {
      width: 70vw;
      height: 60vw;
      border: 0.7vh solid black;
    }
    .card-grid {
      width: 90%;
      grid-template-columns: repeat(1, 1fr);

      gap: 4vh 0;
    }

    .img-profile {
      position: absolute;
      z-index: 2;
      height: 40vw;
      width: 40vw;
      bottom: 0;
      left: 28vw;
    }
    .name-profile {
      position: absolute;
      z-index: 3;
      width: 30vw;
      padding: 0.5vw 1vw;
      bottom: 23vw;
      left: 7vw;

      p {
        font-size: 4vw;
      }
    }
    .position-profile {
      position: absolute;
      z-index: 3;
      width: 6vw;
      padding: 0.5vw 1vw;
      bottom: 15vw;
      left: 7vw;
      p {
        font-size: 4vw;
      }
    }
  }
`;
