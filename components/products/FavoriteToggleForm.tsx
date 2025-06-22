"use client";
import FormContainer from "../form/FormContener";
import { toggleFavoriteAction } from "@/utils/actions";
import { CardSubmitButton } from "../form/Buttons";

type FavoriteToggleFormProps = {
  productId: string;
  favoriteId: string | null;
};

function FavoriteToggleForm({
  productId,
  favoriteId,
}: FavoriteToggleFormProps) {
  return (
    <FormContainer action={toggleFavoriteAction}>
      <input type="hidden" name="productId" value={productId} />
      <input
        type="hidden"
        name="favoriteId"
        value={favoriteId != null ? favoriteId : ""}
      />
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
}
export default FavoriteToggleForm;
