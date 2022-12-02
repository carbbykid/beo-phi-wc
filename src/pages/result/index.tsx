import Avatar from "components/page/dashboard/Avatar";

import Axios, { AxiosWC } from "config/Axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const Result: NextPage = () => {
  const [allMatch, setAllMatch] = useState<any>([]);
  const [totalPhi, setTotalPhi] = useState<number>(0);
  const [totalBeo, setTotalBeo] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const promiseResult = Axios.get("/worldcup");

      const resResult = await promiseResult;
    };
    fetchData();
  }, []);
  return (
    <div className="relative bg-red-900 bg-opacity-70 before:blur-sm before:absolute before:bg-home-bg before:bg-cover before:h-full before:w-full before:-z-10 min-h-screen pb-40">
      <Head>
        <title>ChiPoPo</title>
        <meta name="description" content="Beo Phi Battle World Cup 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrap-content relative pt-32 md:pt-40">
        <h2 className="heading">Result</h2>
        <div className="grid  md:grid-cols-2 gap-5">
          {/* Phi */}
          <div className="grid grid-cols-2 gap-5 mb-5 justify-items-center md:border-t-8 border-t-4 border-pink-700 pt-10">
            <span className="w-20 h-20 col-span-2 ">
              <Avatar url="/images/home/avatar_phi.jpg" />
            </span>

            <div className="text-center">
              <div className="text-lg">Vòng bảng</div>
              <div className="mt-2 font-semibold text-xl text-[#FEC310]">
                {10}
              </div>
            </div>

            <div className="text-center">
              <div className="text-lg">Vòng 1/16</div>
              <div className="mt-2 font-semibold text-xl text-[#FEC310]">
                {10}
              </div>
            </div>

            <div className="text-center">
              <div className="text-lg">Vòng tứ kết</div>
              <div className="mt-2 font-semibold text-xl text-[#FEC310]">
                {10}
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg">Vòng bán kết</div>
              <div className="mt-2 font-semibold text-xl text-[#FEC310]">
                {10}
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg">Tranh hạng 3</div>
              <div className="mt-2 font-semibold text-xl text-[#FEC310]">
                {10}
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg">Chung kết</div>
              <div className="mt-2 font-semibold text-xl text-[#FEC310]">
                {10}
              </div>
            </div>
          </div>

          {/* Beo */}
          <div className="grid grid-cols-2 gap-5 mb-5 justify-items-center border-t-4 md:border-t-8 border-cyan-400 pt-10">
            <span className="w-20 h-20 col-span-2 ">
              <Avatar url="/images/home/avatar_beo.jpg" />
            </span>

            <div className="text-center">
              <div className="text-lg">Vòng bảng</div>
              <div className="mt-2 font-semibold text-xl text-[#FEC310]">
                {10}
              </div>
            </div>

            <div className="text-center">
              <div className="text-lg">Vòng 1/16</div>
              <div className="mt-2 font-semibold text-xl text-[#FEC310]">
                {10}
              </div>
            </div>

            <div className="text-center">
              <div className="text-lg">Vòng tứ kết</div>
              <div className="mt-2 font-semibold text-xl text-[#FEC310]">
                {10}
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg">Vòng bán kết</div>
              <div className="mt-2 font-semibold text-xl text-[#FEC310]">
                {10}
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg">Tranh hạng 3</div>
              <div className="mt-2 font-semibold text-xl text-[#FEC310]">
                {10}
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg">Chung kết</div>
              <div className="mt-2 font-semibold text-xl text-[#FEC310]">
                {10}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
