import PaymentClient from "./PaymentClient";

type paymentPageProps = {
  searchParams: Promise<{
    orderId?: string;
    cartId?: string;
  }>;
};
export default async function PaymentPage({ searchParams }: paymentPageProps) {
  const parmes = await searchParams;
  const orderId = parmes.orderId || "";
  const cartId = parmes.cartId || "";

  return <PaymentClient orderId={orderId} cartId={cartId} />;
}
