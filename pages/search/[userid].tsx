import Layout from "@/components/layout/layout";
import UserID from "@/components/userid/userid";
import { GetServerSideProps, NextPage } from "next";

type Props = {
  data: Array<string>;
};

const UserIDPage: NextPage<Props> = ({ data }) => {
  console.log("====================================");
  console.log("data", data);
  console.log("====================================");
  return (
    <Layout>
      <UserID data={data} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (req) => {
  const postdata = {
    userID: req.query.userid,
  };
  const res = await fetch("http://127.0.0.1:8000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postdata),
  });
  const data = await res.json();

  // console.log("data", data);

  return {
    props: {
      data: data.imagesLinks || [],
    },
  };
};

export default UserIDPage;
