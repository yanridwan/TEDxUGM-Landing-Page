import React from "react";
import styled from "styled-components";

export const DigitalClock = ({ clockIn, clockOut }) => {
  const [hourIn, minuteIn] = clockIn.split(/[: ]+/);
  const [hourOut, minuteOut] = clockOut.split(/[: ]+/);

  return (
    <DigitalClockStyle className="clock font-digital text-maroon-red">
      <div className="digital-clock clock-in main-bg">
        <p className="title">
          {hourIn}
          <span className="blinking">:</span>
          {minuteIn}
        </p>
        <h6 className="text-white">CLOCK IN</h6>
      </div>

      <div className="digital-clock clock-out main-bg">
        <p className="title">
          {hourOut}
          <span className="blinking">:</span>
          {minuteOut}
        </p>
        <h6 className="text-white">CLOCK OUT</h6>
      </div>
    </DigitalClockStyle>
  );
};

const DigitalClockStyle = styled.div`
  max-width: 320px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  border-radius: 1.25rem;

  .digital-clock {
    width: 100%;

    padding: 1.5rem;
    border-radius: 1.25rem;
  }

  .digital-clock {
    margin-bottom: 1rem;
  }

  .title {
    margin: 0;
  }

  p,
  h6 {
    text-align: center;
  }

  h6 {
    font-size: 0.5rem;
  }

  p {
    font-size: 1.5rem;
  }
`;
