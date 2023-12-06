import { Size } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;
const getSize = async (id:string): Promise<Size> => {
  
  const res = await fetch(`${URL}/${id}`,{ next: { revalidate: 0 } });
  return res.json();
};
export default getSize;
