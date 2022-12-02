import TableCustom from "components/common/TableCustom";
import Avatar from "components/page/dashboard/Avatar";
import { Team } from "components/page/home/MatchCart";
import Axios from "config/Axios";
import Head from "next/head";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [dataResult, setDataResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const promiseResult = Axios.get("/worldcup");

      const resResults = await promiseResult;
      setDataResult(resResults.data);
      console.log("allResult:", resResults.data);
    };
    fetchData();
  }, []);
  return (
    <div className="relative before:absolute before:bg-home-bg before:bg-cover before:h-full before:w-full before:-z-10 min-h-screen pb-40">
      <Head>
        <title>ChiPoPo</title>
        <meta name="description" content="I'm Front-end developer" />
        {/* <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-36 pb-20 wrap-content relative">
        <h2 className="heading">Dashboard</h2>

        <div className="mt-12 overflow-x-auto">
          <TableCustom
            data={dataResult}
            titleRow={renderColumn(setDataResult)}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

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
    {
      title: "Winner",
      field: ({ winner }: { winner: string }) => {
        return (
          <span className="w-12 h-12 inline-block">
            {winner === "phi" ? (
              <Avatar url="/images/home/avatar_phi.jpg" active />
            ) : winner === "beo" ? (
              <Avatar url="/images/home/avatar_beo.jpg" active />
            ) : (
              "Draw"
            )}
          </span>
        );
      },
    },
    {
      title: "Result",
      field: ({ awayTeam, homeTeam }: { awayTeam: Team; homeTeam: Team }) => {
        return (
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="mx-2 w-12 h-12 ">
                {homeTeam.userSelected === "phi" ? (
                  <Avatar url="/images/home/avatar_phi.jpg" />
                ) : (
                  <Avatar url="/images/home/avatar_beo.jpg" />
                )}
              </span>
              <span className="px-2">{homeTeam.name}</span>
              {/* <Image
                src={team2.flagUrl}
                alt="chipo-flag"
                width={40}
                height={40}
              /> */}
              {homeTeam.penalties > awayTeam.penalties && (
                <span className="text-yellow-300">(penalties)</span>
              )}
              <span className="px-2">{homeTeam.goals}</span>
            </div>
            -
            <div className="flex flex-row-reverse items-center">
              <span className="mx-2 w-8 h-8 ">
                {awayTeam.userSelected === "phi" ? (
                  <Avatar url="/images/home/avatar_phi.jpg" />
                ) : (
                  <Avatar url="/images/home/avatar_beo.jpg" />
                )}
              </span>
              <span className="px-2">{awayTeam.name}</span>
              {/* <Image
                src={awayTeam.flagUrl}
                alt="chipo-flag"
                width={40}
                height={40}
              /> */}
              {awayTeam.penalties > homeTeam.penalties && (
                <span className="text-yellow-300">(penalties)</span>
              )}
              <span className="px-2">{awayTeam.goals}</span>
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
