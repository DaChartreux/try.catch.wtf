import React from "react";

import CalendarIcon from "@components/icons/CalendarIcon";
import { ViewsContainerStyle } from "@components/ViewsSection/ViewsSection.style";

const DateSection = ({ updatedAt }: { updatedAt: string }) => {
  return (
    <ViewsContainerStyle>
      <CalendarIcon />
      <p>{updatedAt}</p>
    </ViewsContainerStyle>
  );
};

export default DateSection;
