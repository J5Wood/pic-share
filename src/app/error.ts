"use client";

import ErrorComponent from "./components/errorComponent";
import { ErrorInterface } from "./components/errorComponent";

export default function Error({ error }: ErrorInterface) {
  return ErrorComponent({ error });
}
