import React from "react";
import styled from "styled-components";

import { DigitalClock } from "../DigitalClock/DigitalClock";

export const RundownItem = ({ rundownName, clockIn, clockOut }) => {
  return (
    <RundownItemStyle>
      <div className="title rundown-name">
        <h6>{rundownName}</h6>
      </div>
      <DigitalClock clockIn={clockIn} clockOut={clockOut} />
    </RundownItemStyle>
  );
};

const RundownItemStyle = styled.div`
  width: 100%;
  padding: 1.5rem;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    .rundown-name {
        width: 75%;
        margin-bottom: 0;
    }
  }
`;
