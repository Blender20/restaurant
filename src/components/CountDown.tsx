"use client";
import React from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2023-09-01");
const CountDown = () => {
  return (
    <Countdown className="font-bold text-5xl text-red-500" date={endingDate} />
  );
};
export default CountDown;
