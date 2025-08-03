import TableProduct from "@/components/dashbord/products/TableProduct";
import { fetchAdminProducts } from "@/utils/actions";

async function AdminProductsPage() {
  const items = await fetchAdminProducts();
  return (
    <div>
      <TableProduct items={items} />
    </div>
  );
}

export default AdminProductsPage;
