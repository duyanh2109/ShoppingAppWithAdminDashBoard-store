"use client";
import Button from "@/components/UI/Button";
import Currency from "@/components/UI/Currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/type";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";

const Summary = () => {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Successfully check out");
      removeAll();
    }
    if (searchParams.get("canceled")) {
      toast.error("Something went wrong");
    }
  }, [searchParams, removeAll]);
  const totalPrice = items.reduce(
    (total, item) => total + Number(item.price),
    0
  );
  const onCheckout = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        { productIds: items.map((item) => item.id) }
      );
      window.location = response.data.url;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        <div className="mt-16 rounded-lg bg-gray-500 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
          <ClipLoader
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="mt-16 rounded-lg bg-gray-500 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
          <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
          <div className="mt-6 space-y-4 ">
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <div className="text-base font-medium text-gray-900">
                Order Total
              </div>
              <Currency value={totalPrice} />
            </div>
          </div>
          <Button onClick={onCheckout} className="w-full mt-6">
            Check out
          </Button>
        </div>
      )}
    </>
  );
};

export default Summary;
