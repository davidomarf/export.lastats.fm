import React, { useCallback, useEffect, useState } from "react";
import { getScrobbles, getUserInfo } from "../API/lastfm";
import { Track, User } from "../types";
import styles from "./UserInfo.module.scss";

type UserInfoProps = {
  user: string;
  setIsValidUser: Function;
  setFirstPage: Function;
  setTotalCSV: Function;
};

const UserInfo = ({
  user,
  setIsValidUser,
  setFirstPage,
  setTotalCSV,
}: UserInfoProps) => {
  const [info, setInfo] = useState<User>();
  const [finished, setFinished] = useState(false);

  const getUserPlaycount = useCallback(
    async (user) => {
      try {
        const pc: User = (await getUserInfo(user)) as User;
        console.log("gotten info");
        setInfo(pc);
        setIsValidUser(true);
      } catch (error) {
        setInfo(null as unknown as User);
        setIsValidUser(false);
        console.error(error);
      }
    },
    [setIsValidUser]
  );

  const getUserLastTracks = useCallback(
    async (user) => {
      if (finished) {
        return;
      }
      try {
        const ids = new Map();
        const pc = await getScrobbles(user, 1, 200);
        if (pc[0]["@attr"]?.nowplaying) {
          pc.shift();
        }

        const promises: Promise<Track[]>[] = [];
        const pages = Math.ceil(info!.playcount! / 200);
        console.log(pages);
        for (let i = 0; i < pages; i++) {
          promises.push(getScrobbles(user, i + 1, 200));
        }

        Promise.all(promises).then((trackArray) => {
          const totalTracks = [];
          for (const tracks of trackArray) {
            if (tracks[0]["@attr"]?.nowplaying) {
              tracks.shift();
            }
            totalTracks.push(...tracks);
          }

          setTotalCSV(totalTracks);
          setFinished(true);
        });

        setFirstPage(
          pc.filter((e) =>
            ids.has(e.date.uts) ? false : ids.set(e.date.uts, null)
          )
        );
      } catch (error) {
        setFirstPage([]);
        console.error(error);
      }
    },
    [setFirstPage, setTotalCSV, info, finished, setFinished]
  );

  useEffect(() => {
    console.log("used effect");
    if (!info) {
      getUserPlaycount(user);
      getUserLastTracks(user);
    } else {
      if (finished) {
        return;
      }
      getUserLastTracks(user);
    }
  }, [user, info, getUserPlaycount, getUserLastTracks, finished]);

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
