"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";

interface PaymentMethod {
  id: string;
  name: string;
  logo: string;
  redirectGatewayURL: string;
}

interface Props {
  paymentMethods: {
    data: {
      desc: PaymentMethod[];
    };
  };
}

export default function PaymentMethodSelection({ paymentMethods }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  const handleClick = (method: PaymentMethod) => {
    console.log("Clicked method ID:", method.id); // ✅ Debug
    setSelected(method.id);
    setTimeout(() => {
      router.push(method.redirectGatewayURL);
    }, 100);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        একটি পেমেন্ট মেথড নির্বাচন করুন:
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {paymentMethods.data.desc.map((method) => {
          const isSelected = selected === method.id;
          console.log("Rendering", method.id, "Selected:", isSelected); // ✅ Debug

          return (
            <Card
              key={method.id}
              onClick={() => handleClick(method)}
              className={`cursor-pointer transition-all duration-150 border-2 rounded-xl hover:shadow-md hover:bg-primary/10`}
            >
              <CardContent className="flex flex-col items-center py-6">
                <Image
                  src={method.logo}
                  alt={method.name}
                  width={50}
                  height={50}
                  className="mb-4"
                />
                <span className="font-medium text-gray-800 text-base">{method.name}</span>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
