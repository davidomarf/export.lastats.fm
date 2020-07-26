import React, { useState, useEffect, useCallback } from "react";

import { useUserInfo, useScrobbles } from "../API/lastfm";
import styles from "./UserInfo.module.scss";
import { User, Track } from "../types";

type UserInfoProps = {
  user: string;
  setIsValidUser: Function;
  setFirstPage: Function;
};

const UserInfo = ({ user, setIsValidUser, setFirstPage }: UserInfoProps) => {
  const [info, setInfo] = useState<User>();
  const { userData, isErrorUser, isLoadingUser } = useUserInfo(user);
  const { scrobblesData, isErrorScrobbles } = useScrobbles(user, 1, 200);

  const getUserPlaycount = useCallback(
    (data: User, error: boolean) => {
      if (data) {
        setInfo(data);
        setIsValidUser(!error);
      }
    },
    [setInfo, setIsValidUser]
  );

  const getUserLastTracks = useCallback(
    (scrobbles: Track[]) => {
      if (scrobbles.length > 0) {
        const lastScrobbles = scrobbles?.slice(0, 10);
        if (lastScrobbles && lastScrobbles[0]["@attr"]?.nowplaying) {
          lastScrobbles?.shift();
        }
        setFirstPage(lastScrobbles);
      }
    },
    [setFirstPage]
  );

  useEffect(() => {
    getUserPlaycount(userData, isErrorUser);
    getUserLastTracks(scrobblesData);
  }, [
    userData,
    isErrorUser,
    scrobblesData,
    isErrorScrobbles,
    getUserPlaycount,
    getUserLastTracks
  ]);

  return (
    <div className={styles.information}>
      {isLoadingUser && "We're fetching your information"}
      {!isLoadingUser && info && (
        <p>
          You have {info.playcount} scrobbles registered since{" "}
          {new Date(info.registered.unixtime * 1000)
            .toISOString()
            .substring(0, 10)}
          .
        </p>
      )}
      {!isLoadingUser && !info && (
        <p>
          We couldn't fetch your information. <br /> Please make sure your
          username is correct and try again.
        </p>
      )}
    </div>
  );
};

export default UserInfo;
