import React from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { Image as ImageType } from "@/type";
import { cn } from "@/lib/utils";
interface GalleryTabProps {
  image: ImageType;
}
const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative aspect-square cursor-pointer flex  items-center justify-center rounded-md bg-white">
      {({ selected })=>{
        return <div>
        <span className="h-full absolute w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
            fill
            src={image.url}
            alt=""
            sizes="100vw"
            className="object-cover object-center"
            />
        </span>
        <span className={cn("absolute inset-0 rounded-md ring-offset-2",selected?"ring-black":"ring-transparent")}/>
        </div>
      }}
    </Tab>
  );
};

export default GalleryTab;
