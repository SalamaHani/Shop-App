import { OrdersTable } from "@/components/dashbord/orders/Order-table";
import { filtarOrderStatusAction } from "@/utils/actions";
// import { EcommerceHeader } from "@/components/ecommerce-header"

export default async function OrdersPage() {
  const { orders, selectedStatus, cont } = await filtarOrderStatusAction();
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
        <OrdersTable
          orders={orders}
          selectedStatus={selectedStatus}
          cont={cont}
        />
      </main>
    </div>
  );
}
