import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import React from "react";
export const revalidate = 0;

const Page = async () => {
  const product = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("6cd7948a-129d-46a2-9fdc-d09470f9aa1d");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:py-6 lg:px-8 ">
          <ProductList title="Featured Product" item={product} />
        </div>
      </div>
    </Container>
  );
};

export default Page;
