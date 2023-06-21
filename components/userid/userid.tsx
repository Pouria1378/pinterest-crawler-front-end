import { useState } from "react";
import Button from "../button/button";
import { useRouter } from "next/router";

export default function UserID() {
  const router = useRouter();

  return (
    <section>
      <div className="flex items-center justify-between">
        <h1>{router.query.userid}</h1>
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
      <div>{}</div>
    </section>
  );
}
