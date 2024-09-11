import Head from "next/head";
import { Inter } from 'next/font/google'
import styles from "@/styles/Home.module.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Marina França Beauty</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${inter.className}`}
      >
        <main className={styles.main}>
          <h1 className={`${styles.title}`}>MARINA FRANÇA BEAUTY</h1>
          <div className={`${styles.linkContainer}`}>
            <a className={`${styles.link}`} href={"https://api.whatsapp.com/send/?phone=5531996927404&text&type=phone_number&app_absent=0"} target="_blank" download><img className={`${styles.whatsapp}`} src="/whatsapp.svg" alt="whatsapp-logo"/> Entre em contato</a>
            <a className={`${styles.link}`} href={"https://drive.google.com/file/d/1HSJf5ovGLPeOzYaCUiKMUky9p7J9dWnf/view?usp=drivesdk"} target="_blank">Carta de serviços</a>
          </div>

        </main>
        <img className={`${styles.image}`} src="/beauty.svg" alt="beauty text"/>
      </div>
    </>
  );
}
