import { AxiosWC } from "config/Axios";
import Head from "next/head";

const Login = () => {
  const handleLogin = () => {
    const res = AxiosWC.post("/v1/user/login", {
      email: "beophi@gmail.com",
      password: "123456789",
    });

    console.log(res);
  };
  return (
    <div className="bg-gray-900">
      <Head>
        <title>ChiPoPo</title>
        <meta name="description" content="I'm Front-end developer" />
        {/* <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-36 pb-20 wrap-content">
        <button onClick={() => handleLogin()}>Login</button>
      </div>
    </div>
  );
};

export default Login;

// export const getServerSideProps = async () => {
//   const res = await Axios.get("/newsletter");
//   return { props: { emails: res.data } };
// };
