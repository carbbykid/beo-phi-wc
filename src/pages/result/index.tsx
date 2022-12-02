import Avatar from "components/page/dashboard/Avatar";

import Axios, { AxiosWC } from "config/Axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FaArrowsAltH } from "react-icons/fa";

const Result: NextPage = () => {
  const [allMatch, setAllMatch] = useState<any>([]);
  const [countPhi, setCountPhi] = useState<{ [key: string]: number }>({});
  const [countBeo, setCountBeo] = useState<{ [key: string]: number }>({});

  console.log(countPhi);
  useEffect(() => {
    const fetchData = async () => {
      const promiseResult = Axios.get("/worldcup");
      const promiseSetting = Axios.get("/setting");

      const resResult = await promiseResult;
      const resSetting = await promiseSetting;

      console.log("setting", resSetting.data);

      setCountPhi({
        "First stage": resResult.data.filter(
          (result: any) =>
            result.winner === "phi" && result.typeMatch === "First stage",
        ).length,
        "Round of 16": resResult.data.filter(
          (result: any) =>
            result.winner === "phi" && result.typeMatch === "Round of 16",
        ).length,
        "Quarter-final": resResult.data.filter(
          (result: any) =>
            result.winner === "phi" && result.typeMatch === "Quarter-final",
        ).length,
        "Semi-final": resResult.data.filter(
          (result: any) =>
            result.winner === "phi" && result.typeMatch === "Semi-final",
        ).length,
        "Play-off for third place": resResult.data.filter(
          (result: any) =>
            result.winner === "phi" &&
            result.typeMatch === "Play-off for third place",
        ).length,
        Final: resResult.data.filter(
          (result: any) =>
            result.winner === "phi" && result.typeMatch === "Final",
        ).length,
      });
      //count Beo

      setCountBeo({
        "First stage": resResult.data.filter(
          (result: any) =>
            result.winner === "beo" && result.typeMatch === "First stage",
        ).length,
        "Round of 16": resResult.data.filter(
          (result: any) =>
            result.winner === "beo" && result.typeMatch === "Round of 16",
        ).length,
        "Quarter-final": resResult.data.filter(
          (result: any) =>
            result.winner === "beo" && result.typeMatch === "Quarter-final",
        ).length,
        "Semi-final": resResult.data.filter(
          (result: any) =>
            result.winner === "beo" && result.typeMatch === "Semi-final",
        ).length,
        "Play-off for third place": resResult.data.filter(
          (result: any) =>
            result.winner === "beo" &&
            result.typeMatch === "Play-off for third place",
        ).length,
        Final: resResult.data.filter(
          (result: any) =>
            result.winner === "beo" && result.typeMatch === "Final",
        ).length,
      });
    };
    fetchData();
  }, []);
  return (
    <div className="relative bg-red-900 bg-opacity-80 before:blur-sm before:absolute before:bg-home-bg before:bg-cover before:h-full before:w-full before:-z-10 min-h-screen pb-40">
      <Head>
        <title>ChiPoPo</title>
        <meta name="description" content="Beo Phi Battle World Cup 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrap-content relative pt-32 md:pt-40">
        <h2 className="heading">Result</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {/* Phi */}
          <div className="grid grid-cols-2 gap-5 mb-5 justify-items-center md:border-t-8 border-t-4 border-pink-700 pt-10">
            <span className="w-20 h-20 col-span-2 ">
              <Avatar url="/images/home/avatar_phi.jpg" />
            </span>

            {resultTypes.map((resultType, idx) => (
              <div key={idx} className="text-center">
                <div className="text-lg">{resultType.nameType}</div>
                <div className="flex justify-between items-center mt-2 font-semibold gap-2 text-base md:text-xl text-[#FEC310]">
                  <div>{`${countPhi[resultType.value]} (trận)`}</div>
                  <FaArrowsAltH />
                  <div className="text-green-400">13.5(%)</div>
                </div>
              </div>
            ))}

            <div className="mt-2 font-semibold text-xl md:text-2xl col-span-2">
              <div>
                Total: <span className="text-pink-400 text-4xl">70%</span>
              </div>
            </div>
          </div>

          {/* Beo */}
          <div className="grid grid-cols-2 gap-5 mb-5 justify-items-center border-t-4 md:border-t-8 border-cyan-400 pt-10">
            <span className="w-20 h-20 col-span-2 ">
              <Avatar url="/images/home/avatar_beo.jpg" />
            </span>

            {resultTypes.map((resultType, idx) => (
              <div key={idx} className="text-center">
                <div className="text-lg">{resultType.nameType}</div>
                <div className="flex justify-between items-center mt-2 font-semibold gap-2 text-base md:text-xl text-[#FEC310]">
                  <div>{`${countBeo[resultType.value]} (trận)`}</div>
                  <FaArrowsAltH />
                  <div className="text-green-400">13.5(%)</div>
                </div>
              </div>
            ))}
            <div className="mt-2 font-semibold text-xl md:text-2xl col-span-2">
              <div>
                Total: <span className="text-cyan-400 text-4xl">30%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;

const resultTypes = [
  { nameType: "Vòng bảng", value: "First stage" },
  { nameType: "Vòng 1/6", value: "Round of 16" },
  { nameType: "Vòng Tứ kết", value: "Quarter-final" },
  { nameType: "Vòng Bán kết", value: "Semi-final" },
  { nameType: "Tranh hạng 3", value: "Play-off for third place" },
  { nameType: "Trung kết", value: "Final" },
];
