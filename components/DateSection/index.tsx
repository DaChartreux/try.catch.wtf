import React from "react";

import CalendarIcon from "@components/icons/CalendarIcon";

import style from "./DateSection.module.css";

const DateSection = ({ updatedAt }: { updatedAt: string }) => {
  return (
    <div className={style.container}>
      <CalendarIcon />
      <p>{updatedAt}</p>
    </div>
  );
};

export default DateSection;
