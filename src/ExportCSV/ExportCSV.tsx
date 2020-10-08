import React from "react";
import { Track } from "../types";
import { CSVLink } from "react-csv";
import styles from "./ExportCSV.module.scss";

type ExportCSV = {
  fileName: string;
  userTracks: Track[];
};

const ExportCSV: React.FC<ExportCSV> = ({ fileName, userTracks }) => {
  const cleanUserData = (userTracks: Track[]) => {
    return userTracks.map((track: Track) => {
      return {
        name: track.name,
        artist: track.artist["#text"],
        album: track.album["#text"],
        uts: track.date.uts
      };
    });
  };
  return (
    <button
      className={styles["export"]}
      type="button"
      name="Export scrobbles"
      formTarget="_blank"
    >
      <CSVLink filename={fileName} data={cleanUserData(userTracks)}>
        Download
      </CSVLink>
    </button>
  );
};

export default ExportCSV;
