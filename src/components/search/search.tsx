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
      <Input />
      <p>Search</p>
    </div>
  );
}
