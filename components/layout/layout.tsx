import Head from "next/head";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex h-full">
      <Head>
        <title>Pinterest Crawler</title>
      </Head>
      {/* <header>Header goes here</header> */}
      <main>{children}</main>
      {/* <footer>Footer goes here</footer> */}
    </div>
  );
};

export default Layout;
