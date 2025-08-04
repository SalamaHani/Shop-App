import TableProduct from "@/components/dashbord/products/TableProduct";
import Compelxpagination from "@/components/global/Compelxpagination";
import { fetchAdminProducts } from "@/utils/actions";
type Props = {
  searchParams?: { Page?: string };
};
async function AdminProductsPage({ searchParams }: Props) {
  const Page = parseInt(searchParams?.Page || "1");
  const { products, metadata } = await fetchAdminProducts({ Page });
  console.log(Page);
  return (
    <div className="min-h-screen  ">
      {/* <EcommerceHeader /> */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Products Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your product catalog, inventory, and pricing
          </p>
        </div>
        <TableProduct products={products} />
        <Compelxpagination
          pathe={"dashbord/products"}
          Page={Page}
          metadata={metadata}
        />
      </main>
    </div>
  );
}

export default AdminProductsPage;
