import FormInput from "components/common/FormInput";
import Axios from "config/Axios";
import Head from "next/head";
import { useState } from "react";
import { toast } from "react-toastify";

export type FormValue = {
  firstStagePercent: number;
  roundOf16Percent: number;
  quarterFinalPercent: number;
  semiFinalPercent: number;
  thirdPlacePercent: number;
  finalPercent: number;
};

type nameType = keyof FormValue;

const initForm = {
  firstStagePercent: 0,
  roundOf16Percent: 0,
  quarterFinalPercent: 0,
  semiFinalPercent: 0,
  thirdPlacePercent: 0,
  finalPercent: 0,
};

const Setting = () => {
  const [formSetting, setFormSetting] = useState<FormValue>(initForm);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log("formSetting", formSetting);
      const res = await Axios.put("/setting", { ...formSetting, id: 1 });
      console.log("res", res);
      toast.success("Update successfully");
    } catch (error: any) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }
  };

  const handleFormSetting = (e: any) => {
    setFormSetting((prev: any) => ({
      ...prev,
      [e.target.name]: Number(e.target.value),
    }));
  };

  return (
    <div className="relative bg-red-900 bg-opacity-50  before:blur-sm before:absolute before:bg-home-bg before:bg-cover before:h-full before:w-full before:-z-10 min-h-screen">
      <Head>
        <title>ChiPoPo</title>
        <meta name="description" content="I'm Front-end developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-36 pb-5 md:w-[800px] wrap-content">
        <h2 className="heading mb-24">Setting</h2>
        <form>
          <div className="grid-cols-2 grid gap-10">
            {inputs.map((input, idx) => (
              <FormInput
                key={idx}
                {...input}
                value={formSetting[input.name as nameType]}
                onChange={handleFormSetting}
                className="w-full text-[14px] md:text-lg font-semibold leading-[24px] px-[18px] py-3 md:py-[12px] mb-5 md:mb-[34px] border border-[#e0e8ee] text-[#49BCE3] bg-chipo-bg-second rounded-[4px]"
              />
            ))}
          </div>
          <div className="text-right">
            <button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              className="px-5 py-2 rounded-md bg-red-900 hover:bg-[#FEC310] border border-white duration-200"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const inputs = [
  {
    name: "firstStagePercent",
    types: "number",
    placeholder: "Please enter...",
    required: true,
    errorMessage: "This field is required.",
    label: "First Stage percent",
  },
  {
    name: "roundOf16Percent",
    types: "number",
    placeholder: "Please enter...",
    required: true,
    errorMessage: "This field is required.",
    label: "Round Of 16 percent",
  },
  {
    name: "quarterFinalPercent",
    types: "number",
    placeholder: "Please enter...",
    required: true,
    errorMessage: "This field is required.",
    label: "Quarter Final percent",
  },
  {
    name: "semiFinalPercent",
    types: "number",
    placeholder: "Please enter...",
    required: true,
    errorMessage: "This field is required.",
    label: "Semi Final percent",
  },
  {
    name: "thirdPlacePercent",
    types: "number",
    placeholder: "Please enter...",
    required: true,
    errorMessage: "This field is required.",
    label: "Third Place percent",
  },
  {
    name: "finalPercent",
    types: "number",
    placeholder: "Please enter...",
    required: true,
    errorMessage: "This field is required.",
    label: "Final percent",
  },
];

export default Setting;

// export const getServerSideProps = async () => {
//   const res = await Axios.get("/newsletter");
//   return { props: { emails: res.data } };
// };
