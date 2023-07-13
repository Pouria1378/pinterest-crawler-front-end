import Image from "next/image";
import Input from "../input/input";
import { useState } from "react";
import Button from "../button/button";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  const [userID, setUserID] = useState("");

  return (
    <div className="p-6 rounded-md overflow-hidden bg-white shadow-xl m-auto mt-20 max-w-xs">
      <Image
        width={200}
        height={200}
        className="mb-5"
        src="/pinterestLogo.png"
        alt="pinterestLogo"
      />
      <Input
        name="test"
        label="enter user id to crawl"
        placeholder="user ID"
        onChange={(e) => {
          console.log("====================================");
          console.log(e.target.value);
          console.log("====================================");
          setUserID(e.target.value);
          return e.target.value;
        }}
      />
      <Button
        className="w-full mt-5"
        onClick={() => {
          router.push({
            pathname: "/search/[userid]",
            query: { userid: userID },
          });
        }}
      >
        {" "}
        search{" "}
      </Button>
    </div>
  );
}
