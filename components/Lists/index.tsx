import React from "react";

import ListItem from "@components/Lists/ListItem";

const OrderedList = (props: any) => (
  <ol>
    {props.children.map(({ props: childProps }: any, i: number) => (
      // eslint-disable-next-line react/no-array-index-key
      <ListItem key={i} {...childProps} />
    ))}
  </ol>
);

export default OrderedList;
