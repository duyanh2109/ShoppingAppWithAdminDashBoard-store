"use client";
import { Product } from "@/type";
import Image from "next/image";
import React, { MouseEventHandler } from "react";
import IconButton from "./Icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./Currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
interface ProductCardProps {
  data: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const cart = useCart();
  const router = useRouter();
  const previewModal = usePreviewModal();
  const handleClick = () => {
    router.push(`/products/${data?.id}`);
  };
  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative ">
        <Image
          alt="Image"
          src={data?.image?.[0]?.url}
          sizes="20vw"
          fill
          className="aspect-squared object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 trasition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              icon={<Expand size={20} className="text-gray-600" />}
              onClick={onPreview}
            />
            <IconButton
              icon={<ShoppingCart size={20} className="text-gray-600" />}
              onClick={onAddToCart}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg ">{data?.name}</p>
        <p className="text-gray-500 text-sm">{data?.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
