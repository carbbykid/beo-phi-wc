import TableCustom from "components/common/TableCustom";
import Authentication from "components/page/home/Authentication";
import MatchCart from "components/page/home/MatchCart";
import Axios from "config/Axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { Team } from "../components/page/home/MatchCart";

const Home: NextPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await Axios.get("worldcup");
      setData(res.data);
    };
    fetchData();
  }, []);
  return (
    <div className="relative before:blur-sm before:absolute before:bg-home-bg before:bg-cover before:h-full before:w-full before:-z-10 min-h-screen pb-40">
      <Head>
        <title>ChiPoPo</title>
        <meta name="description" content="Beo Phi Battle World Cup 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrap-content relative pt-14">
        <Authentication />
        <h1 className="text-center heading text-5xl mt-16">World Cup 2022</h1>
        <h1 className="text-center heading text-3xl mt-5">Beo vs Phì</h1>

        <div className="mt-12 md:mt-20">
          {fakeData.map((match) => (
            <div key={match.id} className="mb-16">
              <MatchCart
                team1={match.team1}
                team2={match.team2}
                time={match.time}
                id={match.id}
                setData={setData}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-x-auto">
          <TableCustom data={data} titleRow={renderColumn(setData)} />
        </div>
      </div>
    </div>
  );
};

export default Home;

const renderColumn = (setData: Dispatch<SetStateAction<never[]>>) => {
  const deleteResult = async (id: string) => {
    try {
      const res = await Axios.delete("/worldcup", { data: { _id: id } });
      setData((prev: any) => prev.filter((result: any) => result._id !== id));
      toast.success("Battle added successfully");
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  return [
    { title: "Type Match", field: "typeMatch" },
    { title: "Time Match", field: "timeMatch" },
    { title: "Winner", field: "winner" },
    {
      title: "Result",
      field: ({ team1, team2 }: { team1: Team; team2: Team }) => {
        return (
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="px-2">{team1.userSelected}</span>
              <span className="px-2">{team1.name}</span>
              <Image
                src={team1.flagUrl}
                alt="chipo-flag"
                width={40}
                height={40}
              />
              <span className="px-2">{team1.score}</span>
            </div>
            -
            <div className="flex flex-row-reverse items-center">
              <span className="px-2">{team2.userSelected}</span>
              <span className="px-2">{team2.name}</span>
              <Image
                src={team2.flagUrl}
                alt="chipo-flag"
                width={40}
                height={40}
              />
              <span className="px-2">{team2.score}</span>
            </div>
          </div>
        );
      },
    },
    {
      title: "Action",
      field: ({ _id }: { _id: string }) => {
        return (
          <div className="flex gap-4">
            {/* <button>
              <FaEdit size={24} color="rgb(34,197,94)" />
            </button> */}
            <button
              onClick={() => {
                deleteResult(_id);
              }}
            >
              <FaRegTrashAlt size={24} color="rgb(244,63,94)" />
            </button>
          </div>
        );
      },
    },
  ];
};

const fakeData = [
  {
    id: "bangtsvscame",
    time: "17h 24/11/2022",
    team1: {
      name: "Thuỵ Sĩ",
      score: 0,
      flagUrl:
        "https://ssl.gstatic.com/onebox/media/sports/logos/1hy9ek4dOIffYULM6k1fqg_96x96.png",
    },
    team2: {
      name: "Cameroon",
      score: 0,
      flagUrl:
        "https://ssl.gstatic.com/onebox/media/sports/logos/fmHyTSbJ-cYbY6WJzvqaZQ_96x96.png",
    },
  },
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
];

// refetching data every second: react-query, setInterval, database realtime firebase, socket
