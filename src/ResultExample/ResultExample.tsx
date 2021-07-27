import React from "react";
import ExportCSV from "../ExportCSV/ExportCSV";
import { Track } from "../types";
import styles from "./ResultExample.module.scss";

type ResultExampleProps = {
  tracks: Track[];
  totalCSV: Track[];
};

const ResultExample = ({ tracks, totalCSV }: ResultExampleProps) => {
  return (
    <>
      <div className={styles.header}>
        Preview of your CSV file
        <ExportCSV fileName="scrobbles.csv" userTracks={totalCSV} />
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
