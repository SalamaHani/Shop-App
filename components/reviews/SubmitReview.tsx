import { SubmitButton } from "@/components/form/Buttons";
import { Card } from "@/components/ui/card";
import FormContainer from "../form/FormContener";
import { createReviewAction } from "@/utils/actions";
import RatingInput from "./RatingInput";
import TextAreaInput from "../form/TextAreaInput";

function SubmitReview({ productId }: { productId: string }) {
  return (
    <div>
      <Card className="p-8 mt-8">
        <FormContainer action={createReviewAction}>
          <input type="hidden" name="productId" value={productId} />
          <RatingInput name="rating" />
          <TextAreaInput
            name="comment"
            labelText="feedback"
            defaultValue="Outstanding product!!!"
          />
          <SubmitButton className="mt-4" />
        </FormContainer>
      </Card>
    </div>
  );
}
export default SubmitReview;
