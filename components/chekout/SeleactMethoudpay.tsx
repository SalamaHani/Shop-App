import React from "react";
import bkash from "../../public/imges/payment/bkash.png";
import express from "../../public/imges/payment/express.png";
import mastercard from "../../public/imges/payment/mastercard.png";
import nagad from "../../public/imges/payment/nagad.png";
import upay from "../../public/imges/payment/upay.png";
import Image from "next/image";

function SeleactMethoudpay() {
  return (
    <>
      <div className="py-3">
        <p className="text-sm font-bold mb-4">Use payment method</p>
        <div className="flex flex-wrap items-center gap-7">
          <Image src={bkash} alt="" width="35" height="30" />
          <Image src={express} alt="" width="35" height="30" />
          <Image src={mastercard} alt="" width="35" height="30" />
          <Image src={nagad} alt="" width="35" height="30" />
          <Image src={upay} alt="" width="35" height="30" />
        </div>
      </div>
    </>
  );
}

export default SeleactMethoudpay;
