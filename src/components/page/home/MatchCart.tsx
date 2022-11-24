import Axios from "config/Axios";
import { useState } from "react";
import { FaFutbol, FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

type Team = {
  name: string;
  flagUrl: string;
  score: number;
};
const MatchCart = ({
  team1,
  team2,
  id,
  time,
}: {
  team1: Team;
  team2: Team;
  id: string;
  time: string;
}) => {
  const [userSelectedTeam1, setUserSelectedTeam1] = useState<string>();
  const [userSelectedTeam2, setUserSelectedTeam2] = useState<string>();
  const [scoreTeam1, setScoreTeam1] = useState<number>();
  const [scoreTeam2, setScoreTeam2] = useState<number>();
  const [typeMatch, setTypeMatch] = useState<string>();
  const [plusScoreTeam1, setPlusScoreTeam1] = useState<number>(0);
  const [plusScoreTeam2, setPlusScoreTeam2] = useState<number>(0);

  const handleSubmit = async () => {
    console.log("click");
    let winner;
    if (!(scoreTeam1 && scoreTeam2)) return;

    if (scoreTeam1 + plusScoreTeam1 > scoreTeam2 + plusScoreTeam2) {
      winner = userSelectedTeam1;
    } else {
      if (scoreTeam1 + plusScoreTeam1 === scoreTeam2 + plusScoreTeam2) {
        winner = "draw";
      } else winner = userSelectedTeam2;
    }

    const body = {
      id: id,
      timeMatch: time,
      team1: {
        name: team1.name,
        flagUrl: team1.flagUrl,
        score: team1.score,
        userSelected: userSelectedTeam1,
        plusScore: plusScoreTeam1,
      },
      team2: {
        name: team2.name,
        flagUrl: team2.flagUrl,
        score: team2.score,
        userSelected: userSelectedTeam2,
        plusScore: plusScoreTeam2,
      },
      winner: winner,
      typeMatch: typeMatch,
    };

    try {
      const result = await Axios.post("/worldcup", body);
      console.log(result);
      toast.success("Battle added successfully");
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };
  // useEffect(() => {
  //   if (!userSelectedTeam1 && !userSelectedTeam2) return;

  //   if (userSelectedTeam1) {
  //     if (userSelectedTeam1 === "phi") {
  //       setUserSelectedTeam2("beo");
  //       return;
  //     }
  //     setUserSelectedTeam2("phi");
  //     return;
  //   } else {
  //     if (userSelectedTeam2 === "phi") {
  //       setUserSelectedTeam1("beo");
  //       return;
  //     }
  //     setUserSelectedTeam1("phi");
  //   }
  // }, [userSelectedTeam1, userSelectedTeam2]);

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

        <div className="text-center">
          <span className="text-xs md:text-lg block">Select type match</span>
          <select
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
          </select>
        </div>

        <div className="mt-6 md:justify-center grid grid-cols-3 items-center gap-6 md:gap-10 md:col-span-3">
          <div className="text-center md:flex md:flex-row-reverse gap-4 items-center justify-self-end">
            <img src={team1.flagUrl} alt="beo-phi" className="w-14 md:w-20" />
            <span className="font-semibold text-xs md:text-lg">
              {team1.name}
            </span>
          </div>
          <div>
            <div className="flex justify-center gap-2 md:gap-4 items-center">
              <input
                type="number"
                max={10}
                min={0}
                className="w-10 md:w-12 rounded-md py-2 text-center font-semibold text-xl border-2 border-gray-800"
                value={scoreTeam1}
                onChange={(e) => {
                  setScoreTeam1(Number(e.target.value));
                }}
              />
              |{" "}
              <input
                type="number"
                max={10}
                min={0}
                className="w-10 md:w-12  rounded-md py-2 text-center font-semibold text-xl border-2 border-gray-800"
                value={scoreTeam2}
                onChange={(e) => {
                  setScoreTeam2(Number(e.target.value));
                }}
              />
            </div>
            <div className="mt-2 text-center">
              <span className="text-xs md:text-lg">Enter score</span>
            </div>
          </div>

          {/* <div className="justify-self-center">{`${team1.score} : ${team2.score}`}</div> */}
          <div className="text-center md:flex items-center gap-4 justify-self-start justify-center">
            <img src={team2.flagUrl} alt="beo-phi" className="w-14 md:w-20" />
            <span className="font-semibold text-xs md:text-lg">
              {team2.name}
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
            value={userSelectedTeam1}
            onChange={(e) => {
              const value = e.target.value;
              setUserSelectedTeam1(value);
              if (value === "phi") setUserSelectedTeam2("beo");
              else setUserSelectedTeam2("phi");
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
            value={userSelectedTeam2}
            onChange={(e) => {
              const value = e.target.value;
              setUserSelectedTeam2(value);
              if (value === "phi") setUserSelectedTeam1("beo");
              else setUserSelectedTeam1("phi");
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
            value={plusScoreTeam1}
            onChange={(e) => {
              setPlusScoreTeam1(Number(e.target.value));
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
            value={plusScoreTeam2}
            onChange={(e) => {
              setPlusScoreTeam2(Number(e.target.value));
            }}
          />
        </div>

        <button
          disabled={
            !(
              typeMatch &&
              userSelectedTeam1 &&
              userSelectedTeam2 &&
              scoreTeam1 !== undefined &&
              scoreTeam2 !== undefined
            )
          }
          onClick={() => handleSubmit()}
          className="block mx-auto my-0 text-center mt-8 md:mt-5 col-start-3 col-span-1 px-5 py-2 border-2 rounded-md hover:bg-green-600 duration-200 disabled:hover:bg-inherit disabled:opacity-30"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default MatchCart;
