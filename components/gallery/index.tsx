"use client";
import { Image as ImageType } from "@/type";
import React from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import GalleryTab from "./GalleryTab";
interface GalleryProps {
  image: ImageType[];
}
const Gallery: React.FC<GalleryProps> = ({ image }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse ">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
            {image.map((item)=><GalleryTab key={item.id} image={item}/>)}
        </Tab.List>
      </div>
      <Tab.Panels className="w-full aspect-square">
        {image.map((item)=><Tab.Panel key={item.id}>
        <div className="aspect-square w-full h-full relative sm:rounded-lg overflow-hidden">
          <Image fill src={item.url} alt="image" className="object-cover object-center"/>
        </div>
        </Tab.Panel>)}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
