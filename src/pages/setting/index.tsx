import FormInput from "components/common/FormInput";
import Axios from "config/Axios";
import Head from "next/head";
import { useState } from "react";

type Contact = {
  formTitle: string;
  address: string;
  firstPhoneNumber: string;
  secondPhoneNumber?: string;
  email: string;
};

export type FormValue = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type nameType = keyof FormValue;

const initForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Setting = () => {
  const [formContact, setFormContact] = useState<FormValue>(initForm);

  const handleSubmit = (body: any) => {
    const res = Axios.post("/setting", body);

    console.log(res);
  };

  const handleFormContact = (e: any) => {
    setFormContact((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="relative before:blur-sm before:absolute before:bg-home-bg before:bg-cover before:h-full before:w-full before:-z-10 min-h-screen pb-40">
      <Head>
        <title>ChiPoPo</title>
        <meta name="description" content="I'm Front-end developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-36 pb-20 wrap-content">
        <form onSubmit={handleSubmit}>
          {inputs.map((input, idx) => (
            <FormInput
              key={idx}
              {...input}
              value={formContact[input.name as nameType]}
              onChange={handleFormContact}
              className="w-full text-[14px] md:text-[17px] leading-[24px] px-[18px] py-3 md:py-[12px] font-light mb-5 md:mb-[34px] border border-['#e0e8ee'] text-['#555'] bg-chipo-bg-second rounded-[4px]"
            />
          ))}
        </form>
        <button type="submit">Save</button>
      </div>
    </div>
  );
};

const inputs = [
  {
    name: "name",
    type: "text",
    placeholder: "Name",
    required: true,
    errorMessage: "This field is required.",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email Address",
    required: true,
    errorMessage: "This field is required.",
  },
  {
    name: "subject",
    type: "text",
    placeholder: "Subject",
    required: true,
    errorMessage: "This field is required.",
  },
  {
    name: "message",
    type: "text",
    placeholder: "Message",
    required: true,
    types: "textarea",
    errorMessage: "This field is required.",
  },
];

export default Setting;

// export const getServerSideProps = async () => {
//   const res = await Axios.get("/newsletter");
//   return { props: { emails: res.data } };
// };
