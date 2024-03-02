"use client"; // Error components must be Client Components

import errorComponent from "./components/errorComponent";

export default function Error({ error, reset }) {
  return errorComponent(error, reset);
}
