import React, { useState, ChangeEvent } from "react";
import Title from "./Title";

import styles from "./Configuration.module.scss";

import { Options } from "./Types";

const Period = (props: { updateConfig: (options: Options) => void }) => {
  const { updateConfig } = props;
  const [clicked, setClicked] = useState(false);

  const start = new Date("2000-01-01").toISOString().split("T")[0];
  const end = new Date().toISOString().split("T")[0];

  const handleChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
    updateConfig({
      period: { start: e.target.value ? e.target.value : start, end: end }
    });
  };

  const handleChangeEnd = (e: ChangeEvent<HTMLInputElement>) => {
    updateConfig({
      period: { start: start, end: e.target.value ? e.target.value : end }
    });
  };

  return (
    <>
      <Title
        title="Custom time period"
        clicked={clicked}
        onClick={() => setClicked(!clicked)}
      />
      {clicked && (
        <div className={[styles["box-form"], styles["period-input"]].join(" ")}>
          <div className={styles["input-field"]}>
            <label> From </label>
            <input
              type="date"
              onChange={handleChangeStart}
              value={start}
            ></input>
          </div>
          <div className={styles["input-field"]}>
            <label> to </label>
            <input type="date" onChange={handleChangeEnd} value={end}></input>
          </div>
        </div>
      )}
    </>
  );
};

export default Period;
