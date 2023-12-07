"use client";
import React, { useEffect, useState } from "react";
import Button from "./UI/Button";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavBarAction = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const cart = useCart();
  const router = useRouter();
  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center ml-auto gap-x-4">
      <Button
        className="flex items-center rounded-full px-4 py-2 bg-black"
        onClick={() => router.push("/cart")}
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavBarAction;
