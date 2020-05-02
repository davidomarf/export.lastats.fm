import React from "react";

import UserInput from "./UserInput/UserInput";

import styles from "./Header.module.scss";

type HeaderProps = {
  setUser: Function;
};

const Header = ({ setUser }: HeaderProps) => {
  return (
    <div className={styles["header"]}>
      <h1 className={styles["title"]}>Last.fm Exporter</h1>
      <h2 className={styles["description"]}>
        Export all your Last.fm activity in CSV files
      </h2>
      <UserInput setUser={setUser} />
    </div>
  );
};

export default Header;
