import Image from "next/image";
import Input from "../input/input";

export default function Search() {
  return (
    <div>
      <Image
        width={200}
        height={200}
        src={"/pinterestLogo.png"}
        alt="pinterestLogo"
      />
      <Input
        name="test"
        defaultValue={1}
        onChange={(e) => {
          console.log("====================================");
          console.log(e.target.value);
          console.log("====================================");
          return e.target.value;
        }}
      />
      <p>Search</p>
    </div>
  );
}
