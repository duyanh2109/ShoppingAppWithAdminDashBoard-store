import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/Billboard";
import Container from "@/components/UI/Container";
import ProductLists from "@/components/UI/product-lists";
import React from "react";

const HomePage = async () => {
  const billboards = await getBillboards(
    "0c5cd914-bf70-46e4-9d47-67606e94064c"
  );
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards} />
      
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductLists title="Featured Products" items={products} />
      </div>
      </div>
    </Container>
  );
};

export default HomePage;
