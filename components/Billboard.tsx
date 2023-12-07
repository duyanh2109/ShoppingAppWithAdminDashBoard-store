import React from "react";
import { Billboard as BillboardType } from "@/type";
import Image from "next/image";

interface BillboardProps {
  data: BillboardType;
}
const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden relative h-[400px] lg:h-[500px] my-6">
      <Image
        sizes="100vw"
        objectFit="cover"
        alt=""
        layout="fill"
        className="rounded-xl  aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover object-cover object-center w-full "
        src={data?.imageUrl}
      ></Image>

      <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8 relative z-1">
        <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
          {data?.label}
        </div>
      </div>
    </div>
  );
};

export default Billboard;
