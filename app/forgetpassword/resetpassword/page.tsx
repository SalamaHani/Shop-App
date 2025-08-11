import ResetPass from "@/components/email/resetpass";
import prisma from "@/utils/db";
import { toast } from "sonner";

interface ResetPss {
  searchParams: { [key: string]: string | string[] | undefined };
}

const ResetPassword = async ({ searchParams }: ResetPss) => {
  if (searchParams.token) {
    const user = await prisma.users.findFirst({
      where: {
        resetPasswordToken: searchParams.token as string,
      },
    });
    if (!user) {
      return toast("Invaild token!");
    }
    return <ResetPass email={user.email} />;
  }
};

export default ResetPassword;
