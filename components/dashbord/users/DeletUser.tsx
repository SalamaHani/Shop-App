import { IconButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContener";
import { deleteUser } from "@/utils/actions";


function DeleteUser({ userId }: { userId: string }) {
  const deleteuser = deleteUser.bind(null, { userId });
  return (
    <FormContainer className="" action={deleteuser}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}
export default DeleteUser;