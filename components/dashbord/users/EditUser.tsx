import { Users } from "@prisma/client";
import React from "react";

function EditUser({ user }: { user: Users }) {
  return <div>{user.name}</div>;
}

export default EditUser;
