import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = (): JSX.Element => {
  const router = useRouter();

  const path = useMemo(() => {
    return router.pathname;
  }, [router.pathname]);

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={`fixed left-0 top-0 w-full z-10 ease-in duration-200 font-["rubikdirt"] text-white bg-transparent`}
    >
      <div
        className={`max-w-[1240px] w-fit rounded-b-md m-auto flex gap-3 md:gap-5 justify-between items-center ease-in bg-red-900 p-4 md:p-4 md:py-6`}
      >
        <ul className="hidden md:flex md:flex-1 justify-center font-['rubikdirt'] gap-5 ease-in">
          <Link href="/">
            <li
              className={`px-4 py-2 rounded-md cursor-pointer border border-white hover:scale-105 ease-in duration-200 ${
                path === "/" ? "bg-[#FEC310]" : "bg-red-900"
              } `}
            >
              Home
            </li>
          </Link>

          <Link href="/dashboard">
            <li
              className={`px-4 py-2 rounded-md cursor-pointer border border-white hover:scale-105 ease-in duration-200 ${
                path === "/dashboard" ? "bg-[#FEC310]" : "bg-red-900"
              }`}
            >
              Dashboard
            </li>
          </Link>

          <Link href="/result">
            <li
              className={`px-4 py-2 rounded-md cursor-pointer border border-white hover:scale-105 ease-in duration-200 ${
                path === "/result" ? "bg-[#FEC310]" : "bg-red-900"
              }`}
            >
              Result
            </li>
          </Link>

          <Link href="/setting">
            <li
              className={`px-4 py-2 rounded-md cursor-pointer border border-white hover:scale-105 ease-in duration-200 ${
                path === "/setting" ? "bg-[#FEC310]" : "bg-red-900"
              }`}
            >
              Setting
            </li>
          </Link>
        </ul>

        {/* Mobile Button */}
        <div
          onClick={handleNav}
          className="block sm:hidden cursor-pointer z-10"
        >
          {nav ? (
            <AiOutlineClose size={35} className="text-white" />
          ) : (
            <AiOutlineMenu size={35} className="text-white" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-red-900 text-center ease-in duration-300 ${
            nav ? "left-0" : "left-[-100%]"
          }`}
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-[#FEC310]"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-[#FEC310]"
            >
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-[#FEC310]"
            >
              <Link href="/result">Result</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-[#FEC310]"
            >
              <Link href="/setting">Setting</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
