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
    <section className="m-6 p-6 flex justify-center items-center">
      <div className="flex items-center justify-between m-4">
        <h1>
          <span className="text-white">userid: </span>
          <span className="font-bold">{router.query.userid}</span>
        </h1>
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
      <div className="flex flex-row flex-wrap mt-12">
        {data.map((img, index) => (
          <Image
            className="m-4 hover:scale-105"
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
