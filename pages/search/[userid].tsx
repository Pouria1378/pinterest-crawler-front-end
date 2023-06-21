import Layout from "@/components/layout/layout";
import UserID from "@/components/userid/userid";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

type Props = {
  data: {
    message: string;
  };
};

const UserIDPage: NextPage<Props> = ({ data }) => {
  const router = useRouter();

  return (
    <Layout>
      <UserID />
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

export default UserIDPage;
