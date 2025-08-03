import { OrdersTable } from "@/components/dashbord/orders/Order-table";
import Compelxpagination from "@/components/global/Compelxpagination";
import { fetchAdminOrders } from "@/utils/actions";
// import { EcommerceHeader } from "@/components/ecommerce-header"
type Props = {
  searchParams?: { Page?: string; status?: string };
};
export default async function OrdersPage({ searchParams }: Props) {
  const Page = parseInt(searchParams?.Page || "1");
  const status = searchParams?.status || "all";
  // const { orders, selectedStatus, cont } = await filtarOrderStatusAction();
  const { orders, metadata, statuse } = await fetchAdminOrders({
    Page,
    status,
  });
  console.log(statuse);
  return (
    <div className="min-h-screen  ">
      {/* <EcommerceHeader /> */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Orders Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage customer orders, track status, and update delivery
            information
          </p>
        </div>
        <OrdersTable orders={orders} />
        <Compelxpagination
          pathe={"dashbord/products"}
          Page={Page}
          metadata={metadata}
        />
      </main>
    </div>
  );
}
