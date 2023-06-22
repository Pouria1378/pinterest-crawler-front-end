import React, { useState } from "react";
import Button from "../button/button";
import { useRouter } from "next/router";
import Image from "next/image";

type props = {
  data: Array<string>;
};

export default function UserID(props: props) {
  const { data } = props;
  const router = useRouter();

  return (
    <section>
      <div className="flex items-center justify-between">
        <h1>userid: {router.query.userid}</h1>
        <Button
          className=""
          onClick={() => {
            router.push({
              pathname: "/search",
            });
          }}
        >
          {" "}
          Try again?{" "}
        </Button>
      </div>
      <div className="flex flex-row flex-wrap">
        {data.map((img, index) => (
          <Image
            className="m-4"
            key={index}
            width={200}
            height={200}
            src={img}
            alt=""
          />
        ))}
      </div>
    </section>
  );
}
