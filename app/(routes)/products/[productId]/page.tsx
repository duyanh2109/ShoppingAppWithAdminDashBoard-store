import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Container from "@/components/UI/Container";
import ProductLists from "@/components/UI/product-lists";
import Gallery from "@/components/gallery";
import React from "react";

interface ProductPageProps {
  params: {
    productId: string;
  };
}
const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const suggestedProduct = await getProducts({
    categoryId: product?.category?.id,
  });
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery image={product?.image}/>
            <div className="mt-10 sm:mt-16 sm:px-0 lg:mt-0">
                Info
            </div>
          </div>
          <hr className="my-10"/>
          <ProductLists title="Related Products" items={suggestedProduct}/>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
