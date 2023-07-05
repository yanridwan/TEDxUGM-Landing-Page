import React from "react";
import styled from "styled-components";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { RundownItem } from "./RundownItem/RundownItem";

export const Rundown = ({ rundownName, clockIn, clockOut }) => {
  const rundownData = RundownData;

  return (
    <RundownStyle>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={true}
        modules={[Pagination]}
      >
        {rundownData.map((rundownItem, index) => {
          return (
            <SwiperSlide key={index}>
              <RundownItem
                rundownName={rundownItem.agendaName}
                clockIn={rundownItem.clockIn}
                clockOut={rundownItem.clockOut}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </RundownStyle>
  );
};

const RundownStyle = styled.div`
  max-width: 768px;
  width: 100%;

  margin-left: auto;
  margin-right: auto;

  background-color: rgba(12, 38, 56, 0.67);
  box-shadow: 0 8px 32px 0 rgb(31 38 135 / 17%);
  backdrop-filter: blur(10px);

  border-radius: 1.25rem;
`;

const RundownData = [
  {
    agendaName: "Re-registration",
    clockIn: "09:30",
    clockOut: "10:30",
  },
  {
    agendaName: "Open Gate",
    clockIn: "10:00",
    clockOut: "10:30",
  },
  {
    agendaName: "MC Opening",
    clockIn: "10:30",
    clockOut: "10:35",
  },
  {
    agendaName: "Opening Speech",
    clockIn: "10:35",
    clockOut: "10:40",
  },
  {
    agendaName: "Opening Symbolic",
    clockIn: "10:40",
    clockOut: "10:43",
  },
  {
    agendaName: "Opening Performance",
    clockIn: "10:43",
    clockOut: "11:00",
  },
  {
    agendaName: "Speaker 1 Session",
    clockIn: "11:00",
    clockOut: "11:21",
  },
  {
    agendaName: "Speaker 2 Session",
    clockIn: "11:21",
    clockOut: "11:42",
  },
  {
    agendaName: "Lunch Break",
    clockIn: "11:42",
    clockOut: "12:15",
  },
  {
    agendaName: "After Lunch Open Gate",
    clockIn: "12:15",
    clockOut: "12:30",
  },
  {
    agendaName: "Speaker 3 Session",
    clockIn: "12:30",
    clockOut: "12:53",
  },
  {
    agendaName: "Speaker 4 Session",
    clockIn: "12:53",
    clockOut: "13:16",
  },
  {
    agendaName: "Speaker 5 Session",
    clockIn: "13:16",
    clockOut: "13:39",
  },
  {
    agendaName: "Talk - Speaker 5",
    clockIn: "12:15",
    clockOut: "12:45",
  },
  {
    agendaName: "Photo Session",
    clockIn: "13:39",
    clockOut: "13:45",
  },
  {
    agendaName: "Experience Zone",
    clockIn: "13:45",
    clockOut: "till end",
  },
];
