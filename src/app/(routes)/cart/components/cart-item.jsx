"use client";
import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import {  X } from "lucide-react";
import Image from "next/image";
import React from "react";
import useCart from "../../../../../hooks/use-cart";

const CartItems = ({ data }) => {
  const cart=useCart();
  const onRemove=()=>{
    cart.removeItem(data.id)
  }

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          className="object-cover object-center"
        />
      </div>
      <div className="relative mt-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0 ">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
            <p className="text-gray-500">{data.color.name}</p>
            <p className="text-gray-500">{data.size.name}</p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItems;
