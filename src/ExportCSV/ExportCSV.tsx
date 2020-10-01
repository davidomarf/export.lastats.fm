import React from "react";
import { Track } from "../types";
import { CSVLink } from "react-csv";
import styles from "./ExportCSV.module.scss";

// Dijiste que hiciera algo para exportar la data como CSV
// Ahi esta we
// si te pones de mamón, no vi las especificaciones en el ticket, abusado mi TL
// ¯\_(ツ)_/¯

type ExportCSV = {
  fileTitle: string;
  userTracks: Track[];
};

const ExportCSV: React.FC<ExportCSV> = ({ fileTitle, userTracks }) => {
  const cleanUserData = (userTracks: Track[]) => {
    // jeje lol
    return userTracks.map((track: Track) => {
      // jeje lol
      return {
        name: track.name,
        artist: track.artist["#text"],
        album: track.album["#text"],
        uts: track.date.uts,
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
      <CSVLink filename={fileTitle} data={cleanUserData(userTracks)}>
        Download me
      </CSVLink>
    </button>
  );
};

export default ExportCSV;
