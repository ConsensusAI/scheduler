import React from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import { Fragment } from "react";

import "./styles.scss";

export default function Appointment(props) {
  return (
    <article className="appointment">
      <Header time={props.time} />
      {props.interview ? <Show /> : <Empty />}
    </article>
  );
}
