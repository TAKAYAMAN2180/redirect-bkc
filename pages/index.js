import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import {useEffect} from "react";
import {useRouter} from "next/router";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const Redirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('https://rits-fes-map.ritsumei.club/kic');
  }, [router]);

  return (
      <div>
        <h1>Redirecting...</h1>
      </div>
  );
};

export default Redirect;