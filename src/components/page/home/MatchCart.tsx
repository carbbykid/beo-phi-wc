import Axios from "config/Axios";
import { useState } from "react";
import { FaFutbol, FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

export type Team = {
  name: string;
  // flagUrl?: string;
  userSelected?: string;
  plusScore?: number;
  goals: number;
  penalties: number;
};

const MatchCart = ({
  awayTeam,
  homeTeam,
  id,
  time,
  stageName,
  status,
  setData,
}: {
  awayTeam: Team;
  homeTeam: Team;
  id: number;
  time: string;
  stageName: string;
  status: string;
  setData: any;
}) => {
  const [userSelectedHomeTeam, setUserSelectedHomeTeam] = useState<string>();
  const [userSelectedAwayTeam, setUserSelectedAwayTeam] = useState<string>();
  // const [scoreTeam1, setScoreTeam1] = useState<number>();
  // const [scoreTeam2, setScoreTeam2] = useState<number>();
  // const [typeMatch, setTypeMatch] = useState<string>();
  const [plusScoreAwayTeam, setPlusScoreAwayTeam] = useState<number>(0);
  const [plusScoreHomeTeam, setPlusScoreHomeTeam] = useState<number>(0);

  const handleSubmit = async () => {
    let winner;
    if (awayTeam.goals === undefined || homeTeam.goals === undefined) return;

    if (
      awayTeam.goals + plusScoreAwayTeam >
      homeTeam.goals + plusScoreHomeTeam
    ) {
      winner = userSelectedAwayTeam;
    } else {
      if (
        awayTeam.goals + plusScoreAwayTeam ===
        homeTeam.goals + plusScoreHomeTeam
      ) {
        if (awayTeam.penalties > homeTeam.penalties) {
          winner = userSelectedAwayTeam;
        } else {
          if (awayTeam.penalties === homeTeam.penalties) {
            winner = "draw";
          } else {
            winner = userSelectedHomeTeam;
          }
        }
      } else {
        winner = userSelectedHomeTeam;
      }
    }

    const body = {
      id: id,
      timeMatch: time,
      awayTeam: {
        name: awayTeam.name,
        // flagUrl: awayTeam.flagUrl,
        goals: awayTeam.goals,
        penalties: awayTeam.penalties,
        userSelected: userSelectedAwayTeam,
        plusScore: plusScoreAwayTeam,
      },
      homeTeam: {
        name: homeTeam.name,
        // flagUrl: homeTeam.flagUrl,
        goals: homeTeam.goals,
        penalties: homeTeam.penalties,
        userSelected: userSelectedHomeTeam,
        plusScore: plusScoreHomeTeam,
      },
      winner: winner,
      status: status,
      typeMatch: stageName,
    };

    try {
      const result = await Axios.post("/worldcup", body);
      setData((prev: any) =>
        prev.filter((data: any) => data.id !== result.data.id),
      );
      toast.success("Battle added successfully");
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };
  // useEffect(() => {
  //   if (!userSelectedHomeTeam && !userSelectedAwayTeam) return;

  //   if (userSelectedHomeTeam) {
  //     if (userSelectedHomeTeam === "phi") {
  //       setuserSelectedAwayTeam("beo");
  //       return;
  //     }
  //     setuserSelectedAwayTeam("phi");
  //     return;
  //   } else {
  //     if (userSelectedAwayTeam === "phi") {
  //       setuserSelectedHomeTeam("beo");
  //       return;
  //     }
  //     setuserSelectedHomeTeam("phi");
  //   }
  // }, [userSelectedHomeTeam, userSelectedAwayTeam]);

  return (
    <div>
      <div className="border-4 rounded-md border-white bg-[#7F1431] px-4 md:py-8 py-4 items-center gap-4 pb-12">
        {/* <button
          onClick={() => setSelectedTeam1((prev) => !prev)}
          className="col-span-1 justify-self-center cursor-pointe"
        >
          <FaFutbol
            className={`${
              selectedTeam1 ? "text-green-600" : "white"
            } duration-200 hover:scale-105`}
            size={44}
          />
        </button> */}

        <div className="text-center flex justify-between items-center">
          <span
            className={` md:text-lg block bg-gray-900 font-semibold  ${
              stageName === "Play-off for third place" ||
              stageName === "Quarter-final"
                ? "text-xs px-2 py-2"
                : "text-sm px-4 py-2"
            }`}
          >
            {stageName}
          </span>
          <span
            className={`text-sm md:text-lg block ${
              status === "completed"
                ? "bg-red-500"
                : status === "in_progress"
                ? "bg-orange-500"
                : "bg-green-600"
            } ${
              stageName === "Play-off for third place"
                ? "px-2 py-2"
                : "px-4 py-2"
            } font-semibold capitalize `}
          >
            {status}
          </span>

          {/* <select
            value={typeMatch}
            onChange={(e) => setTypeMatch(e.target.value)}
            className="font-semibold mt-3 text-xs w-28  md:text-lg rounded-md text-center md:w-44 py-2"
            defaultValue={""}
          >
            <option className="font-semibold" value="" disabled>
              ...
            </option>
            <option className="font-semibold" value="bang">
              Vòng bảng
            </option>
            <option className="font-semibold" value="1/8">
              Vòng 1/8
            </option>
            <option className="font-semibold" value="tuket">
              Tứ kết
            </option>
            <option className="font-semibold" value="banket">
              Bán kết
            </option>
            <option className="font-semibold" value="tranhba">
              Tranh hạng ba
            </option>
            <option className="font-semibold" value="tranhba">
              Trung kết
            </option>
          </select> */}
        </div>

        <div className="mt-6 md:justify-center grid grid-cols-3 items-center gap-6 md:gap-10 md:col-span-3">
          <div className="text-center md:flex md:flex-row-reverse gap-4 items-center justify-self-end">
            {/* <img src={team1.flagUrl} alt="beo-phi" className="w-14 md:w-20" /> */}
            <span className="font-semibold text-lg md:text-2xl">
              {homeTeam.name}
            </span>
          </div>
          <div>
            <div className="flex justify-center gap-2 md:gap-4 items-center">
              {/* <input
                type="number"
                max={10}
                min={0}
                className="w-10 md:w-12 rounded-md py-2 text-center font-semibold text-xl border-2 border-gray-800"
                value={scoreTeam1}
                onChange={(e) => {
                  setScoreTeam1(Number(e.target.value));
                }}
              /> */}
              <span className="w-10 md:w-12 rounded-md py-2 text-center font-semibold text-xl border-4 border-emerald-200">
                {isNaN(homeTeam.goals) || awayTeam.goals === null
                  ? "*"
                  : homeTeam.goals}
              </span>
              |{" "}
              {/* <input
                type="number"
                max={10}
                min={0}
                className="w-10 md:w-12  rounded-md py-2 text-center font-semibold text-xl border-2 border-gray-800"
                value={scoreTeam2}
                onChange={(e) => {
                  setScoreTeam2(Number(e.target.value));
                }}
              /> */}
              <span className="w-10 md:w-12 rounded-md py-2 text-center font-semibold text-xl border-4 border-emerald-200">
                {isNaN(awayTeam.goals) || awayTeam.goals === null
                  ? "*"
                  : awayTeam.goals}
              </span>
            </div>
            <div className="flex justify-center items-center">
              <span className="w-10 md:w-12 rounded-md py-2 text-center font-semibold text-md ">
                {homeTeam.penalties}
              </span>
              |{" "}
              <span className="w-10 md:w-12 rounded-md py-2 text-center font-semibold text-md">
                {awayTeam.penalties}
              </span>
            </div>
          </div>

          {/* <div className="justify-self-center">{`${team1.score} : ${team2.score}`}</div> */}
          <div className="text-center md:flex items-center gap-4 justify-self-start justify-center">
            {/* <img src={team2.flagUrl} alt="beo-phi" className="w-14 md:w-20" /> */}
            <span className="font-semibold text-lg md:text-2xl">
              {awayTeam.name}
            </span>
          </div>
        </div>

        {/* <button
          onClick={() => setSelectedTeam2((prev) => !prev)}
          className="col-span-1 justify-self-center cursor-pointer"
        >
          <FaFutbol
            className={`${
              selectedTeam2 ? "text-green-600" : "white"
            }  duration-200 hover:scale-105`}
            size={44}
          />
        </button> */}
        <div className="mt-6 grid grid-cols-3 md:gap-10 gap-6 items-center">
          <select
            value={userSelectedHomeTeam}
            onChange={(e) => {
              const value = e.target.value;
              setUserSelectedHomeTeam(value);
              if (value === "phi") setUserSelectedAwayTeam("beo");
              else setUserSelectedAwayTeam("phi");
            }}
            className="font-semibold text-xs  w-16  md:text-lg rounded-md text-center md:w-24 justify-self-end py-2"
            defaultValue={""}
          >
            <option className="font-semibold" value="" disabled>
              ...
            </option>
            <option className="font-semibold" value="phi">
              Phì
            </option>
            <option className="font-semibold" value="beo">
              Beo
            </option>
          </select>
          <div className="flex justify-center items-center">
            <span className="text-xs md:text-lg">Choose team</span>
            <FaFutbol size={24} className="justify-self-center ml-3" />
          </div>
          <select
            value={userSelectedAwayTeam}
            onChange={(e) => {
              const value = e.target.value;
              setUserSelectedAwayTeam(value);
              if (value === "phi") setUserSelectedHomeTeam("beo");
              else setUserSelectedHomeTeam("phi");
            }}
            className="font-semibold text-xs w-16 md:text-lg rounded-md text-center md:w-24 justify-self-start py-2"
            defaultValue={""}
          >
            <option className="font-semibold" value="" disabled>
              ...
            </option>
            <option className="font-semibold" value="phi">
              Phì
            </option>
            <option className="font-semibold" value="beo">
              Beo
            </option>
          </select>
        </div>

        <div className="mt-6 grid grid-cols-3 md:gap-10 gap-6 items-center">
          <input
            type="number"
            max={10}
            min={0}
            className="w-10 md:w-12 rounded-md py-2 text-center font-semibold text-xl border-2  justify-self-end border-gray-800"
            value={plusScoreHomeTeam}
            onChange={(e) => {
              setPlusScoreHomeTeam(Number(e.target.value));
            }}
          />
          <div className="flex justify-center items-center">
            <span className="text-xs md:text-lg">Plus score</span>
            <FaPlus size={24} className="justify-self-center ml-3" />
          </div>
          <input
            type="number"
            max={10}
            min={0}
            className="w-8 md:w-12 rounded-md py-2 text-center font-semibold text-xl border-2 justify-self-start border-gray-800"
            value={plusScoreAwayTeam}
            onChange={(e) => {
              setPlusScoreAwayTeam(Number(e.target.value));
            }}
          />
        </div>

        <button
          disabled={
            !(
              userSelectedHomeTeam &&
              userSelectedAwayTeam &&
              status === "completed"
            )
          }
          onClick={() => handleSubmit()}
          className="block mx-auto my-0 text-center mt-8 md:mt-5 col-start-3 col-span-1 px-5 py-2 border-2 rounded-md hover:bg-[#FEC310] duration-200 disabled:hover:bg-inherit disabled:opacity-30"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default MatchCart;
