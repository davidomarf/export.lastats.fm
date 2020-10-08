import React from "react";
import { Track } from "../types";

import styles from "./ResultExample.module.scss";
import ExportCSV from "../ExportCSV/ExportCSV";

type ResultExampleProps = {
  tracks: Track[];
};

const ResultExample = ({ tracks }: ResultExampleProps) => {
  return (
    <>
      <div className={styles.header}>
        Preview of your CSV file
        <ExportCSV fileName="scrobbles.csv" userTracks={tracks} />
      </div>

      <pre>
        <code className={styles["result-example"]}>
          name,artist,album,uts
          <br />
          {tracks.map((e: Track) => (
            <div key={e.date.uts}>
              "{e.name}","{e.artist["#text"]}","{e.album["#text"]}",{e.date.uts}
              <br />
            </div>
          ))}
        </code>
      </pre>
    </>
  );
};

export default ResultExample;
