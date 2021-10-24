import React from "react";

import ListItem from "@components/Lists/ListItem";

const OrderedList = (props: any) => (
  <ol>
    {props.children.map(({ props: childProps }: any, i: number) => (
      <ListItem key={i} {...childProps} />
    ))}
  </ol>
);

export default OrderedList;
