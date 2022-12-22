import Avatar from "components/page/dashboard/Avatar";

import Axios from "config/Axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FaArrowsAltH } from "react-icons/fa";

const initPercent = {
  percentPhi: {
    firstStagePercent: 0,
    roundOf16Percent: 0,
    quarterFinalPercent: 0,
    semiFinalPercent: 0,
    thirdPlacePercent: 0,
    finalPercent: 0,
  },
  percentBeo: {
    firstStagePercent: 0,
    roundOf16Percent: 0,
    quarterFinalPercent: 0,
    semiFinalPercent: 0,
    thirdPlacePercent: 0,
    finalPercent: 0,
  },
};

const Result: NextPage = () => {
  const [countPhi, setCountPhi] = useState<{
    [key: string]: { [key: string]: number };
  }>({});
  const [countBeo, setCountBeo] = useState<{
    [key: string]: { [key: string]: number };
  }>({});

  const [percent, setPercent] = useState<{
    [key: string]: { [key: string]: number };
  }>(initPercent);

  const [toTalPercent, setToTalPercent] = useState<{ [key: string]: number }>(
    {},
  );

  const [settingValue, setSettingValue] = useState<{ [key: string]: number }>(
    {},
  );
  const [resultValue, setResultValue] = useState([]);

  const CaculatorPercent = (
    win: number,
    draw: number,
    totalMatch: number,
    totalPercent: number,
  ) => {
    const oneMatchToPercent = totalPercent / totalMatch;
    const result = Number(
      (win * oneMatchToPercent + (draw / 2) * oneMatchToPercent).toFixed(3),
    );

    return result;
  };

  useEffect(() => {
    const fetchData = async () => {
      const promiseResult = Axios.get("/worldcup");
      const promiseSetting = Axios.get("/setting");

      const resResult = await promiseResult;
      const resSetting = await promiseSetting;

      setSettingValue(resSetting.data[0]);
      setResultValue(resResult.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const countPhiTerm = resultValue?.reduce((total: any, result: any) => {
      //First stage
      if (result.winner === "phi" && result.typeMatch === "First stage") {
        return {
          ...total,
          countFS: {
            ...total.countFS,
            win: total.countFS?.win + 1 || 1,
          },
        };
      }

      if (result.winner === "draw" && result.typeMatch === "First stage") {
        return {
          ...total,
          countFS: {
            ...total.countFS,
            draw: total.countFS?.draw + 1 || 1,
          },
        };
      }

      //Round of 16
      if (result.winner === "phi" && result.typeMatch === "Round of 16") {
        return {
          ...total,
          countR16: {
            ...total.countR16,
            win: total.countR16?.win + 1 || 1,
          },
        };
      }

      if (result.winner === "draw" && result.typeMatch === "Round of 16") {
        return {
          ...total,
          countR16: {
            ...total.countR16,
            draw: total.countR16?.draw + 1 || 1,
          },
        };
      }

      //Quater-final
      if (result.winner === "phi" && result.typeMatch === "Quarter-final") {
        return {
          ...total,
          countQT: {
            ...total.countQT,
            win: total.countQT?.win + 1 || 1,
          },
        };
      }

      if (result.winner === "draw" && result.typeMatch === "Quarter-final") {
        return {
          ...total,
          countQT: {
            ...total.countQT,
            draw: total.countQT?.draw + 1 || 1,
          },
        };
      }

      //Semi-final
      if (result.winner === "phi" && result.typeMatch === "Semi-final") {
        return {
          ...total,
          countSF: {
            ...total.countSF,
            win: total.countSF?.win + 1 || 1,
          },
        };
      }

      if (result.winner === "draw" && result.typeMatch === "Semi-final") {
        return {
          ...total,
          countSF: {
            ...total.countSF,
            draw: total.countSF?.draw + 1 || 1,
          },
        };
      }

      //Playoff
      if (
        result.winner === "phi" &&
        result.typeMatch === "Play-off for third place"
      ) {
        return {
          ...total,
          countTP: {
            ...total.countTP,
            win: total.countTP?.win + 1 || 1,
          },
        };
      }

      if (
        result.winner === "draw" &&
        result.typeMatch === "Play-off for third place"
      ) {
        return {
          ...total,
          countTP: {
            ...total.countTP,
            draw: total.countTP?.draw + 1 || 1,
          },
        };
      }

      //Final
      if (result.winner === "phi" && result.typeMatch === "Final") {
        return {
          ...total,
          countFN: {
            ...total.countFN,
            win: total.countFN?.win + 1 || 1,
          },
        };
      }

      if (result.winner === "draw" && result.typeMatch === "Final") {
        return {
          ...total,
          countFN: {
            ...total.countFN,
            draw: total.countFN?.draw + 1 || 1,
          },
        };
      }

      return total;
    }, {});

    const countBeoTerm = resultValue?.reduce((total: any, result: any) => {
      //First stage
      if (result.winner === "beo" && result.typeMatch === "First stage") {
        return {
          ...total,
          countFS: {
            ...total.countFS,
            win: total.countFS?.win + 1 || 1,
          },
        };
      }

      if (result.winner === "draw" && result.typeMatch === "First stage") {
        return {
          ...total,
          countFS: {
            ...total.countFS,
            draw: total.countFS?.draw + 1 || 1,
          },
        };
      }

      //Round of 16
      if (result.winner === "beo" && result.typeMatch === "Round of 16") {
        return {
          ...total,
          countR16: {
            ...total.countR16,
            win: total.countR16?.win + 1 || 1,
          },
        };
      }

      if (result.winner === "draw" && result.typeMatch === "Round of 16") {
        return {
          ...total,
          countR16: {
            ...total.countR16,
            draw: total.countR16?.draw + 1 || 1,
          },
        };
      }

      //Quater-final
      if (result.winner === "beo" && result.typeMatch === "Quarter-final") {
        return {
          ...total,
          countQT: {
            ...total.countQT,
            win: total.countQT?.win + 1 || 1,
          },
        };
      }

      if (result.winner === "draw" && result.typeMatch === "Quarter-final") {
        return {
          ...total,
          countQT: {
            ...total.countQT,
            draw: total.countQT?.draw + 1 || 1,
          },
        };
      }

      //Semi-final
      if (result.winner === "beo" && result.typeMatch === "Semi-final") {
        return {
          ...total,
          countSF: {
            ...total.countSF,
            win: total.countSF?.win + 1 || 1,
          },
        };
      }

      if (result.winner === "draw" && result.typeMatch === "Semi-final") {
        return {
          ...total,
          countSF: {
            ...total.countSF,
            draw: total.countSF?.draw + 1 || 1,
          },
        };
      }

      //Playoff
      if (
        result.winner === "beo" &&
        result.typeMatch === "Play-off for third place"
      ) {
        return {
          ...total,
          countTP: {
            ...total.countTP,
            win: total.countTP?.win + 1 || 1,
          },
        };
      }

      if (
        result.winner === "draw" &&
        result.typeMatch === "Play-off for third place"
      ) {
        return {
          ...total,
          countTP: {
            ...total.countTP,
            draw: total.countTP?.draw + 1 || 1,
          },
        };
      }

      //Final
      if (result.winner === "beo" && result.typeMatch === "Final") {
        return {
          ...total,
          countFN: {
            ...total.countFN,
            win: total.countFN?.win + 1 || 1,
          },
        };
      }

      if (result.winner === "draw" && result.typeMatch === "Final") {
        return {
          ...total,
          countFN: {
            ...total.countFN,
            draw: total.countFN?.draw + 1 || 1,
          },
        };
      }
      return total;
    }, {});

    setCountPhi({
      firstStagePercent: {
        win: countPhiTerm?.countFS?.win || 0,
        draw: countPhiTerm?.countFS?.draw || 0,
      },
      roundOf16Percent: {
        win: countPhiTerm?.countR16?.win || 0,
        draw: countPhiTerm?.countR16?.draw || 0,
      },
      quarterFinalPercent: {
        win: countPhiTerm?.countQT?.win || 0,
        draw: countPhiTerm?.countQT?.draw || 0,
      },
      semiFinalPercent: {
        win: countPhiTerm?.countSF?.win || 0,
        draw: countPhiTerm?.countSF?.draw || 0,
      },
      thirdPlacePercent: {
        win: countPhiTerm?.countTP?.win || 0,
        draw: countPhiTerm?.countTP?.draw || 0,
      },
      finalPercent: {
        win: countPhiTerm?.countFN?.win || 0,
        draw: countPhiTerm?.countFN?.draw || 0,
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

    //Beo

    setCountBeo({
      firstStagePercent: {
        win: countBeoTerm?.countFS?.win || 0,
        draw: countBeoTerm?.countFS?.draw || 0,
      },
      roundOf16Percent: {
        win: countBeoTerm?.countR16?.win || 0,
        draw: countBeoTerm?.countR16?.draw || 0,
      },
      quarterFinalPercent: {
        win: countBeoTerm?.countQT?.win || 0,
        draw: countBeoTerm?.countQT?.draw || 0,
      },
      semiFinalPercent: {
        win: countBeoTerm?.countSF?.win || 0,
        draw: countBeoTerm?.countSF?.draw || 0,
      },
      thirdPlacePercent: {
        win: countBeoTerm?.countTP?.win || 0,
        draw: countBeoTerm?.countTP?.draw || 0,
      },
      finalPercent: {
        win: countBeoTerm?.countFN?.win || 0,
        draw: countBeoTerm?.countFN?.draw || 0,
      },
    });
  }, [resultValue]);

  useEffect(() => {
    const percentTermPhi: { [key: string]: any } = {};
    const percentTermBeo: { [key: string]: any } = {};

    resultTypes.forEach((result) => {
      const totalMatch =
        countPhi[result.value]?.draw +
        countPhi[result.value]?.win +
        countBeo[result.value]?.win;
      const resCaculatorPercentPhi =
        settingValue[result.value] -
          CaculatorPercent(
            countPhi[result.value]?.win,
            countPhi[result.value]?.draw,
            totalMatch,
            settingValue[result.value],
          ) || 0;
      console.log("res percent Phi", resCaculatorPercentPhi);
      percentTermPhi[result.value] = resCaculatorPercentPhi;

      const resCaculatorPercentBeo =
        settingValue[result.value] -
          CaculatorPercent(
            countBeo[result.value]?.win,
            countBeo[result.value]?.draw,
            totalMatch,
            settingValue[result.value],
          ) || 0;

      setToTalPercent((prev: any) => {
        return {
          totalPhi: prev.totalPhi + resCaculatorPercentPhi,
          totalBeo: prev.totalBeo + resCaculatorPercentBeo,
        };
      });
      console.log("res percent Beo", resCaculatorPercentBeo);
      percentTermBeo[result.value] = resCaculatorPercentBeo;
    });
    setPercent({ percentPhi: percentTermPhi, percentBeo: percentTermBeo });
  }, [countBeo, countPhi, settingValue]);

  console.log("percent", toTalPercent);
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
                <div className="flex justify-between items-center mt-2 font-semibold gap-1 md:gap-3 text-sm md:text-xl text-[#FEC310]">
                  <div>{`${countPhi[resultType.value]?.win || 0} T - ${
                    countPhi[resultType.value]?.draw || 0
                  } H`}</div>
                  <FaArrowsAltH />
                  <div className="text-green-400">{`${
                    percent?.percentPhi[resultType.value]
                  }/${settingValue[resultType.value]}%`}</div>
                </div>
              </div>
            ))}

            <div className="mt-2 font-semibold text-xl md:text-2xl col-span-2">
              <div>
                Total: &nbsp;
                <span className="text-pink-400 text-4xl">
                  {toTalPercent?.totalPhi}%
                </span>
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
                <div className="flex justify-between items-center mt-2 font-semibold gap-1 md:gap-3 text-sm md:text-xl text-[#FEC310]">
                  <div>{`${countBeo[resultType.value]?.win || 0} T - ${
                    countBeo[resultType.value]?.draw || 0
                  } H`}</div>
                  <FaArrowsAltH />
                  <div className="text-green-400">{`${
                    percent?.percentBeo[resultType.value]
                  }/${settingValue[resultType.value]}%`}</div>
                </div>
              </div>
            ))}
            <div className="mt-2 font-semibold text-xl md:text-2xl col-span-2">
              <div>
                Total:&nbsp;
                <span className="text-cyan-400 text-4xl">
                  {toTalPercent?.totalBeo}%
                </span>
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
  { nameType: "Vòng bảng", value: "firstStagePercent" },
  { nameType: "Vòng 1/16", value: "roundOf16Percent" },
  { nameType: "Vòng Tứ kết", value: "quarterFinalPercent" },
  { nameType: "Vòng Bán kết", value: "semiFinalPercent" },
  { nameType: "Tranh hạng 3", value: "thirdPlacePercent" },
  { nameType: "Chung kết", value: "finalPercent" },
];
