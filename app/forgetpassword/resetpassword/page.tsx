import ResetPass from "@/components/email/resetpass";
import prisma from "@/utils/db";
import { redirect } from "next/navigation";

interface ResetPss {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
const ResetPassword = async ({ searchParams }: ResetPss) => {
  const parmes = await searchParams;
  if (parmes.token) {
    const user = await prisma.users.findFirst({
      where: {
        resetPasswordToken: parmes.token as string,
      },
    });
    if (!user) {
      redirect("/login");
    }
    return <ResetPass email={user.email} />;
  }
};

export default ResetPassword;
