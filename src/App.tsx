import React, { useState } from "react";

import "./App.scss";
import Header from "./Header/Header";
import Configuration from "./Configuration/Configuration";
import UserInfo from "./UserInfo/UserInfo";
import { Track } from "./types";
import ResultExample from "./ResultExample/ResultExample";

type Config = {
  name: null | string;
};

const App = () => {
  const [user, setUser] = useState("");
  const [firstPage, setFirstPage] = useState<Track[]>([]);
  const [isValidUser, setIsValidUser] = useState(false);
  const [config, setConfig] = useState<Config>({ name: null });

  return (
    <div className="main-container">
      <Header setUser={setUser} />
      {user && (
        <UserInfo
          user={user}
          setIsValidUser={setIsValidUser}
          setFirstPage={setFirstPage}
        />
      )}
      {isValidUser && <Configuration setConfig={setConfig} />}
      {isValidUser && <ResultExample tracks={firstPage} />}
      {config && <div>{config.name}</div>}
    </div>
  );
};

export default App;
