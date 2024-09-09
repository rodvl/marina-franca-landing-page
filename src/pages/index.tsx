import Head from "next/head";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Marina França Beauty</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <h1>oie marinex espero que funcione</h1>

          <a href={"https://api.whatsapp.com/send/?phone=5531996927404&text&type=phone_number&app_absent=0"} target="_blank" download>Whatsapp</a>
          <a href={"https://drive.google.com/file/d/1jlyzD_Ymll2qLJ1SKLY7Oo8iqthTVPaz/view?usp=drivesdk"} target="_blank">Carta de serviços</a>

        </main>
      </div>
    </>
  );
}
