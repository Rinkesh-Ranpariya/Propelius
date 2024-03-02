import { toast } from "react-toastify";

export const toastHandler = (message: string, type: "success" | "error") => {
  toast(message, {
    type,
  });
};
