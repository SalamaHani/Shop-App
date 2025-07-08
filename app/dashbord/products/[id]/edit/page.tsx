import { fetchAdminProductDetails } from "@/utils/actions";
import Dataget from "@/components/dashbord/products/getData";

async function EditProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await fetchAdminProductDetails(id);
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">update product</h1>
      <Dataget Product={product} id={id} />
    </section>
  );
}
export default EditProductPage;
