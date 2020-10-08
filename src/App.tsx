import React, { useState } from "react";
import "./App.scss";
import Header from "./Header/Header";
import ResultExample from "./ResultExample/ResultExample";
import { Track } from "./types";
import UserInfo from "./UserInfo/UserInfo";

const App = () => {
  const [user, setUser] = useState("");
  const [firstPage, setFirstPage] = useState<Track[]>([]);
  const [isValidUser, setIsValidUser] = useState(false);

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
      {isValidUser && <ResultExample tracks={firstPage} />}
    </div>
  );
};

export default App;
