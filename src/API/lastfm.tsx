import useSWR from "swr";
import { User, RecentTracks } from "../types";

const lastFmAPI = process.env.REACT_APP_LAST_FM_API;
const baseURL =
  "https://ws.audioscrobbler.com/2.0/?format=json&api_key=" + lastFmAPI;

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

/**
 * Throw a request to the API to obtain its information
 *
 * @param user Valid username
 */
export function useUserInfo(user: string) {
  const path = `${baseURL}&method=user.getinfo&user=${user}`;
  const { data, error } = useSWR<{ user: User }>(path);

  return {
    userData: data?.user || ({} as User),
    isLoadingUser: !data && !error,
    isErrorUser: error
  };
}

/**
 * Request a specific page of the recent tracks list
 *
 * @param user Valid username
 * @param page Page to request
 * @param limit Scrobbles per page
 */
export function useScrobbles(user: string, page: number, limit: number = 200) {
  const path = `${baseURL}&method=user.getrecenttracks&limit=${limit}&user=${user}&page=${page}`;
  const { data, error } = useSWR<RecentTracks>(path);

  return {
    scrobblesData: data?.recenttracks?.track || [],
    isLoadingScrobbles: !data && !error,
    isErrorScrobbles: error
  };
}
