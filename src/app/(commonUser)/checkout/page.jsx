import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import CheckoutPage from "@/components/pages/home/container/CheckoutPage/CheckoutPage";


export default async function Checkout() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/signin"); 

  return <CheckoutPage />; 
}
