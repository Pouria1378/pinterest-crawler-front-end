import Image from "next/image";
import Input from "../input/input";
import { useState } from "react";
import Button from "../button/button";

export default function Search() {
  const [userID, setUserID] = useState("");

  return (
    <div>
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
      <Button className="w-full mt-5"> search </Button>
    </div>
  );
}
