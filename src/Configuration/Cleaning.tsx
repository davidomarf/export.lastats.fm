import React, { useState, ChangeEvent } from "react";

import Title from "./Title";

import styles from "./Configuration.module.scss";
import { Options } from "./Types";

type CleaningProps = {
  updateConfig: (options: Options) => void;
};

const Cleaning = ({ updateConfig }: CleaningProps) => {
  const [clicked, setClicked] = useState(false);

  const handleSelections = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return (
    <>
      <Title
        title="Clean data"
        clicked={clicked}
        onClick={() => setClicked(!clicked)}
      />
      {clicked && (
        <div className={styles["box-form"]}>
          <div className={styles["input-field"]}>
            <input type="checkbox"></input>
            <label>Remove duplicates scrobbles</label>
          </div>
          <div className={styles["input-field"]}>
            <input type="checkbox"></input>
            <label></label>
          </div>
        </div>
      )}
    </>
  );
};

export default Cleaning;
