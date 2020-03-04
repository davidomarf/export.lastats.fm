import React from "react";

import styles from "./Configuration.module.scss";

import Period from "./Period"
import Cleaning from "./Cleaning"
import Files from "./Files"

const Configuration = () => {
  return (
    <div className={styles["configuration"]}>
        <Period/>
        <Cleaning/>
        <Files/>
    </div>
  );
};

export default Configuration;
