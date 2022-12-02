import Authentication from "components/page/home/Authentication";
import MatchCart from "components/page/home/MatchCart";
import Axios, { AxiosWC } from "config/Axios";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [allMatch, setAllMatch] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const promiseMatch = AxiosWC.get("/matches");
      const promiseResult = Axios.get("/worldcup");

      const resMatches = await promiseMatch;
      const resResult = await promiseResult;

      const data = resMatches.data.filter((match: any) => {
        const isFind = resResult.data.find((result: any) => {
          return result.id === match.id;
        });
        return !isFind;
      });

      setAllMatch(data);
    };
    fetchData();
  }, []);
  return (
    <div className="relative  before:blur-sm before:absolute before:bg-home-bg before:bg-cover before:h-full before:w-full before:-z-10 min-h-screen pb-40">
      <Head>
        <title>ChiPoPo</title>
        <meta name="description" content="Beo Phi Battle World Cup 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrap-content relative pt-32 md:pt-40">
        <Authentication />
        <h1 className="text-center heading text-5xl mt-16 tracking-[2px]">
          World Cup 2022
        </h1>
        <h2 className="text-center heading text-3xl mt-5 tracking-wider">
          Beo vs Phì
        </h2>

        <div className="mt-7 md:mt-16">
          {allMatch.map((match: any) => (
            <div key={match.id} className="mb-16">
              <MatchCart
                awayTeam={match.away_team}
                homeTeam={match.home_team}
                time={match.datetime}
                id={match.id}
                stageName={match.stage_name}
                status={match.status}
                setData={setAllMatch}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

// const fakeData = [
//   {
//     id: "bangtsvscame",
//     time: "17h 24/11/2022",
//     team1: {
//       name: "Thuỵ Sĩ",
//       score: 0,
//       flagUrl:
//         "https://ssl.gstatic.com/onebox/media/sports/logos/1hy9ek4dOIffYULM6k1fqg_96x96.png",
//     },
//     team2: {
//       name: "Cameroon",
//       score: 0,
//       flagUrl:
//         "https://ssl.gstatic.com/onebox/media/sports/logos/fmHyTSbJ-cYbY6WJzvqaZQ_96x96.png",
//     },
//   },
// {
//   id: "banguruvshan",
//   time: "20h 24/11/2022",
//   team1: {
//     name: "Uruguay",
//     score: 0,
//     flagUrl:
//       "https://ssl.gstatic.com/onebox/media/sports/logos/KnSUdQWiGRoy89q4x85IgA_96x96.png",
//   },
//   team2: {
//     name: "Hàn Quốc",
//     score: 0,
//     flagUrl:
//       "https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_96x96.png",
//   },
// },
// {
//   id: "bangbdnvsghana",
//   time: "23h 24/11/2022",
//   team1: {
//     name: "Bồ Đào Nha",
//     score: 0,
//     flagUrl:
//       "https://ssl.gstatic.com/onebox/media/sports/logos/HJ3_2c4w791nZJj7n-Lj3Q_96x96.png",
//   },
//   team2: {
//     name: "Ghana",
//     score: 0,
//     flagUrl:
//       "https://ssl.gstatic.com/onebox/media/sports/logos/VJQ1emg0TOubjGnap4vWuw_96x96.png",
//   },
// },
// {
//   id: "bangbravsser",
//   time: "2h 25/11/2022",
//   team1: {
//     name: "Brazil",
//     score: 0,
//     flagUrl:
//       "https://ssl.gstatic.com/onebox/media/sports/logos/zKLzoJVYz0bb6oAnPUdwWQ_96x96.png",
//   },
//   team2: {
//     name: "Serbia",
//     score: 0,
//     flagUrl:
//       "https://ssl.gstatic.com/onebox/media/sports/logos/xyh1vmZ-xJH2iJCKjqS1Ow_96x96.png",
//   },
// },
// ];

// refetching data every second: react-query, setInterval, database realtime firebase, socket
