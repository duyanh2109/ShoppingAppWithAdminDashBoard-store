import { Color } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;
const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL, { next: { revalidate: 60 } });
  return res.json();
};
export default getColors;
