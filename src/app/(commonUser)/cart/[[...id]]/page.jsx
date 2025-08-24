import ShoppingCart from "@/components/pages/home/container/shoppingCart/ShoppingCart";

export default function Page({ params }) {
  const productId = params.id?.[0];

  return (
    <div>
      <ShoppingCart productId={productId} />
    </div>
  );
}
