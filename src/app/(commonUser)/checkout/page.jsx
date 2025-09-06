import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import CheckoutPage from "@/components/pages/home/container/CheckoutPage/CheckoutPage";

export default async function Checkout() {
  const session = await getServerSession(authOptions);

  if (!session) {
    const params = new URLSearchParams({ callbackUrl: "/checkout" });
    redirect(`/signin?${params.toString()}`);
  }

  return <CheckoutPage />;
}
