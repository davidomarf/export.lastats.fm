import React, { useState, useEffect, useCallback } from "react";

import { getUserInfo, getScrobbles } from "../API/lastfm";
import styles from "./UserInfo.module.scss";
import { User, Track } from "../types";

type UserInfoProps = {
  user: string;
  setIsValidUser: Function;
  setFirstPage: Function;
};

const UserInfo = ({ user, setIsValidUser, setFirstPage }: UserInfoProps) => {
  const [info, setInfo] = useState<User>();

  const getUserPlaycount = useCallback(
    async (user) => {
      try {
        const pc: User = (await getUserInfo(user)) as User;
        setInfo(pc);
        setIsValidUser(true);
      } catch (error) {
        setInfo((null as unknown) as User);
        setIsValidUser(false);
        console.error(error);
      }
    },
    [setIsValidUser]
  );

  const getUserLastTracks = useCallback(
    async (user) => {
      try {
        const pc: Track[] = (await getScrobbles(user, 1, 10)) as Track[];
        if (pc[0]["@attr"]?.nowplaying) {
          pc.shift();
        }
        setFirstPage(pc);
      } catch (error) {
        setFirstPage([]);
        console.error(error);
      }
    },
    [setFirstPage]
  );

  useEffect(() => {
    getUserPlaycount(user) && getUserLastTracks(user);
  }, [user, getUserPlaycount, getUserLastTracks]);

  return (
    <div className={styles.information}>
      {info && (
        <p>
          You have {info.playcount} scrobbles registered since{" "}
          {new Date(info.registered.unixtime * 1000)
            .toISOString()
            .substring(0, 10)}
          .
        </p>
      )}
      {!info && (
        <p>
          We couldn't fetch your information. <br /> Please make sure your
          username is correct and try again.
        </p>
      )}
    </div>
  );
};

export default UserInfo;
