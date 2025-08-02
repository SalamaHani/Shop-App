import { OrdersTable } from "@/components/dashbord/orders/order-table";
import { fetchAdminOrders } from "@/utils/actions";
// import { EcommerceHeader } from "@/components/ecommerce-header"

export default async function OrdersPage() {
  const orders = await fetchAdminOrders();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
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
      </main>
    </div>
  );
}
