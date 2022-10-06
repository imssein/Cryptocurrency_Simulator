import React from "react";
import LoginForm from "../../components/User/LoginForm";
import Head from "next/head";
function login(props) {
  return (
    <div className="">
      <Head>
        <title>모의 투자 사이트 | 로그인</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-28 text-center">
        <div className="font-bold text-3xl my-11">        
          <p>모의 투자 사이트에</p>
          <p className="pt-2">오신것을 환영합니다. </p>
        </div>
        <LoginForm />
      </div>
      </div>
  );
}

export default login;