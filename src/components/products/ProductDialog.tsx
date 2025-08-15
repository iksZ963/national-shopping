import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProductDetailsForDialog from "./Cards/ProductDetailsForDialog";
import { Product } from "@/types/Product";

interface ProductDialogProps {
  children: React.ReactNode;
  product: Product;
}

const ProductDialog = ({ children, product }: ProductDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-max max-h-screen overflow-y-auto scrollbar-none">
        <ProductDetailsForDialog product={product} />
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
