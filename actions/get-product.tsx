import { Product } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;
const getProduct = async (id:string): Promise<Product> => {
  
  const res = await fetch(`${URL}/${id}`,{ next: { revalidate: 60 } });
  return res.json();
};
export default getProduct;
