import Avatar from "components/page/dashboard/Avatar";

import Axios from "config/Axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FaArrowsAltH } from "react-icons/fa";

const Result: NextPage = () => {
  const [countPhi, setCountPhi] = useState<{
    [key: string]: { [key: string]: string | number };
  }>({});
  const [countBeo, setCountBeo] = useState<{
    [key: string]: { [key: string]: string | number };
  }>({});

  const [settingValue, setSettingValue] = useState<{ [key: string]: number }>();

  console.log(countPhi);
  useEffect(() => {
    const fetchData = async () => {
      const promiseResult = Axios.get("/worldcup");
      const promiseSetting = Axios.get("/setting");

      const resResult = await promiseResult;
      const resSetting = await promiseSetting;

      setSettingValue(resSetting.data[0]);

      const countPhiTerm = resResult.data.reduce((total: any, result: any) => {
        if (result.winner === "phi" && result.typeMatch === "First stage") {
          return { ...total, countPhiFS: total.countPhiFS + 1 || 1 };
        }

        if (result.winner === "phi" && result.typeMatch === "Round of 16") {
          return { ...total, countPhiR16: total.countPhiR16 + 1 || 1 };
        }

        if (result.winner === "phi" && result.typeMatch === "Quarter-final") {
          return { ...total, countPhiQT: total.countPhiQT + 1 || 1 };
        }
        if (result.winner === "phi" && result.typeMatch === "Semi-final") {
          return { ...total, countPhiSF: total.countPhiSF + 1 || 1 };
        }
        if (
          result.winner === "phi" &&
          result.typeMatch === "Play-off for third place"
        ) {
          return { ...total, countPhiTP: total.countPhiTP + 1 || 1 };
        }
        if (result.winner === "phi" && result.typeMatch === "Final") {
          return { ...total, countPhiFN: total.countPhiFN + 1 || 1 };
        }
        return total;
      }, {});

      setCountPhi({
        "First stage": {
          count: countPhiTerm.countPhiFS,
          percent: settingValue?.firstStagePercent as number,
        },
        "Round of 16": {
          count: countPhiTerm.countPhiR16,
          percent: settingValue?.roundOf16Percent as number,
        },
        "Quarter-final": {
          count: countPhiTerm.countPhiQT,
          percent: settingValue?.quarterFinalPercent as number,
        },
        "Semi-final": {
          count: countPhiTerm.countPhiSF,
          percent: settingValue?.semiFinalPercent as number,
        },
        "Play-off for third place": {
          count: countPhiTerm.countPhiTP,
          percent: settingValue?.thirdPlacePercent as number,
        },
        Final: {
          count: countPhiTerm.countPhiFN,
          percent: settingValue?.finalPercent as number,
        },
      });

      //count Beo

      //   setCountBeo({
      //     "First stage": resResult.data.filter(
      //       (result: any) =>
      //         result.winner === "beo" && result.typeMatch === "First stage",
      //     ).length,
      //     "Round of 16": resResult.data.filter(
      //       (result: any) =>
      //         result.winner === "beo" && result.typeMatch === "Round of 16",
      //     ).length,
      //     "Quarter-final": resResult.data.filter(
      //       (result: any) =>
      //         result.winner === "beo" && result.typeMatch === "Quarter-final",
      //     ).length,
      //     "Semi-final": resResult.data.filter(
      //       (result: any) =>
      //         result.winner === "beo" && result.typeMatch === "Semi-final",
      //     ).length,
      //     "Play-off for third place": resResult.data.filter(
      //       (result: any) =>
      //         result.winner === "beo" &&
      //         result.typeMatch === "Play-off for third place",
      //     ).length,
      //     Final: resResult.data.filter(
      //       (result: any) =>
      //         result.winner === "beo" && result.typeMatch === "Final",
      //     ).length,
      //   });

      const countBeoTerm = resResult.data.reduce((total: any, result: any) => {
        if (result.winner === "beo" && result.typeMatch === "First stage") {
          return { ...total, countBeoFS: total.countBeoFS + 1 || 1 };
        }

        if (result.winner === "beo" && result.typeMatch === "Round of 16") {
          console.log("zo check2");
          return { ...total, countBeoR16: total.countBeoR16 + 1 || 1 };
        }

        if (result.winner === "beo" && result.typeMatch === "Quarter-final") {
          return { ...total, countBeoQT: total.countBeoQT + 1 || 1 };
        }
        if (result.winner === "beo" && result.typeMatch === "Semi-final") {
          return { ...total, countBeoSF: total.countBeoSF + 1 || 1 };
        }
        if (
          result.winner === "beo" &&
          result.typeMatch === "Play-off for third place"
        ) {
          return { ...total, countBeoTP: total.countBeoTP + 1 || 1 };
        }
        if (result.winner === "beo" && result.typeMatch === "Final") {
          return { ...total, countBeoFN: total.countBeoFN + 1 || 1 };
        }
        return total;
      }, {});

      setCountBeo({
        "First stage": {
          count: countBeoTerm.countBeoFS,
          percent: settingValue?.firstStagePercent as number,
        },
        "Round of 16": {
          count: countBeoTerm.countBeoR16,
          percent: settingValue?.roundOf16Percent as number,
        },
        "Quarter-final": {
          count: countBeoTerm.countBeoQT,
          percent: settingValue?.quarterFinalPercent as number,
        },
        "Semi-final": {
          count: countBeoTerm.countBeoSF,
          percent: settingValue?.semiFinalPercent as number,
        },
        "Play-off for third place": {
          count: countBeoTerm.countBeoTP,
          percent: settingValue?.thirdPlacePercent as number,
        },
        Final: {
          count: countBeoTerm.countBeoFN,
          percent: settingValue?.finalPercent as number,
        },
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
                  <div>{`${
                    countPhi[resultType.value]?.count || 0
                  } (trận)`}</div>
                  <FaArrowsAltH />
                  <div className="text-green-400">{`${
                    countPhi[resultType.value]?.percent
                  } (%)`}</div>
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
                  <div>{`${
                    countBeo[resultType.value]?.count || 0
                  } (trận)`}</div>
                  <FaArrowsAltH />
                  <div className="text-green-400">{`${
                    countBeo[resultType.value]?.percent
                  } (%)`}</div>
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
  { nameType: "Vòng 1/16", value: "Round of 16" },
  { nameType: "Vòng Tứ kết", value: "Quarter-final" },
  { nameType: "Vòng Bán kết", value: "Semi-final" },
  { nameType: "Tranh hạng 3", value: "Play-off for third place" },
  { nameType: "Trung kết", value: "Final" },
];
