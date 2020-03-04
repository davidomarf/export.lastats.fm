import React from "react";

import styles from "./Title.module.scss";

const Title = props => {
  let { title, clicked } = props;

  let classes = styles["checkbox"];

  if (clicked) {
    classes += styles["clicked"];
  }

  return (
    <>
      <div className={classes} onClick={console.log('yeah')}>
        <input type="checkbox"></input>
        <h2>{title}</h2>
      </div>
    </>
  );
};

export default Title;
