import Layout from "@/components/layout/layout";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

type Props = {
  data: {
    message: string;
  };
};

const UserID: NextPage<Props> = ({ data }) => {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.userid}</h1>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  // const res = await fetch("https://example.com/api/data");
  // const data = await res.json();

  return {
    props: {
      data: {
        message: "",
      },
    },
  };
};

export default UserID;
