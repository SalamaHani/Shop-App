import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import FormContainer from "../form/FormContener";
import { createReviewAction } from "@/utils/actions";
import RatingInput from "./RatingInput";
import TextAreaInput from "../form/TextAreaInput";
import { SubmitButton } from "../form/Buttons";
import { getUserFromSession } from "@/lib/auth";
import { cookies } from "next/headers";
import { MessageCircle } from "lucide-react";

export async function ReviewDiloge({ productId }: { productId: string }) {
  const user = await getUserFromSession(await cookies());
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="p-2">
          <MessageCircle />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle>Submiet Review</DialogTitle>
          <DialogDescription>
            Make here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <FormContainer className="" action={createReviewAction}>
          <RatingInput name="rating" />
          <TextAreaInput
            name="comment"
            labelText="feedback"
            defaultValue="Outstanding product!!!"
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button size="lg" variant="destructive">
                Cancel
              </Button>
            </DialogClose>
            <input
              type="text"
              readOnly
              hidden
              name="productId"
              value={productId}
            />
            <input
              type="hidden"
              readOnly
              name="authorName"
              value={user?.name || "user"}
            />
            <SubmitButton text="Send Review" />
          </DialogFooter>
        </FormContainer>
      </DialogContent>
    </Dialog>
  );
}
