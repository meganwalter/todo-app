import React from "react";
import {
  ProgressInner,
  ProgressOuter,
  ProgressPercent,
} from "./style";

const ProgressBar = props => {
  const { completed } = props;
  return (
    <>
      <ProgressPercent>{`${completed}%`}</ProgressPercent>
      <ProgressOuter>
        <ProgressInner completed={completed}/>
      </ProgressOuter>
    </>
  );
};

export { ProgressBar };
