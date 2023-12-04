"use client";
import { Image as ImageType } from "@/type";
import React from "react";
import { Tab } from "@headlessui/react";

import GalleryTab from "./GalleryTab";
interface GalleryProps {
  image: ImageType[];
}
const Gallery: React.FC<GalleryProps> = ({ image }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reserve ">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
            {image.map((item)=><GalleryTab key={item.id} image={item}/>)}
        </Tab.List>
      </div>
    </Tab.Group>
  );
};

export default Gallery;
