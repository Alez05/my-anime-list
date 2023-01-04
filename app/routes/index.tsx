import { useLoaderData } from "@remix-run/react";
import { siteData } from "~/config/data";

export const loader = () => {
  const {navigationBar} = siteData
  return {navigationBar}
}

const MyAnimeList = () => {
  const {navigationBar}:any = useLoaderData()
  return (
    <div>
      <h1>MyAnimeList</h1>
      {navigationBar.map((nav:any, key:any) => {
        return (
          <div key={key}>
            <div>{nav.link}</div>
            <div>{nav.title}</div>
          </div>
        )
      })}
    </div>
  );
}

export default MyAnimeList