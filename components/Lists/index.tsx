import React from "react";

import style from "./List.module.css";

const OrderedList = (props: any) => (
  <ol>
    {props.children.map(({ props: childProps }: any, i: number) => (
      // eslint-disable-next-line react/no-array-index-key
      <li className={style.item} key={i} {...childProps} />
    ))}
  </ol>
);

export default OrderedList;
