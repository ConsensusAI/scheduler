import React from "react";
import classNames from "classnames";

import "components/DayListItem.scss";

function formatSpots(spots) {
  if (spots === 1) {
    return "1 spot remaining";
  } else if (spots === 0) {
    return "no spots remaining";
  }
  return `${spots} spots remaining`;
}

export default function DayListItem(props) {
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });

  let spotText = formatSpots(props.spots);

  return (
    <li
      onClick={() => {
        props.setDay(props.name);
      }}
      className={dayClass}
    >
      <h2 className="text--regular">Day Name</h2>
      <h3 className="text--light">{spotText}</h3>
    </li>
  );
}