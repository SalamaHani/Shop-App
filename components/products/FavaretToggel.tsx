import { fetchFavoriteId } from "@/utils/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";
import { getUserFromSession } from "@/lib/Auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function FavoriteToggleButton({ productId }: { productId: string }) {
  const user = await getUserFromSession(await cookies());
  if (user == null) return redirect("/login");
  const favoriteId = await fetchFavoriteId({ productId });
  return <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />;
}
export default FavoriteToggleButton;
