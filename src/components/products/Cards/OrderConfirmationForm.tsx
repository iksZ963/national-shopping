// components/OrderConfirmationForm.tsx
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { DialogClose } from '@/components/ui/dialog';
import { Product } from '@/types/Product';

interface OrderConfirmationFormProps {
  product: Product;
}

export function OrderConfirmationForm({ product }: OrderConfirmationFormProps) {
  const [quantity, setQuantity] = useState(product.quantity ?? 1);

  return (
    <Card className="mx-auto max-w-5xl border-0">
      <CardHeader>
        <CardTitle className="text-xl">Order confirmation</CardTitle>
        <CardDescription>Confirm your order details</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Product preview */}
        <div className="w-full md:min-w-[700px]">
          <ul className="space-y-4 w-full">
            <li className="flex items-center gap-4">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={64}
                height={64}
                className="rounded object-cover"
              />
              <div>
                <h3 className="text-sm text-gray-900">{product.name}</h3>
              </div>
              <div className="flex flex-1 items-center justify-end gap-4">
                <span>৳{product.price}</span>
                <form>
                  <Label htmlFor="Line1Qty" className="sr-only">Quantity</Label>
                  <Input
                    id="Line1Qty"
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="h-8 w-12 p-0 text-center text-xs"
                  />
                </form>
                <span className="text-primary">৳{(product.price * quantity).toFixed(2)}</span>
                <DialogClose asChild>
                  <Button variant="ghost" className="text-gray-600 hover:text-red-600">
                    Remove
                  </Button>
                </DialogClose>
              </div>
            </li>
          </ul>
        </div>

        {/* User details */}
        <div className="w-full mt-8 flex flex-col gap-4">
          <div className="grid gap-3 w-full">
            <Label htmlFor="name">আপনার নাম*</Label>
            <Input id="name" type="text" placeholder="আপনার নাম*" required />
          </div>
          <div className="grid gap-3 w-full">
            <Label htmlFor="address">আপনার সম্পূর্ণ ঠিকানা*</Label>
            <Input id="address" type="text" placeholder="আপনার সম্পূর্ণ ঠিকানা*" required />
          </div>
          <div className="grid gap-3 w-full">
            <Label htmlFor="phone">আপনার মোবাইল নাম্বার*</Label>
            <Input id="phone" type="text" placeholder="আপনার মোবাইল নাম্বার*" required />
          </div>
          <div className="grid gap-2 w-full">
            <Label htmlFor="area">এলাকা*</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="আপনার এলাকা নির্বাচন করুন" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dhaka">Dhaka</SelectItem>
                <SelectItem value="chattogram">Chattogram</SelectItem>
                <SelectItem value="khulna">Khulna</SelectItem>
                {/* Add more areas as needed */}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Submit button */}
        <div className="w-full mt-8">
          <DialogClose asChild>
            <Button className="w-full" variant="default">
              অর্ডার কনফার্ম করুন
            </Button>
          </DialogClose>
        </div>
      </CardContent>
    </Card>
  );
}
