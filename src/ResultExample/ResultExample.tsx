import React from "react";
import { Track } from "../types";

import styles from "./ResultExample.module.scss";

type ResultExampleProps = {
  tracks: Track[];
};

const ResultExample = ({ tracks }: ResultExampleProps) => {
  return (
    <>
      <h2> Preview of your CSV file </h2>
      <pre>
        <code className={styles["result-example"]}>
          name,artist,album,uts
          <br />
          {tracks.map((e: Track) => (
            <>
              "{e.name}","{e.artist["#text"]}","{e.album["#text"]}",{e.date.uts}
              <br />
            </>
          ))}
        </code>
      </pre>
    </>
  );
};

export default ResultExample;
