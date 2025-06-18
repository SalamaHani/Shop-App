import { FormState } from "./schema";
export type actionFunction = (
  prevState: FormState,
  formData: FormData
) => Promise<{ message: string }>;
